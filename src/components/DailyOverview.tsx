
import { Link } from "react-router-dom";
import { Day } from "../types/guide";
import { formatDate } from "../utils/date";

interface DailyOverviewProps {
  day: Day;
  isToday?: boolean;
}

const DailyOverview: React.FC<DailyOverviewProps> = ({ day, isToday = false }) => {
  return (
    <Link to={`/day/${day.date}`} className="block hover-scale">
      <div className={`p-4 rounded-xl ${isToday ? 'bg-provence-lavender/20 border border-provence-lavender' : 'bg-white/50 border border-provence-lavender/30'} shadow-sm transition-all hover:shadow-md hover:bg-white/80`}>
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-semibold text-muted-foreground">
            {formatDate(day.date)}
          </h3>
          {isToday && (
            <span className="px-2 py-0.5 bg-provence-lavender text-sm rounded-full font-semibold">
              TODAY
            </span>
          )}
        </div>
        <h2 className="text-lg font-semibold mb-1">{day.title}</h2>
        <p className="text-sm text-muted-foreground">{day.concept}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm">{day.stops.length} stops</span>
          <span className="text-xs px-3 py-1 bg-provence-blue/20 rounded-full">
            {day.stops[0].time} - {day.stops[day.stops.length - 1].time}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default DailyOverview;
