
import { format, parseISO, differenceInDays } from 'date-fns';

// First day of the trip
const TRIP_START_DATE = "2025-07-13";

// Format a date string to display format
export const formatDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'EEEE, MMMM d, yyyy');
};

// Get days left until the trip
export const getDaysUntilTrip = (): number => {
  const today = new Date();
  const tripStart = parseISO(TRIP_START_DATE);
  const daysLeft = differenceInDays(tripStart, today);
  
  return Math.max(0, daysLeft);
};

// Get today's date in ISO format
export const getTodayISODate = (): string => {
  const today = new Date();
  return format(today, 'yyyy-MM-dd');
};

// Find which day of the trip corresponds to today
export const getCurrentTripDay = (): string | null => {
  const today = getTodayISODate();
  
  // Mock for development - if today is before trip, return null
  const daysLeft = getDaysUntilTrip();
  if (daysLeft > 0) {
    return null;
  }

  // For demo purposes, we'll pretend today is one of the trip days
  // In a real app, we would compare actual dates
  return TRIP_START_DATE;
};
