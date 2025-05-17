
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";

interface TripHeaderProps {
  showBack?: boolean;
  showSettings?: boolean;
  title?: string;
}

const TripHeader: React.FC<TripHeaderProps> = ({ 
  showBack = false, 
  showSettings = true,
  title = "Côte d'Azur for Lyne and Yoni" 
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-provence-lavender/20 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center">
        {showBack && (
          <Link 
            to="/"
            className="mr-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </Link>
        )}
        <h1 className="text-lg font-medium tracking-tight flex items-center">
          <span className="hidden sm:inline">🌊</span>
          <span className="mx-1">{title}</span>
          <span className="hidden sm:inline">🌴</span>
        </h1>
      </div>
      {showSettings && (
        <Link 
          to="/settings"
          className="p-2 rounded-full hover:bg-provence-lavender/10 transition-colors"
        >
          <Settings className="w-5 h-5" />
        </Link>
      )}
    </div>
  );
};

export default TripHeader;
