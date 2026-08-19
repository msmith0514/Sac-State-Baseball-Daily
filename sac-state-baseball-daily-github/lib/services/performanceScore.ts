type HitterLine = { hits:number; doubles:number; triples:number; homeRuns:number; rbi:number; runs:number; walks:number; stolenBases:number; atBats:number; };
type PitcherLine = { innings:number; strikeouts:number; saves:number; wins:number; earnedRuns:number; walks:number; pitches?:number; };

export function scoreHitter(s:HitterLine){
  const extraBaseHits=s.doubles+s.triples+s.homeRuns;
  return Number((s.hits*1.5+s.homeRuns*2.5+extraBaseHits*.75+s.rbi*.8+s.runs*.5+s.walks*.45+s.stolenBases*.8).toFixed(2));
}

export function scorePitcher(s:PitcherLine){
  const scorelessBonus=s.earnedRuns===0?s.innings*.35:0;
  const efficiencyPenalty=s.pitches && s.innings>0 ? Math.max(0,(s.pitches/s.innings-17)*.08):0;
  return Number((s.innings*.8+s.strikeouts*.7+s.saves*2+s.wins*1.5+scorelessBonus-s.earnedRuns*1.25-s.walks*.45-efficiencyPenalty).toFixed(2));
}
