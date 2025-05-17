
import { Link } from "react-router-dom";
import { Day } from "../types/guide";
import { formatDate } from "../utils/date";
import { Calendar, Clock, Hotel } from "lucide-react";

interface DailyOverviewProps {
  day: Day;
  isToday?: boolean;
}

const DailyOverview: React.FC<DailyOverviewProps> = ({ day, isToday = false }) => {
  // Generate daily emoji based on the day's activities or title
  const getDayEmoji = () => {
    if (day.emoji) return day.emoji;
    
    if (day.title.includes("Beach") || day.title.includes("sea")) return "🏖️";
    if (day.title.includes("fireworks") || day.title.includes("Bastille")) return "🎆";
    if (day.title.includes("vineyard") || day.title.includes("wine")) return "🍷";
    if (day.title.includes("Island") || day.title.includes("Porquerolles")) return "🏝️";
    if (day.title.includes("art") || day.title.includes("gallery")) return "🎨";
    if (day.title.includes("perfume") || day.title.includes("Grasse")) return "🌹";
    if (day.title.includes("medieval") || day.title.includes("village")) return "🏰";
    return "🗺️";
  };
  
  const dayEmoji = getDayEmoji();
  
  return (
    <Link to={`/day/${day.date}`} className="block hover-scale">
      <div className={`p-4 rounded-xl ${isToday ? 'bg-provence-lavender/20 border border-provence-lavender' : 'bg-white/50 border border-provence-lavender/30'} shadow-sm transition-all hover:shadow-md hover:bg-white/80`}>
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-muted-foreground">
              {formatDate(day.date)}
            </h3>
          </div>
          {isToday && (
            <span className="px-2 py-0.5 bg-provence-lavender text-sm rounded-full font-semibold">
              TODAY
            </span>
          )}
        </div>
        <h2 className="text-lg font-semibold mb-1 flex items-center gap-1">
          <span className="text-xl mr-1">{dayEmoji}</span> {day.title}
        </h2>
        <p className="text-sm text-muted-foreground">{day.concept}</p>
        
        {day.weather && (
          <div className="mt-2 text-sm text-provence-blue">
            <span className="inline-flex items-center">
              <span className="mr-1">🌤️</span> {day.weather}
            </span>
          </div>
        )}
        
        {day.hotel && (
          <div className="mt-2 text-sm flex items-center gap-1">
            <Hotel className="w-3 h-3 text-provence-blue" />
            <span className="text-provence-blue">{day.hotel.name}</span>
          </div>
        )}
        
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm">{day.stops.length} stops</span>
          <span className="text-xs px-3 py-1 bg-provence-blue/20 rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {day.stops[0].time} - {day.stops[day.stops.length - 1].time}
          </span>
        </div>
        
        {day.drivingDistance && (
          <div className="mt-2 text-xs px-3 py-1 bg-provence-terracotta/20 rounded-full inline-flex items-center">
            <span className="mr-1">🚗</span> {day.drivingDistance} driving
          </div>
        )}
      </div>
    </Link>
  );
};

export default DailyOverview;
