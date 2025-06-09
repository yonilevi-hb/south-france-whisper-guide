
import { Link } from "react-router-dom";
import { Day } from "../types/guide";
import { formatDate } from "../utils/date";
import { Calendar, Clock, Hotel, Heart, Sparkles } from "lucide-react";
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
    return "💕";
  };
  
  const dayEmoji = getDayEmoji();
  
  return (
    <Link to={`/day/${day.date}`} className="block hover-scale group">
      <div className={`p-6 rounded-2xl transition-all duration-500 shadow-lg hover:shadow-2xl border-2 relative overflow-hidden ${
        isToday 
          ? 'bg-gradient-to-br from-provence-lavender/40 via-provence-peach/20 to-provence-blue/30 border-provence-lavender shadow-2xl' 
          : 'bg-gradient-to-br from-white/90 to-provence-gray/20 border-provence-lavender/20 hover:bg-gradient-to-br hover:from-white hover:to-provence-lavender/10 hover:border-provence-lavender/50'
      } backdrop-blur-sm`}>
        
        {/* Romantic background pattern */}
        <div className="absolute top-0 right-0 opacity-10">
          <div className="flex space-x-1">
            <Heart className="w-4 h-4 text-provence-peach" fill="currentColor" />
            <Sparkles className="w-3 h-3 text-provence-lavender" />
          </div>
        </div>
        
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-muted-foreground">
              {formatDate(day.date)}
            </h3>
          </div>
          {isToday && (
            <span className="px-4 py-2 bg-gradient-to-r from-provence-peach to-provence-lavender text-white text-xs rounded-full font-bold animate-pulse shadow-lg flex items-center gap-1">
              <Heart className="w-3 h-3" fill="currentColor" />
              TODAY
            </span>
          )}
        </div>
        
        <h2 className="text-xl font-bold mb-3 flex items-center gap-3 group-hover:text-provence-lavender transition-colors">
          <span className="text-3xl">{dayEmoji}</span> 
          <span className="bg-gradient-to-r from-provence-lavender to-provence-blue bg-clip-text group-hover:text-transparent transition-all duration-300">
            {day.title}
          </span>
        </h2>
        
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-light italic">
          "{day.concept}"
        </p>
        
        {day.weather && (
          <div className="mb-4">
            <WeatherWidget weather={day.weather} />
          </div>
        )}
        
        {day.hotel && (
          <div className="mb-4 p-3 bg-white/80 rounded-xl shadow-sm border border-provence-blue/10">
            <div className="flex items-center gap-2 text-sm">
              <Hotel className="w-4 h-4 text-provence-blue" />
              <span className="text-provence-blue font-semibold">{day.hotel.name}</span>
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-provence-peach" />
            {day.stops.length} romantic moments planned
          </span>
          <span className="text-xs px-4 py-2 bg-provence-blue/20 rounded-full flex items-center gap-1 font-semibold shadow-sm">
            <Clock className="w-3 h-3" />
            {day.stops[0].time} - {day.stops[day.stops.length - 1].time}
          </span>
        </div>
        
        {day.drivingDistance && (
          <div className="inline-flex items-center text-xs px-4 py-2 bg-provence-terracotta/20 rounded-full shadow-sm">
            <span className="mr-1">🚗</span> 
            <span className="font-semibold">{day.drivingDistance} scenic drive</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default DailyOverview;
