
import { Stop } from "../types/guide";
import { MapPin } from "lucide-react";

interface TimelineStopProps {
  stop: Stop;
  isLast?: boolean;
}

const TimelineStop: React.FC<TimelineStopProps> = ({ stop, isLast = false }) => {
  // Map of activity types to emojis
  const getEmoji = () => {
    if (stop.emoji) return stop.emoji;
    
    if (stop.title.includes("Drive")) return "🚗";
    if (stop.title.includes("Breakfast") || stop.title.includes("Lunch") || stop.title.includes("Dinner")) return "🍽️";
    if (stop.title.includes("Beach") || stop.title.includes("swim")) return "🏖️";
    if (stop.title.includes("Walk") || stop.title.includes("Hike") || stop.title.includes("stroll")) return "🥾";
    if (stop.title.includes("View") || stop.title.includes("Scenic")) return "🌄";
    if (stop.title.includes("Museum") || stop.title.includes("Chapel") || stop.title.includes("Church")) return "🏛️";
    if (stop.title.includes("Market")) return "🛍️";
    if (stop.title.includes("Coffee") || stop.title.includes("café")) return "☕";
    if (stop.title.includes("Wine") || stop.title.includes("winery") || stop.title.includes("vineyard")) return "🍷";
    if (stop.title.includes("Ferry") || stop.title.includes("Boat")) return "⛴️";
    if (stop.title.includes("Bike") || stop.title.includes("Cycle")) return "🚲";
    if (stop.title.includes("Check-in") || stop.title.includes("Hotel")) return "🏨";
    return "📍";
  };

  const emoji = getEmoji();

  return (
    <div className="relative pl-8 pb-8">
      {!isLast && <div className="timeline-line" />}
      <div className="timeline-dot" />
      
      <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex justify-between items-start mb-1">
          <span className="font-semibold text-provence-lavender flex items-center gap-1">
            <span>{stop.time}</span>
            <span className="text-lg">{emoji}</span>
          </span>
          {stop.priority && (
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              stop.priority === "must-see" ? "bg-provence-peach/70" :
              stop.priority === "recommended" ? "bg-provence-blue/40" :
              "bg-provence-gray/50"
            }`}>
              {stop.priority}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold mb-1">{stop.title}</h3>
        
        {stop.town && (
          <div className="flex items-center gap-1 text-sm text-provence-lavender/80 mb-2">
            <MapPin size={14} />
            <span>{stop.town}</span>
          </div>
        )}
        
        <div className="mt-3 space-y-3">
          <div className="bg-provence-blue/10 p-3 rounded-md">
            <p className="text-sm">
              <span className="font-medium">Expect: </span> 
              {stop.expect}
            </p>
          </div>
          
          <div className="bg-provence-terracotta/20 p-3 rounded-md">
            <p className="text-sm">
              <span className="font-medium">Tip: </span> 
              {stop.tip}
            </p>
          </div>
          
          {(stop.cost || stop.duration || stop.reservation !== undefined) && (
            <div className="grid grid-cols-3 gap-2 text-xs mt-2">
              {stop.duration && (
                <div className="bg-provence-olive/30 p-2 rounded-md flex flex-col items-center">
                  <span className="font-medium">Duration</span>
                  <span>{stop.duration}</span>
                </div>
              )}
              
              {stop.cost && (
                <div className="bg-provence-gray/30 p-2 rounded-md flex flex-col items-center">
                  <span className="font-medium">Cost</span>
                  <span>{stop.cost}</span>
                </div>
              )}
              
              {stop.reservation !== undefined && (
                <div className="bg-provence-peach/20 p-2 rounded-md flex flex-col items-center">
                  <span className="font-medium">Reservation</span>
                  <span>{stop.reservation ? "Required" : "Not needed"}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineStop;
