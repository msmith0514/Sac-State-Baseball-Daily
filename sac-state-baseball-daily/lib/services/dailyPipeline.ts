import type { BaseballProvider, VerifiedGamePerformance } from "./types";

export type DailyPipelineResult={ date:string; performances:VerifiedGamePerformance[]; warnings:string[] };

export async function runDailyPipeline(args:{date:string; providers:BaseballProvider[]; externalPlayerIds:string[]}):Promise<DailyPipelineResult>{
  const warnings:string[]=[]; const rows:VerifiedGamePerformance[]=[];
  for(const provider of args.providers){
    try{ rows.push(...await provider.getPerformancesForDate(args.date,args.externalPlayerIds)); }
    catch(error){ warnings.push(`${provider.name}: statistics currently unavailable.`); console.error(error); }
  }
  return {date:args.date, performances:rows.filter(r=>r.appeared), warnings};
}

export function safeSummary(input:{name:string;result:string;statLine:string}){
  return `${input.name} recorded ${input.statLine} in ${input.result}.`;
}
