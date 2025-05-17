
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TravelGuide } from "../types/guide";
import { getGuideData } from "../utils/storage";
import { getCurrentTripDay } from "../utils/date";
import TripHeader from "../components/TripHeader";
import CountdownBadge from "../components/CountdownBadge";
import DailyOverview from "../components/DailyOverview";
import { MapPin } from "lucide-react";

const Index = () => {
  const [guideData, setGuideData] = useState<TravelGuide | null>(null);
  const [todayDate, setTodayDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getGuideData();
        setGuideData(data);
        
        // Check if we're on one of the trip days
        const currentDay = getCurrentTripDay();
        setTodayDate(currentDay);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  const todayDay = guideData?.days.find(day => day.date === todayDate);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <p className="text-muted-foreground">Loading your guide...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pb-8">
      <TripHeader title="Côte d'Azur for Lyne and Yoni" />
      
      <div className="container px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-full max-w-md overflow-hidden rounded-lg mb-8">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" 
              alt="South of France" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          
          <h1 className="text-3xl font-bold mb-3 text-center flex items-center">
            <span>South of France</span>
            <span className="ml-2">🇫🇷</span>
          </h1>
          <div className="flex items-center mb-4 text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <p>Provence-Alpes-Côte d'Azur</p>
          </div>
          
          <p className="text-center text-muted-foreground mb-8 max-w-md">
            Your custom travel guide for an unforgettable journey through lavender fields,
            medieval villages, and azure coastlines
          </p>
          
          <CountdownBadge />
          
          {todayDay && (
            <div className="mt-10 w-full max-w-md">
              <h2 className="text-xl font-semibold mb-3 text-center flex items-center justify-center gap-2">
                <span>✨</span>
                <span>Today's Plan</span>
                <span>✨</span>
              </h2>
              <DailyOverview day={todayDay} isToday={true} />
            </div>
          )}
        </div>
        
        <div className="space-y-2 mt-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="mr-2">📅</span>Your Itinerary
          </h2>
          <div className="space-y-4">
            {guideData?.days.map((day) => (
              <DailyOverview 
                key={day.date} 
                day={day}
                isToday={day.date === todayDate}
              />
            ))}
          </div>
        </div>
        
        {guideData?.emergencyContacts && (
          <div className="mt-12 p-4 border border-provence-peach/30 rounded-lg bg-white/50">
            <h3 className="font-semibold flex items-center mb-2">
              <span className="mr-2">🆘</span>Emergency Contacts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-sm">
                <span className="font-medium block">Police:</span>
                {guideData.emergencyContacts.police}
              </div>
              <div className="text-sm">
                <span className="font-medium block">Ambulance:</span>
                {guideData.emergencyContacts.ambulance}
              </div>
              {guideData.emergencyContacts.tourist && (
                <div className="text-sm">
                  <span className="font-medium block">Tourist Help:</span>
                  {guideData.emergencyContacts.tourist}
                </div>
              )}
            </div>
          </div>
        )}
        
        {guideData?.generalTips && guideData.generalTips.length > 0 && (
          <div className="mt-8 p-4 border border-provence-blue/30 rounded-lg bg-white/50">
            <h3 className="font-semibold flex items-center mb-2">
              <span className="mr-2">💡</span>General Tips
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {guideData.generalTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
