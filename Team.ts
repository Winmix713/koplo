export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  country: string;
  city: string;
  founded: number;
  venue: {
    name: string;
    capacity: number;
    image: string;
  };
  colors: {
    primary: string;
    secondary: string;
  };
  stats: {
    wins: { value: number; percentage: number };
    draws: { value: number; percentage: number };
    losses: { value: number; percentage: number };
  };
}