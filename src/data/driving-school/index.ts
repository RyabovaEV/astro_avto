export * from './schema'
export {basePrice} from './basePrice'
export {dangerGoodsPrice} from './dangerGoodsPrice'

import {program_B} from './programs/program_B'
import {program_BC} from './programs/program_BC'
import {program_CD} from './programs/program_CD'
import {program_BD} from './programs/program_BD'

export const programsMap = {
  B: program_B,
  BC: program_BC,
  BD: program_BD,
  CD: program_CD
}