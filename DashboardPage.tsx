import React, { useState, useEffect } from 'react';
import { ClubSummaryWidget } from '../modules/DashboardWidgets/ClubSummaryWidget';
import { AttendanceChart } from '../modules/DashboardWidgets/AttendanceWidget';
import { ResultsChart } from '../modules/DashboardWidgets/ResultsWidget';
import { TrainingPaceChart } from '../modules/DashboardWidgets/TrainingPaceWidget';
import { PassesStats } from '../modules/DashboardWidgets/PassesStatsWidget';
import { LeagueTable } from '../modules/DashboardWidgets/LeagueTableWidget';
import { TeamBayern } from '../modules/TeamBayern';
import { MatchCard } from '../modules/MatchCard';
import { TeamStatsCard } from '../modules/TeamStatsCard';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { fetchMatches, fetchLeagues } from '../../utils/api';
import { Match } from '../../types/Match';
import { League } from '../../types/League';

export const DashboardPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState<Match[]>([]);
  const [leagues, setLeagues] = useState<League[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [matchesData, leaguesData] = await Promise.all([
          fetchMatches(),
          fetchLeagues()
        ]);
        
        setMatches(matchesData);
        setLeagues(leaguesData);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  // Dummy data for widgets
  const attendanceData = {
    title: "Stadium Attendance",
    subtitle: "Average number of fans",
    value: "82,754",
    subtitle2: "+15% compared to last season",
  };

  const resultsData = {
    title: "Match Results",
    data: [
      { label: "Wins", value: 45, color: "#00e396" },
      { label: "Losses", value: 30, color: "#ff4560" },
      { label: "Draws", value: 25, color: "#ab47bc" },
    ],
  };

  const trainingPaceData = {
    title: "Training Pace",
    data: [
      { time: "8:00", value1: 50, value2: 30 },
      { time: "9:00", value1: 60, value2: 40 },
      { time: "10:00", value1: 70, value2: 50 },
      { time: "11:00", value1: 80, value2: 60 },
    ],
  };

  const passesStatsData = {
    title: "Passes Stats",
    data: {
      passes: 80,
      crosses: 60,
      corners: 40,
      shots: 70,
    },
  };

  const teamStatsData = {
    title: "Team Performance",
    stats: [
      { label: "Possession", value: 65, max: 100, color: "#04f5ff" },
      { label: "Shots on Target", value: 12, max: 20, color: "#f7a300" },
      { label: "Pass Accuracy", value: 88, max: 100, color: "#00e396" },
      { label: "Tackles Won", value: 18, max: 30, color: "#ab47bc" },
    ],
  };

  const teamBayernData = {
    teamName: "Bayern Munich",
    location: "Munich, Germany",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80",
    socialLinks: {
      facebook: "https://www.facebook.com/fcbayern",
      twitter: "https://twitter.com/FCBayernEN",
      youtube: "https://www.youtube.com/c/fcbayern",
    },
    players: [
      { name: "Manuel Neuer", number: 1 },
      { name: "Harry Kane", number: 9 },
      { name: "Thomas Müller", number: 25 },
      { name: "Joshua Kimmich", number: 6 },
      { name: "Leroy Sané", number: 10 },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#1a1a1a] rounded-md p-4">
          <h2 className="text-white font-medium mb-4">Featured Club</h2>
          <TeamBayern {...teamBayernData} />
        </div>
        
        <AttendanceChart {...attendanceData} />
        <ResultsChart {...resultsData} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <TrainingPaceChart {...trainingPaceData} />
        <PassesStats {...passesStatsData} />
        <TeamStatsCard {...teamStatsData} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-4">Upcoming Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matches.slice(0, 2).map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
        
        <div>
          <LeagueTable 
            title="Premier League" 
            teams={leagues[0]?.standings.slice(0, 6).map(standing => ({
              position: standing.position,
              name: standing.team.name,
              played: standing.played,
              won: standing.won,
              drawn: standing.drawn,
              lost: standing.lost,
              points: standing.points
            })) || []}
          />
        </div>
      </div>
    </div>
  );
};