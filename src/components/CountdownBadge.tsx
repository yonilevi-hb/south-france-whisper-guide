
import { getDaysUntilTrip } from "../utils/date";

const CountdownBadge = () => {
  const daysLeft = getDaysUntilTrip();
  
  return (
    <div className="floating-badge flex flex-col items-center justify-center w-40 h-40 rounded-full bg-provence-lavender shadow-lg">
      <div className="text-4xl font-bold">{daysLeft}</div>
      <div className="text-sm mt-1">{daysLeft === 1 ? 'DAY' : 'DAYS'} LEFT</div>
    </div>
  );
};

export default CountdownBadge;
