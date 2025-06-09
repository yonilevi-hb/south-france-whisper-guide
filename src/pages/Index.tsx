
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
import { MapPin, Sparkles, Heart } from "lucide-react";

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-provence-lavender/10 via-provence-peach/5 to-provence-blue/10">
        <div className="animate-pulse text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-provence-lavender to-provence-peach rounded-full animate-bounce mx-auto mb-6 shadow-lg"></div>
          <p className="text-muted-foreground font-medium">Preparing your romantic escape...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pb-8 bg-gradient-to-br from-provence-lavender/5 via-white to-provence-peach/5 min-h-screen">
      <TripHeader title="Côte d'Azur Romance for Lyne & Yoni" />
      
      <div className="container px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl mb-8 hover-scale shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" 
              alt="South of France" 
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
            <div className="absolute top-4 right-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 animate-pulse">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1 className="text-3xl font-bold mb-2 flex items-center">
                <span>Your Romantic Escape</span>
                <span className="ml-2">💕</span>
              </h1>
              <div className="flex items-center text-white/90">
                <MapPin className="w-4 h-4 mr-1" />
                <p className="text-sm font-medium">Provence-Alpes-Côte d'Azur</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-8 max-w-lg">
            <p className="text-lg text-muted-foreground mb-2 leading-relaxed font-light">
              A love story written across the <span className="text-provence-lavender font-medium">lavender fields</span>, 
              <span className="text-provence-blue font-medium"> azure coastlines</span>, and 
              <span className="text-provence-peach font-medium"> golden sunsets</span> of Southern France
            </p>
            <p className="text-sm text-muted-foreground/80 italic">
              "Every sunset brings you closer to a new adventure together" ✨
            </p>
          </div>
          
          <CountdownBadge />
          
          {guideData && <TripProgress guideData={guideData} />}
          
          <QuickActions />
          
          {todayDay && (
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-3">
                <Heart className="w-6 h-6 text-provence-peach animate-pulse" fill="currentColor" />
                <span className="bg-gradient-to-r from-provence-lavender to-provence-peach bg-clip-text text-transparent">
                  Today's Romantic Adventure
                </span>
                <Heart className="w-6 h-6 text-provence-peach animate-pulse" fill="currentColor" />
              </h2>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <DailyOverview day={todayDay} isToday={true} />
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-2 mt-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-provence-lavender via-provence-blue to-provence-peach bg-clip-text text-transparent">
              Your Love Journey Through Provence
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Each day carefully crafted to create unforgettable moments together
            </p>
          </div>
          <div className="space-y-6">
            {guideData?.days.map((day, index) => (
              <div key={day.date} className="transform hover:scale-[1.02] transition-all duration-300">
                <DailyOverview 
                  day={day}
                  isToday={day.date === todayDate}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced romantic info sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {guideData?.emergencyContacts && (
            <div className="p-8 border border-provence-peach/20 rounded-2xl bg-gradient-to-br from-white/90 to-provence-peach/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-bold flex items-center mb-6 text-provence-peach text-lg">
                <span className="mr-3 text-2xl">🆘</span>Important Contacts
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/70 rounded-xl shadow-sm">
                  <span className="font-semibold">Police:</span>
                  <span className="text-provence-peach font-mono font-bold">{guideData.emergencyContacts.police}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/70 rounded-xl shadow-sm">
                  <span className="font-semibold">Ambulance:</span>
                  <span className="text-provence-peach font-mono font-bold">{guideData.emergencyContacts.ambulance}</span>
                </div>
                {guideData.emergencyContacts.tourist && (
                  <div className="flex justify-between items-center p-4 bg-white/70 rounded-xl shadow-sm">
                    <span className="font-semibold">Tourist Help:</span>
                    <span className="text-provence-peach font-mono font-bold">{guideData.emergencyContacts.tourist}</span>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {guideData?.generalTips && guideData.generalTips.length > 0 && (
            <div className="p-8 border border-provence-blue/20 rounded-2xl bg-gradient-to-br from-white/90 to-provence-blue/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-bold flex items-center mb-6 text-provence-blue text-lg">
                <span className="mr-3 text-2xl">💝</span>Romantic Tips
              </h3>
              <ul className="space-y-3">
                {guideData.generalTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-white/70 rounded-xl text-sm shadow-sm">
                    <span className="text-provence-blue font-bold min-w-[24px] mt-0.5">{index + 1}.</span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Romantic footer */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-provence-lavender/30 via-provence-peach/20 to-provence-blue/30 rounded-full shadow-lg backdrop-blur-sm">
            <Heart className="w-5 h-5 text-provence-peach animate-pulse" fill="currentColor" />
            <span className="text-lg font-semibold bg-gradient-to-r from-provence-lavender to-provence-blue bg-clip-text text-transparent">
              Bon voyage, mes amours!
            </span>
            <Heart className="w-5 h-5 text-provence-peach animate-pulse" fill="currentColor" />
          </div>
          <p className="mt-4 text-sm text-muted-foreground italic">
            "L'amour est dans l'air" - Love is in the air 💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
