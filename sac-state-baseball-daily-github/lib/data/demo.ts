export type LiveGame = {
  playerSlug: string;
  playerName: string;
  team: string;
  position: string;
  opponent: string;
  teamScore?: number;
  opponentScore?: number;
  liveDetail: string;
  watchLabel?: string;
  watchUrl?: string;
  updatedAt: string;
};

export type Performance = {
  slug: string;
  name: string;
  team: string;
  level: string;
  position: string;
  sacYears: string;
  opponent: string;
  result: string;
  won: boolean;
  yesterday: string;
  season: string;
  summary: string;
  badge?: string;
  score: number;
  photo: string;
};

export const demoDate = "August 17, 2026";

export const performances: Performance[] = [
  {
    slug: "marcus-reed",
    name: "Marcus Reed",
    team: "Sacramento Solons",
    level: "Triple-A",
    position: "OF",
    sacYears: "Sac State 2021-23",
    opponent: "vs. Tacoma",
    result: "W, 6-4",
    won: true,
    yesterday: "2-for-4 · HR · 2 RBI · BB",
    season: ".287 AVG · 12 HR · 46 RBI",
    summary: "Reed reached base three times and supplied the go-ahead two-run homer in a 6-4 win.",
    badge: "TOP PERFORMANCE",
    score: 9.6,
    photo: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80"
  },
  {
    slug: "eli-carter",
    name: "Eli Carter",
    team: "Current Hornets",
    level: "NCAA",
    position: "RHP",
    sacYears: "Sac State 2025-present",
    opponent: "vs. Pacific",
    result: "W, 5-2",
    won: true,
    yesterday: "6.0 IP · 4 H · 1 ER · 7 K",
    season: "3.18 ERA · 58 K · 1.17 WHIP",
    summary: "Carter worked six efficient innings, allowing one earned run while striking out seven.",
    badge: "GREAT OUTING",
    score: 8.8,
    photo: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=900&q=80"
  },
  {
    slug: "noah-bishop",
    name: "Noah Bishop",
    team: "Central Valley Oaks",
    level: "Double-A",
    position: "SS",
    sacYears: "Sac State 2020-22",
    opponent: "at Amarillo",
    result: "L, 3-5",
    won: false,
    yesterday: "3-for-5 · 2B · R",
    season: ".264 AVG · .744 OPS · 18 SB",
    summary: "Bishop collected three hits, including a double, and scored once in a narrow road loss.",
    badge: "HOT",
    score: 7.5,
    photo: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=900&q=80"
  },
  {
    slug: "owen-price",
    name: "Owen Price",
    team: "Bay City Seals",
    level: "High-A",
    position: "C",
    sacYears: "Sac State 2022-24",
    opponent: "vs. Eugene",
    result: "W, 8-1",
    won: true,
    yesterday: "1-for-3 · 2B · 2 BB · RBI",
    season: ".251 AVG · .358 OBP · 31 RBI",
    summary: "Price reached safely three times and drove in a run during an 8-1 home victory.",
    score: 6.4,
    photo: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=80"
  }
];

export const news = [
  { title: "Demo: Former Hornet stays hot during August stretch", source: "Team website placeholder", date: "Aug 17", player: "Marcus Reed", summary: "Example news card for visual evaluation. Production content must come from an approved source URL.", image: "https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=1200&q=80" },
  { title: "Demo: Sacramento State rotation showing late-season depth", source: "Athletics placeholder", date: "Aug 16", player: "Eli Carter", summary: "This is intentionally labeled demo content and is not presented as a real article or reported event.", image: "https://images.unsplash.com/photo-1504305754058-2f08ccd89a0a?auto=format&fit=crop&w=1200&q=80" },
  { title: "Demo: Alumni notebook — three prospects trending upward", source: "Baseball publication placeholder", date: "Aug 15", player: "Multiple alumni", summary: "Production will preserve article title, publisher, date, canonical URL, and matched players.", image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1200&q=80" }
];

export const videos = [
  { player: "Marcus Reed", date: "Aug 17", title: "Demo highlight: two-run home run", source: "Video placeholder", image: "https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=1200&q=80" },
  { player: "Eli Carter", date: "Aug 17", title: "Demo highlight: seven-strikeout outing", source: "Video placeholder", image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=1200&q=80" }
];


export const liveGames: LiveGame[] = [
  {
    playerSlug: "marcus-reed",
    playerName: "Marcus Reed",
    team: "Sacramento Solons",
    position: "OF",
    opponent: "Tacoma",
    teamScore: 2,
    opponentScore: 1,
    liveDetail: "Top 5th",
    watchLabel: "Team stream (demo placeholder)",
    updatedAt: "5:00 PM PT"
  }
];
