
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
  title = "UsTwo Guide" 
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-provence-lavender/20">
      <div className="flex items-center">
        {showBack && (
          <Link 
            to="/"
            className="mr-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </Link>
        )}
        <h1 className="text-lg font-medium tracking-tight">
          {title}
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
