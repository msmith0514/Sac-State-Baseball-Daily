export type SourceStamp={ provider:string; url?:string; fetchedAt:string };
export type VerifiedGamePerformance={ externalPlayerId:string; externalGameId:string; gameDate:string; appeared:boolean; batting?:Record<string,number>; pitching?:Record<string,number>; source:SourceStamp };
export type VerifiedLiveGame={
  externalPlayerId:string;
  externalGameId:string;
  status:"SCHEDULED"|"LIVE"|"FINAL"|"DELAYED"|"POSTPONED"|"CANCELED"|"UNKNOWN";
  scheduledStartAt?:string;
  opponent:string;
  teamScore?:number;
  opponentScore?:number;
  liveDetail?:string;
  watch?:{ label:string; url?:string; sourceUrl?:string };
  source:SourceStamp;
};
export interface BaseballProvider {
  name:string;
  getPerformancesForDate(date:string, externalPlayerIds:string[]):Promise<VerifiedGamePerformance[]>;
  getSeasonStats(externalPlayerId:string, season:number):Promise<{stats:Record<string,number>;source:SourceStamp}|null>;
  getLiveGamesForPlayers?(externalPlayerIds:string[]):Promise<VerifiedLiveGame[]>;
}
