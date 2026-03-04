import os
import re
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parents[1]

SKIP_DIRS = {
    ".git",
    ".idea",
    ".vscode",
    "node_modules",
    "dist",
    "build",
    ".cursor",
    "terminals",
    ".astro",
}

CODE_EXTENSIONS = {
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    ".mjs",
    ".cjs",
    ".astro",
    ".scss",
    ".sass",
    ".css",
    ".html",
    ".htm",
}


def remove_block_comments(content: str) -> str:
    # /* ... */ style
    content = re.sub(r"/\*[\s\S]*?\*/", "", content)
    # <!-- ... --> style
    content = re.sub(r"<!--[\s\S]*?-->", "", content)
    return content


def remove_line_comments(content: str) -> str:
    def strip_line_comment(line: str) -> str:
        # Remove // comment if it's not part of a protocol like http:// or https://
        # Match // that is either at start or preceded by a character that is not : or in quotes
        match = re.search(r'(^|[^:\"\'])//', line)
        if not match:
            return line
        idx = match.start(0)
        return line[:idx].rstrip()

    lines = content.splitlines()
    cleaned_lines = [strip_line_comment(line) for line in lines]
    return "\n".join(cleaned_lines) + ("\n" if content.endswith("\n") else "")


def process_file(path: Path) -> None:
    try:
        original = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return

    updated = remove_block_comments(original)
    updated = remove_line_comments(updated)

    if updated != original:
        path.write_text(updated, encoding="utf-8")


def main() -> None:
    for dirpath, dirnames, filenames in os.walk(ROOT_DIR):
        # Filter out directories we don't want to touch
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]

        for filename in filenames:
            path = Path(dirpath) / filename
            if path.suffix in CODE_EXTENSIONS:
                process_file(path)


if __name__ == "__main__":
    main()

