
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TravelGuide } from "../types/guide";
import { getGuideData } from "../utils/storage";
import { getCurrentTripDay } from "../utils/date";
import TripHeader from "../components/TripHeader";
import CountdownBadge from "../components/CountdownBadge";
import DailyOverview from "../components/DailyOverview";

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
      <TripHeader title="UsTwo Guide – South-of-France 2025" />
      
      <div className="container px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-2xl font-bold mb-3 text-center">South of France</h1>
          <p className="text-center text-muted-foreground mb-8">
            Your custom travel guide for an unforgettable journey
          </p>
          
          <CountdownBadge />
          
          {todayDay && (
            <div className="mt-10 w-full max-w-md">
              <h2 className="text-xl font-semibold mb-3 text-center">Today's Plan</h2>
              <DailyOverview day={todayDay} isToday={true} />
            </div>
          )}
        </div>
        
        <div className="space-y-2 mt-8">
          <h2 className="text-xl font-semibold mb-4">Your Itinerary</h2>
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
      </div>
    </div>
  );
};

export default Index;
