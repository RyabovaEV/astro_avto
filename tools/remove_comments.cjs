const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");

const SKIP_DIRS = new Set([
  ".git",
  ".idea",
  ".vscode",
  "node_modules",
  "dist",
  "build",
  ".cursor",
  "terminals",
  ".astro",
]);

const CODE_EXTENSIONS = new Set([
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
]);

function removeBlockComments(content) {
  // /* ... */ style
  content = content.replace(/\/\*[\s\S]*?\*\//g, "");
  // <!-- ... --> style
  content = content.replace(/<!--[\s\S]*?-->/g, "");
  return content;
}

function removeLineComments(content) {
  function stripLineComment(line) {
    // Remove // comment if it's not part of a protocol like http:// or https://
    const match = line.match(/(^|[^:"'])\/\//);
    if (!match) return line;
    const idx = match.index;
    return line.slice(0, idx).trimEnd();
  }

  const lines = content.split(/\r?\n/);
  const cleaned = lines.map(stripLineComment);
  let result = cleaned.join("\n");
  if (content.endsWith("\n") && !result.endsWith("\n")) {
    result += "\n";
  }
  return result;
}

function processFile(filePath) {
  let original;
  try {
    original = fs.readFileSync(filePath, "utf8");
  } catch {
    return;
  }

  let updated = removeBlockComments(original);
  updated = removeLineComments(updated);

  if (updated !== original) {
    fs.writeFileSync(filePath, updated, "utf8");
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walk(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (CODE_EXTENSIONS.has(ext)) {
        processFile(fullPath);
      }
    }
  }
}

walk(ROOT_DIR);

