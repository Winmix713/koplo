export interface LeagueStanding {
  position: number;
  team: {
    id: string;
    name: string;
    logo: string;
  };
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: string;
}

export interface League {
  id: string;
  name: string;
  country: string;
  logo: string;
  season: number;
  standings: LeagueStanding[];
}