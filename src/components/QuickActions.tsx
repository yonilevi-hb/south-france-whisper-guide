
import { Link } from "react-router-dom";
import { MapPin, Calendar, Sun, Camera } from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Today's Plan",
      href: "/",
      color: "bg-provence-lavender/20 text-provence-lavender hover:bg-provence-lavender/30"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "All Days",
      href: "/",
      color: "bg-provence-blue/20 text-provence-blue hover:bg-provence-blue/30"
    },
    {
      icon: <Sun className="w-5 h-5" />,
      label: "Weather",
      href: "/",
      color: "bg-provence-peach/20 text-provence-peach hover:bg-provence-peach/30"
    },
    {
      icon: <Camera className="w-5 h-5" />,
      label: "Photo Spots",
      href: "/",
      color: "bg-provence-olive/20 text-provence-olive hover:bg-provence-olive/30"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      {actions.map((action, index) => (
        <Link
          key={index}
          to={action.href}
          className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-200 hover:scale-105 ${action.color}`}
        >
          {action.icon}
          <span className="text-sm font-medium">{action.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default QuickActions;
