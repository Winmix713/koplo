import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart, Home, ShoppingCart, User, Trophy, Calendar, Newspaper, Users } from 'lucide-react';

interface SideNavProps {
  className?: string;
}

export const SideNav: React.FC<SideNavProps> = ({ className = '' }) => {
  const location = useLocation();

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Home className="h-5 w-5" />,
      path: '/',
      submenu: [],
    },
    {
      id: 'matches',
      label: 'Matches',
      icon: <Calendar className="h-5 w-5" />,
      path: '/matches',
      submenu: [
        { id: 'live-matches', label: 'Live Matches', path: '/matches/live' },
        { id: 'upcoming-matches', label: 'Upcoming', path: '/matches/upcoming' },
        { id: 'results', label: 'Results', path: '/matches/results' },
      ],
    },
    {
      id: 'standings',
      label: 'Standings',
      icon: <Trophy className="h-5 w-5" />,
      path: '/standings',
      submenu: [],
    },
    {
      id: 'teams',
      label: 'Teams',
      icon: <Users className="h-5 w-5" />,
      path: '/teams',
      submenu: [],
    },
    {
      id: 'news',
      label: 'News',
      icon: <Newspaper className="h-5 w-5" />,
      path: '/news',
      submenu: [],
    },
    {
      id: 'stats',
      label: 'Statistics',
      icon: <BarChart className="h-5 w-5" />,
      path: '/stats',
      submenu: [],
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <User className="h-5 w-5" />,
      path: '/profile',
      submenu: [],
    },
    {
      id: 'shop',
      label: 'Shop',
      icon: <ShoppingCart className="h-5 w-5" />,
      path: '/shop',
      submenu: [],
    },
  ];

  const subMenuItems = [
    { id: 'club-summary', label: 'Club summary', path: '/club-summary' },
    { id: 'game-summary', label: 'Game summary', path: '/game-summary' },
    { id: 'championships', label: 'Championships', path: '/championships' },
    { id: 'league-overview', label: 'League overview', path: '/league-overview' },
    { id: 'fans-community', label: 'Fans community', path: '/fans-community' },
    { id: 'statistics', label: 'Statistics', path: '/statistics' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isSubMenuActive = (id: string) => {
    return location.pathname === '/' && id === 'dashboard';
  };

  return (
    <aside className={`w-[200px] bg-[#111] border-r border-[#222] ${className}`}>
      <div className="flex h-16 items-center border-b border-[#222] px-4">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-sm bg-[#f7a300] flex items-center justify-center mr-2">
            <span className="text-xs font-bold text-black">soccer</span>
          </div>
          <span className="text-white font-bold">liga</span>
        </div>
      </div>

      <div className="py-4">
        {menuItems.map((item) => (
          <div key={item.id} className="mb-1">
            <Link
              to={item.path}
              className={`flex w-full items-center px-4 py-2 text-sm ${
                isActive(item.path) ? 'bg-[#222] text-white' : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-white'
              }`}
            >
              <div className="mr-3">{item.icon}</div>
              <span>{item.label}</span>
            </Link>

            {item.id === 'dashboard' && isSubMenuActive('dashboard') && (
              <div className="mt-1 pl-4">
                {subMenuItems.map((subItem) => (
                  <Link
                    key={subItem.id}
                    to={subItem.path}
                    className={`flex w-full items-center px-4 py-1.5 text-xs ${
                      isActive(subItem.path) ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>{subItem.label}</span>
                  </Link>
                ))}
              </div>
            )}

            {item.submenu.length > 0 && isActive(item.path) && (
              <div className="mt-1 pl-4">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.id}
                    to={subItem.path}
                    className={`flex w-full items-center px-4 py-1.5 text-xs ${
                      isActive(subItem.path) ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>{subItem.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};