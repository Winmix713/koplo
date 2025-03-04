import { format, parseISO } from 'date-fns';

export const formatDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'MMMM dd, yyyy');
};

export const formatTime = (timeString: string): string => {
  return timeString;
};

export const formatMatchDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'EEE, MMM dd');
};

export const formatMatchTime = (timeString: string): string => {
  return timeString;
};

export const getRelativeTime = (dateString: string): string => {
  const date = parseISO(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} days ago`;
  }
  
  return format(date, 'MMMM dd, yyyy');
};