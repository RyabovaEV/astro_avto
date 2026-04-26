 import type { PriceCard } from './schema'

 export const basePrice: PriceCard[] =  [
   {
     category: [
       {description: "«В» (легковая)"}
     ],
     price: "50 000 руб.",
     termOfStudy: "3-3,5 месяца (60 рабочих дней)"
   },
   {
     category: [
       {
         description: "«D» (автобус)",
         note: "с категории «В», «С»"
       }
     ],
     price: "50 000 руб.",
     termOfStudy: "2-2,5 месяца (60 рабочих дней)"
   },
 ]