
import { TravelGuide } from "../types/guide";
import { travelGuide as initialData } from "../data/itinerary";

// Mock of AsyncStorage for web
const storage = {
  setItem: (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
  getItem: (key: string) => {
    try {
      const value = localStorage.getItem(key);
      return Promise.resolve(value);
    } catch (e) {
      return Promise.reject(e);
    }
  },
};

// Keys
const GUIDE_DATA_KEY = 'SOUTHFRANCE_GUIDE_DATA';
const NOTIFICATIONS_ENABLED_KEY = 'SOUTHFRANCE_NOTIFICATIONS_ENABLED';

// Initialize data if not present
export const initializeStorage = async (): Promise<void> => {
  try {
    const existingData = await storage.getItem(GUIDE_DATA_KEY);
    if (!existingData) {
      await storage.setItem(GUIDE_DATA_KEY, JSON.stringify(initialData));
    }
    
    // Initialize notifications setting if not present
    const notificationsEnabled = await storage.getItem(NOTIFICATIONS_ENABLED_KEY);
    if (notificationsEnabled === null) {
      await storage.setItem(NOTIFICATIONS_ENABLED_KEY, JSON.stringify(false));
    }
  } catch (error) {
    console.error("Error initializing storage:", error);
  }
};

// Get guide data
export const getGuideData = async (): Promise<TravelGuide> => {
  try {
    const data = await storage.getItem(GUIDE_DATA_KEY);
    return data ? JSON.parse(data) : initialData;
  } catch (error) {
    console.error("Error getting guide data:", error);
    return initialData;
  }
};

// Set notifications preference
export const setNotificationsEnabled = async (enabled: boolean): Promise<void> => {
  try {
    await storage.setItem(NOTIFICATIONS_ENABLED_KEY, JSON.stringify(enabled));
  } catch (error) {
    console.error("Error setting notifications preference:", error);
  }
};

// Get notifications preference
export const getNotificationsEnabled = async (): Promise<boolean> => {
  try {
    const enabled = await storage.getItem(NOTIFICATIONS_ENABLED_KEY);
    return enabled ? JSON.parse(enabled) : false;
  } catch (error) {
    console.error("Error getting notifications preference:", error);
    return false;
  }
};
