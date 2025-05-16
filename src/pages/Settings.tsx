
import { useEffect, useState } from "react";
import { getNotificationsEnabled, setNotificationsEnabled } from "../utils/storage";
import TripHeader from "../components/TripHeader";

const Settings = () => {
  const [notificationsEnabled, setNotificationsState] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const enabled = await getNotificationsEnabled();
        setNotificationsState(enabled);
      } catch (error) {
        console.error("Error loading settings:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadSettings();
  }, []);
  
  const handleToggleNotifications = async () => {
    try {
      const newValue = !notificationsEnabled;
      await setNotificationsEnabled(newValue);
      setNotificationsState(newValue);
    } catch (error) {
      console.error("Error updating notifications setting:", error);
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <p className="text-muted-foreground">Loading settings...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <TripHeader showBack={true} showSettings={false} title="Settings" />
      
      <div className="container px-4 py-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <div className="bg-white/70 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">30-Minute Reminders</h3>
                  <p className="text-sm text-muted-foreground">Get reminders 30 minutes before each stop</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={notificationsEnabled}
                    onChange={handleToggleNotifications}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-provence-lavender/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-provence-lavender"></div>
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <div className="bg-white/70 rounded-lg p-4 shadow-sm">
              <h3 className="font-medium mb-2">UsTwo Guide – South-of-France 2025</h3>
              <p className="text-sm text-muted-foreground mb-1">
                A simple offline travel guide for Yoni & his fiancée.
              </p>
              <p className="text-sm text-muted-foreground">
                Built with 💜 using React & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
