
import { useEffect, useState } from "react";
import { TravelGuide } from "../types/guide";
import { getCurrentTripDay } from "../utils/date";
import { Heart, Sparkles } from "lucide-react";

interface TripProgressProps {
  guideData: TravelGuide;
}

const TripProgress: React.FC<TripProgressProps> = ({ guideData }) => {
  const [progress, setProgress] = useState(0);
  const [currentDayIndex, setCurrentDayIndex] = useState(-1);

  useEffect(() => {
    const today = getCurrentTripDay();
    if (today) {
      const dayIndex = guideData.days.findIndex(day => day.date === today);
      if (dayIndex >= 0) {
        setCurrentDayIndex(dayIndex);
        setProgress(((dayIndex + 1) / guideData.days.length) * 100);
      }
    }
  }, [guideData.days]);

  if (currentDayIndex === -1) {
    return null; // Trip hasn't started yet
  }

  const getRomanticMessage = () => {
    if (progress < 25) return "Your romantic adventure has just begun! 💕";
    if (progress < 50) return "Creating beautiful memories together 🌹";
    if (progress < 75) return "Your love story is blossoming 🌸";
    return "Almost time to treasure these moments forever 💎";
  };

  return (
    <div className="bg-gradient-to-r from-white/80 via-provence-lavender/10 to-white/80 backdrop-blur-sm p-6 rounded-2xl border border-provence-lavender/30 mb-8 shadow-lg w-full max-w-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-provence-lavender flex items-center gap-2">
          <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
          <span>Love Journey Progress</span>
        </h3>
        <span className="text-sm text-provence-lavender font-semibold flex items-center gap-1">
          <Sparkles className="w-4 h-4" />
          Day {currentDayIndex + 1} of {guideData.days.length}
        </span>
      </div>
      
      <div className="w-full bg-provence-gray/30 rounded-full h-3 mb-4 shadow-inner">
        <div 
          className="bg-gradient-to-r from-provence-lavender via-provence-peach to-provence-blue h-3 rounded-full transition-all duration-1000 ease-out shadow-sm relative overflow-hidden"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-sm text-provence-lavender/90 font-medium mb-1">
          {Math.round(progress)}% of your Côte d'Azur romance complete!
        </p>
        <p className="text-xs text-muted-foreground italic">
          {getRomanticMessage()}
        </p>
      </div>
    </div>
  );
};

export default TripProgress;
