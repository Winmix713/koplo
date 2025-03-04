export interface Player {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  number: number;
  position: string;
  age: number;
  nationality: string;
  image: string;
  teamId: string;
  stats: {
    appearances: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    minutesPlayed: number;
  };
}