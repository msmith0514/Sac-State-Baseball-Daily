import type { BaseballProvider, VerifiedGamePerformance, VerifiedLiveGame } from "./types";

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

export async function getVerifiedLiveGames(args:{providers:BaseballProvider[]; externalPlayerIds:string[]}){
  const warnings:string[]=[];
  const games:VerifiedLiveGame[]=[];
  for(const provider of args.providers){
    if(!provider.getLiveGamesForPlayers) continue;
    try{ games.push(...await provider.getLiveGamesForPlayers(args.externalPlayerIds)); }
    catch(error){ warnings.push(`${provider.name}: live game status currently unavailable.`); console.error(error); }
  }
  return { games: games.filter(game=>game.status==="LIVE"), warnings };
}
