
import { useEffect, useState } from "react";
import { TravelGuide } from "../types/guide";
import { getCurrentTripDay } from "../utils/date";

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

  return (
    <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-provence-lavender/30 mb-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-provence-lavender">Trip Progress</h3>
        <span className="text-sm text-provence-lavender">
          Day {currentDayIndex + 1} of {guideData.days.length}
        </span>
      </div>
      
      <div className="w-full bg-provence-gray/20 rounded-full h-2.5 mb-2">
        <div 
          className="bg-gradient-to-r from-provence-lavender to-provence-blue h-2.5 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <p className="text-xs text-provence-lavender/80">
        {Math.round(progress)}% of your Côte d'Azur adventure complete!
      </p>
    </div>
  );
};

export default TripProgress;
