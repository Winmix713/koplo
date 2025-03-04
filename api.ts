import axios from 'axios';
import { Match } from '../types/Match';
import { Team } from '../types/Team';
import { Player } from '../types/Player';
import { League } from '../types/League';
import { NewsArticle } from '../types/News';

// Mock data for development - in a real app, this would be replaced with actual API calls
import { mockMatches } from './mockData/matches';
import { mockTeams } from './mockData/teams';
import { mockPlayers } from './mockData/players';
import { mockLeagues } from './mockData/leagues';
import { mockNews } from './mockData/news';

// In a production environment, you would use a real API
// const API_BASE_URL = 'https://api.football-data.org/v4';
// const API_KEY = 'your-api-key';

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'X-Auth-Token': API_KEY
//   }
// });

// Mock API functions for development
export const fetchMatches = async (): Promise<Match[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockMatches;
};

export const fetchMatchById = async (id: string): Promise<Match | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockMatches.find(match => match.id === id);
};

export const fetchTeams = async (): Promise<Team[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockTeams;
};

export const fetchTeamById = async (id: string): Promise<Team | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockTeams.find(team => team.id === id);
};

export const fetchPlayers = async (teamId?: string): Promise<Player[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  if (teamId) {
    return mockPlayers.filter(player => player.teamId === teamId);
  }
  return mockPlayers;
};

export const fetchPlayerById = async (id: string): Promise<Player | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockPlayers.find(player => player.id === id);
};

export const fetchLeagues = async (): Promise<League[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockLeagues;
};

export const fetchLeagueById = async (id: string): Promise<League | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockLeagues.find(league => league.id === id);
};

export const fetchNews = async (): Promise<NewsArticle[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockNews;
};

export const fetchNewsById = async (id: string): Promise<NewsArticle | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockNews.find(article => article.id === id);
};