
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TravelGuide } from "../types/guide";
import { getGuideData } from "../utils/storage";
import { getCurrentTripDay } from "../utils/date";
import TripHeader from "../components/TripHeader";
import CountdownBadge from "../components/CountdownBadge";
import DailyOverview from "../components/DailyOverview";
import WeatherWidget from "../components/WeatherWidget";
import TripProgress from "../components/TripProgress";
import QuickActions from "../components/QuickActions";
import { MapPin, Sparkles } from "lucide-react";

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
          <div className="w-8 h-8 bg-provence-lavender/30 rounded-full animate-bounce mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your magical journey...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pb-8">
      <TripHeader title="Côte d'Azur for Lyne and Yoni" />
      
      <div className="container px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="relative w-full max-w-md overflow-hidden rounded-lg mb-8 hover-scale">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" 
              alt="South of France" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h1 className="text-2xl font-bold mb-1 flex items-center">
                <span>South of France</span>
                <span className="ml-2">🇫🇷</span>
              </h1>
              <div className="flex items-center text-white/90">
                <MapPin className="w-4 h-4 mr-1" />
                <p className="text-sm">Provence-Alpes-Côte d'Azur</p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-muted-foreground mb-6 max-w-md leading-relaxed">
            Your custom travel guide for an unforgettable journey through lavender fields,
            medieval villages, and azure coastlines ✨
          </p>
          
          <CountdownBadge />
          
          {guideData && <TripProgress guideData={guideData} />}
          
          <QuickActions />
          
          {todayDay && (
            <div className="w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4 text-center flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-provence-peach" />
                <span>Today's Adventure</span>
                <Sparkles className="w-5 h-5 text-provence-peach" />
              </h2>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <DailyOverview day={todayDay} isToday={true} />
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-2 mt-12">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <span className="mr-2">📅</span>Your Complete Itinerary
          </h2>
          <div className="space-y-4">
            {guideData?.days.map((day, index) => (
              <div key={day.date} className="transform hover:scale-105 transition-all duration-300">
                <DailyOverview 
                  day={day}
                  isToday={day.date === todayDate}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Info Sections */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {guideData?.emergencyContacts && (
            <div className="p-6 border border-provence-peach/30 rounded-lg bg-gradient-to-br from-white/80 to-provence-peach/10 backdrop-blur-sm shadow-sm">
              <h3 className="font-semibold flex items-center mb-4 text-provence-peach">
                <span className="mr-2 text-xl">🆘</span>Emergency Contacts
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-white/50 rounded">
                  <span className="font-medium">Police:</span>
                  <span className="text-provence-peach font-mono">{guideData.emergencyContacts.police}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/50 rounded">
                  <span className="font-medium">Ambulance:</span>
                  <span className="text-provence-peach font-mono">{guideData.emergencyContacts.ambulance}</span>
                </div>
                {guideData.emergencyContacts.tourist && (
                  <div className="flex justify-between items-center p-2 bg-white/50 rounded">
                    <span className="font-medium">Tourist Help:</span>
                    <span className="text-provence-peach font-mono">{guideData.emergencyContacts.tourist}</span>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {guideData?.generalTips && guideData.generalTips.length > 0 && (
            <div className="p-6 border border-provence-blue/30 rounded-lg bg-gradient-to-br from-white/80 to-provence-blue/10 backdrop-blur-sm shadow-sm">
              <h3 className="font-semibold flex items-center mb-4 text-provence-blue">
                <span className="mr-2 text-xl">💡</span>Essential Tips
              </h3>
              <ul className="space-y-2">
                {guideData.generalTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 p-2 bg-white/50 rounded text-sm">
                    <span className="text-provence-blue font-bold min-w-[20px]">{index + 1}.</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Fun footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-provence-lavender/20 to-provence-blue/20 rounded-full">
            <span>✨</span>
            <span className="text-sm font-medium">Bon voyage, Lyne & Yoni!</span>
            <span>✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
