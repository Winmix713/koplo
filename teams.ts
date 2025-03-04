import { Team } from '../../types/Team';

export const mockTeams: Team[] = [
  {
    id: '1',
    name: 'Liverpool FC',
    shortName: 'Liverpool',
    logo: 'https://images.unsplash.com/photo-1623796898624-78f6e1ac54b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80',
    country: 'England',
    city: 'Liverpool',
    founded: 1892,
    venue: {
      name: 'Anfield',
      capacity: 53394,
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80'
    },
    colors: {
      primary: '#C8102E',
      secondary: '#FFFFFF'
    },
    stats: {
      wins: { value: 20, percentage: 67 },
      draws: { value: 5, percentage: 17 },
      losses: { value: 5, percentage: 17 }
    }
  },
  {
    id: '2',
    name: 'Manchester City FC',
    shortName: 'Man City',
    logo: 'https://images.unsplash.com/photo-1624280157150-4d1ed8219514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80',
    country: 'England',
    city: 'Manchester',
    founded: 1880,
    venue: {
      name: 'Etihad Stadium',
      capacity: 55097,
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80'
    },
    colors: {
      primary: '#6CABDD',
      secondary: '#FFFFFF'
    },
    stats: {
      wins: { value: 22, percentage: 73 },
      draws: { value: 4, percentage: 13 },
      losses: { value: 4, percentage: 13 }
    }
  },
  {
    id: '3',
    name: 'FC Bayern Munich',
    shortName: 'Bayern',
    logo: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80',
    country: 'Germany',
    city: 'Munich',
    founded: 1900,
    venue: {
      name: 'Allianz Arena',
      capacity: 75024,
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80'
    },
    colors: {
      primary: '#DC052D',
      secondary: '#FFFFFF'
    },
    stats: {
      wins: { value: 25, percentage: 83 },
      draws: { value: 3, percentage: 10 },
      losses: { value: 2, percentage: 7 }
    }
  },
  {
    id: '4',
    name: 'Borussia Dortmund',
    shortName: 'Dortmund',
    logo: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80',
    country: 'Germany',
    city: 'Dortmund',
    founded: 1909,
    venue: {
      name: 'Signal Iduna Park',
      capacity: 81365,
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80'
    },
    colors: {
      primary: '#FDE100',
      secondary: '#000000'
    },
    stats: {
      wins: { value: 18, percentage: 60 },
      draws: { value: 6, percentage: 20 },
      losses: { value: 6, percentage: 20 }
    }
  }
];