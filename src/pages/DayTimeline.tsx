
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Day } from "../types/guide";
import { getGuideData } from "../utils/storage";
import { formatDate } from "../utils/date";
import TripHeader from "../components/TripHeader";
import TimelineStop from "../components/TimelineStop";
import { Calendar, MapPin, Sun, Umbrella, Info } from "lucide-react";

const DayTimeline = () => {
  const { date } = useParams<{ date: string }>();
  const [dayData, setDayData] = useState<Day | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadData = async () => {
      try {
        const guideData = await getGuideData();
        const day = guideData.days.find(d => d.date === date);
        setDayData(day || null);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, [date]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <p className="text-muted-foreground">Loading day details...</p>
        </div>
      </div>
    );
  }
  
  if (!dayData) {
    return (
      <div>
        <TripHeader showBack={true} />
        <div className="container px-4 py-8 text-center">
          <h2 className="text-xl font-semibold">Day not found</h2>
          <p className="mt-2 text-muted-foreground">
            We couldn't find the day you're looking for.
          </p>
        </div>
      </div>
    );
  }

  // Get a relevant image for the day based on locations
  const getDayImage = () => {
    if (dayData.title.includes("Porquerolles")) {
      return "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80";
    } else if (dayData.title.includes("Moustiers")) {
      return "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80";
    } else if (dayData.title.includes("Grasse")) {
      return "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80";
    } else if (dayData.title.includes("Hyères")) {
      return "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80";
    } else if (dayData.title.includes("Nice")) {
      return "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80";
    }
    return "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80";
  };
  
  return (
    <div className="pb-12">
      <TripHeader showBack={true} title={dayData.title} />
      
      <div className="container px-4 py-6">
        <div className="mb-6">
          <div className="w-full h-48 rounded-lg mb-6 overflow-hidden">
            <img 
              src={getDayImage()} 
              alt={dayData.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Calendar className="w-5 h-5 text-provence-lavender" />
              {formatDate(dayData.date)}
            </h2>
            
            {dayData.weather && (
              <div className="flex items-center gap-1 text-sm bg-provence-blue/20 px-3 py-1 rounded-full">
                <Sun className="w-4 h-4" />
                <span>{dayData.weather}</span>
              </div>
            )}
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg mb-6">
            <p className="text-lg font-medium">{dayData.concept}</p>
            
            {dayData.drivingDistance && (
              <div className="mt-2 text-sm flex items-center">
                <span className="mr-1">🚗</span>
                <span>Total driving: {dayData.drivingDistance}</span>
              </div>
            )}
          </div>
          
          {dayData.notes && (
            <div className="bg-provence-olive/20 p-4 rounded-lg mb-6 flex items-start">
              <Info className="w-5 h-5 mr-2 text-provence-olive shrink-0 mt-1" />
              <p className="text-sm">{dayData.notes}</p>
            </div>
          )}
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-6 flex items-center">
            <span className="mr-2">⏱️</span> 
            Daily Timeline
          </h3>
          <div className="relative">
            {dayData.stops.map((stop, index) => (
              <TimelineStop 
                key={`${stop.time}-${stop.title}`} 
                stop={stop} 
                isLast={index === dayData.stops.length - 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayTimeline;
