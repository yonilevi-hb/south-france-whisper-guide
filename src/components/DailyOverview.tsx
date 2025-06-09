
import { Link } from "react-router-dom";
import { Day } from "../types/guide";
import { formatDate } from "../utils/date";
import { Calendar, Clock, Hotel } from "lucide-react";
import WeatherWidget from "./WeatherWidget";

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
    <Link to={`/day/${day.date}`} className="block hover-scale group">
      <div className={`p-5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg border-2 ${
        isToday 
          ? 'bg-gradient-to-br from-provence-lavender/30 to-provence-blue/20 border-provence-lavender shadow-md' 
          : 'bg-white/70 border-provence-lavender/20 hover:bg-white/90 hover:border-provence-lavender/40'
      } backdrop-blur-sm`}>
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-muted-foreground">
              {formatDate(day.date)}
            </h3>
          </div>
          {isToday && (
            <span className="px-3 py-1 bg-provence-lavender text-white text-xs rounded-full font-bold animate-pulse shadow-sm">
              TODAY
            </span>
          )}
        </div>
        
        <h2 className="text-lg font-bold mb-2 flex items-center gap-2 group-hover:text-provence-lavender transition-colors">
          <span className="text-2xl">{dayEmoji}</span> 
          <span>{day.title}</span>
        </h2>
        
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{day.concept}</p>
        
        {day.weather && (
          <div className="mb-3">
            <WeatherWidget weather={day.weather} />
          </div>
        )}
        
        {day.hotel && (
          <div className="mb-3 p-2 bg-white/60 rounded-md">
            <div className="flex items-center gap-2 text-sm">
              <Hotel className="w-4 h-4 text-provence-blue" />
              <span className="text-provence-blue font-medium">{day.hotel.name}</span>
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">{day.stops.length} stops planned</span>
          <span className="text-xs px-3 py-1.5 bg-provence-blue/20 rounded-full flex items-center gap-1 font-medium">
            <Clock className="w-3 h-3" />
            {day.stops[0].time} - {day.stops[day.stops.length - 1].time}
          </span>
        </div>
        
        {day.drivingDistance && (
          <div className="inline-flex items-center text-xs px-3 py-1 bg-provence-terracotta/20 rounded-full">
            <span className="mr-1">🚗</span> 
            <span className="font-medium">{day.drivingDistance} driving</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default DailyOverview;
