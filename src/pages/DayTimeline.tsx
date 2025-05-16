
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Day } from "../types/guide";
import { getGuideData } from "../utils/storage";
import { formatDate } from "../utils/date";
import TripHeader from "../components/TripHeader";
import TimelineStop from "../components/TimelineStop";

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
  
  return (
    <div className="pb-12">
      <TripHeader showBack={true} title={dayData.title} />
      
      <div className="container px-4 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold">{formatDate(dayData.date)}</h2>
          <p className="text-muted-foreground">{dayData.concept}</p>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-6">Daily Timeline</h3>
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
