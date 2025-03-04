export interface Match {
  id: string;
  homeTeam: {
    id: string;
    name: string;
    logo: string;
    score: number;
  };
  awayTeam: {
    id: string;
    name: string;
    logo: string;
    score: number;
  };
  date: string;
  time: string;
  venue: string;
  status: 'scheduled' | 'live' | 'finished';
  league: {
    id: string;
    name: string;
    logo: string;
  };
}