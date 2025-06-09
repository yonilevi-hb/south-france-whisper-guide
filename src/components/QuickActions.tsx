
import { Link } from "react-router-dom";
import { MapPin, Calendar, Sun, Camera, Heart } from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Today's Romance",
      href: "/",
      color: "bg-gradient-to-br from-provence-lavender/30 to-provence-lavender/20 text-provence-lavender hover:from-provence-lavender/50 hover:to-provence-lavender/30 shadow-lg",
      emoji: "💕"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Love Journey",
      href: "/",
      color: "bg-gradient-to-br from-provence-blue/30 to-provence-blue/20 text-provence-blue hover:from-provence-blue/50 hover:to-provence-blue/30 shadow-lg",
      emoji: "🗺️"
    },
    {
      icon: <Sun className="w-5 h-5" />,
      label: "Perfect Weather",
      href: "/",
      color: "bg-gradient-to-br from-provence-peach/30 to-provence-peach/20 text-provence-peach hover:from-provence-peach/50 hover:to-provence-peach/30 shadow-lg",
      emoji: "☀️"
    },
    {
      icon: <Camera className="w-5 h-5" />,
      label: "Photo Moments",
      href: "/",
      color: "bg-gradient-to-br from-provence-olive/30 to-provence-olive/20 text-provence-olive hover:from-provence-olive/50 hover:to-provence-olive/30 shadow-lg",
      emoji: "📸"
    }
  ];

  return (
    <div className="w-full max-w-lg mb-8">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-muted-foreground mb-2 flex items-center justify-center gap-2">
          <Heart className="w-5 h-5 text-provence-peach" fill="currentColor" />
          Quick Romantic Actions
        </h3>
        <p className="text-sm text-muted-foreground/80 italic">Everything you need for the perfect day</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.href}
            className={`flex flex-col items-center gap-3 p-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${action.color} backdrop-blur-sm border border-white/20 group`}
          >
            <div className="relative">
              {action.icon}
              <span className="absolute -top-1 -right-1 text-lg group-hover:animate-bounce">
                {action.emoji}
              </span>
            </div>
            <span className="text-sm font-semibold text-center leading-tight">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
