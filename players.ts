import { Player } from '../../types/Player';

export const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'Mohamed Salah',
    firstName: 'Mohamed',
    lastName: 'Salah',
    number: 11,
    position: 'Forward',
    age: 31,
    nationality: 'Egypt',
    image: 'https://images.unsplash.com/photo-1623796898624-78f6e1ac54b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80',
    teamId: '1',
    stats: {
      appearances: 30,
      goals: 22,
      assists: 10,
      yellowCards: 2,
      redCards: 0,
      minutesPlayed: 2700
    }
  },
  {
    id: '2',
    name: 'Virgil van Dijk',
    firstName: 'Virgil',
    lastName: 'van Dijk',
    number: 4,
    position: 'Defender',
    age: 32,
    nationality: 'Netherlands',
    image: 'https://images.unsplash.com/photo-1623796898624-78f6e1ac54b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80',
    teamId: '1',
    stats: {
      appearances: 28,
      goals: 3,
      assists: 1,
      yellowCards: 4,
      redCards: 0,
      minutesPlayed: 2520
    }
  },
  {
    id: '3',
    name: 'Kevin De Bruyne',
    firstName: 'Kevin',
    lastName: 'De Bruyne',
    number: 17,
    position: 'Midfielder',
    age: 32,
    nationality: 'Belgium',
    image: 'https://images.unsplash.com/photo-1624280157150-4d1ed8219514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80',
    teamId: '2',
    stats: {
      appearances: 25,
      goals: 8,
      assists: 18,
      yellowCards: 3,
      redCards: 0,
      minutesPlayed: 2250
    }
  },
  {
    id: '4',
    name: 'Erling Haaland',
    firstName: 'Erling',
    lastName: 'Haaland',
    number: 9,
    position: 'Forward',
    age: 23,
    nationality: 'Norway',
    image: 'https://images.unsplash.com/photo-1624280157150-4d1ed8219514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80',
    teamId: '2',
    stats: {
      appearances: 30,
      goals: 35,
      assists: 5,
      yellowCards: 2,
      redCards: 0,
      minutesPlayed: 2700
    }
  },
  {
    id: '5',
    name: 'Manuel Neuer',
    firstName: 'Manuel',
    lastName: 'Neuer',
    number: 1,
    position: 'Goalkeeper',
    age: 38,
    nationality: 'Germany',
    image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80',
    teamId: '3',
    stats: {
      appearances: 28,
      goals: 0,
      assists: 0,
      yellowCards: 1,
      redCards: 0,
      minutesPlayed: 2520
    }
  },
  {
    id: '6',
    name: 'Harry Kane',
    firstName: 'Harry',
    lastName: 'Kane',
    number: 9,
    position: 'Forward',
    age: 30,
    nationality: 'England',
    image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80',
    teamId: '3',
    stats: {
      appearances: 30,
      goals: 30,
      assists: 8,
      yellowCards: 2,
      redCards: 0,
      minutesPlayed: 2700
    }
  }
];