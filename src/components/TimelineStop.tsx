
import { Stop } from "../types/guide";

interface TimelineStopProps {
  stop: Stop;
  isLast?: boolean;
}

const TimelineStop: React.FC<TimelineStopProps> = ({ stop, isLast = false }) => {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && <div className="timeline-line" />}
      <div className="timeline-dot" />
      
      <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-start mb-1">
          <span className="font-semibold text-provence-lavender">{stop.time}</span>
        </div>
        <h3 className="text-lg font-semibold mb-1">{stop.title}</h3>
        
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
        </div>
      </div>
    </div>
  );
};

export default TimelineStop;
