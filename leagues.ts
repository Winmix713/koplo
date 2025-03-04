import { League } from '../../types/League';

export const mockLeagues: League[] = [
  {
    id: '1',
    name: 'Premier League',
    country: 'England',
    logo: 'https://images.unsplash.com/photo-1628891890467-b79f2c8ba7b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80',
    season: 2023,
    standings: [
      {
        position: 1,
        team: {
          id: '2',
          name: 'Manchester City',
          logo: 'https://images.unsplash.com/photo-1624280157150-4d1ed8219514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80'
        },
        played: 30,
        won: 22,
        drawn: 4,
        lost: 4,
        goalsFor: 70,
        goalsAgainst: 25,
        goalDifference: 45,
        points: 70,
        form: 'WWDWW'
      },
      {
        position: 2,
        team: {
          id: '1',
          name: 'Liverpool',
          logo: 'https://images.unsplash.com/photo-1623796898624-78f6e1ac54b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80'
        },
        played: 30,
        won: 20,
        drawn: 5,
        lost: 5,
        goalsFor: 65,
        goalsAgainst: 30,
        goalDifference: 35,
        points: 65,
        form: 'WLWDW'
      },
      {
        position: 3,
        team: {
          id: '9',
          name: 'Arsenal',
          logo: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80'
        },
        played: 30,
        won: 19,
        drawn: 5,
        lost: 6,
        goalsFor: 60,
        goalsAgainst: 28,
        goalDifference: 32,
        points: 62,
        form: 'WWLWW'
      },
      {
        position: 4,
        team: {
          id: '10',
          name: 'Tottenham',
          logo: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80'
        },
        played: 30,
        won: 17,
        drawn: 6,
        lost: 7,
        goalsFor: 55,
        goalsAgainst: 35,
        goalDifference: 20,
        points: 57,
        form: 'WDWLW'
      }
    ]
  },
  {
    id: '2',
    name: 'Bundesliga',
    country: 'Germany',
    logo: 'https://images.unsplash.com/photo-1628891890467-b79f2c8ba7b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80',
    season: 2023,
    standings: [
      {
        position: 1,
        team: {
          id: '3',
          name: 'Bayern Munich',
          logo: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80'
        },
        played: 30,
        won: 25,
        drawn: 3,
        lost: 2,
        goalsFor: 80,
        goalsAgainst: 20,
        goalDifference: 60,
        points: 78,
        form: 'WWWDW'
      },
      {
        position: 2,
        team: {
          id: '4',
          name: 'Borussia Dortmund',
          logo: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80'
        },
        played: 30,
        won: 18,
        drawn: 6,
        lost: 6,
        goalsFor: 65,
        goalsAgainst: 35,
        goalDifference: 30,
        points: 60,
        form: 'WDWLW'
      }
    ]
  }
];