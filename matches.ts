import { Match } from '../../types/Match';

export const mockMatches: Match[] = [
  {
    id: '1',
    homeTeam: {
      id: '1',
      name: 'Liverpool',
      logo: 'https://images.unsplash.com/photo-1623796898624-78f6e1ac54b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80',
      score: 2
    },
    awayTeam: {
      id: '2',
      name: 'Manchester City',
      logo: 'https://images.unsplash.com/photo-1624280157150-4d1ed8219514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80',
      score: 1
    },
    date: '2024-07-15',
    time: '21:30',
    venue: 'Anfield',
    status: 'live',
    league: {
      id: '1',
      name: 'Premier League',
      logo: 'https://images.unsplash.com/photo-1628891890467-b79f2c8ba7b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80'
    }
  },
  {
    id: '2',
    homeTeam: {
      id: '3',
      name: 'Bayern Munich',
      logo: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80',
      score: 3
    },
    awayTeam: {
      id: '4',
      name: 'Borussia Dortmund',
      logo: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80',
      score: 2
    },
    date: '2024-07-16',
    time: '19:30',
    venue: 'Allianz Arena',
    status: 'finished',
    league: {
      id: '2',
      name: 'Bundesliga',
      logo: 'https://images.unsplash.com/photo-1628891890467-b79f2c8ba7b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80'
    }
  },
  {
    id: '3',
    homeTeam: {
      id: '5',
      name: 'Barcelona',
      logo: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80',
      score: 0
    },
    awayTeam: {
      id: '6',
      name: 'Real Madrid',
      logo: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80',
      score: 0
    },
    date: '2024-07-17',
    time: '20:00',
    venue: 'Camp Nou',
    status: 'scheduled',
    league: {
      id: '3',
      name: 'La Liga',
      logo: 'https://images.unsplash.com/photo-1628891890467-b79f2c8ba7b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80'
    }
  },
  {
    id: '4',
    homeTeam: {
      id: '7',
      name: 'Juventus',
      logo: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80',
      score: 1
    },
    awayTeam: {
      id: '8',
      name: 'AC Milan',
      logo: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80',
      score: 1
    },
    date: '2024-07-18',
    time: '20:45',
    venue: 'Allianz Stadium',
    status: 'finished',
    league: {
      id: '4',
      name: 'Serie A',
      logo: 'https://images.unsplash.com/photo-1628891890467-b79f2c8ba7b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80'
    }
  }
];