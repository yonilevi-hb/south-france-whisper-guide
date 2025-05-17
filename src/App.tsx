
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import DayTimeline from "./pages/DayTimeline";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { initializeStorage } from "./utils/storage";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize local storage with data
    initializeStorage();
    
    // Update document title
    document.title = "Côte d'Azur for Lyne and Yoni";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background bg-[url('/bg-pattern.svg')] bg-fixed">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/day/:date" element={<DayTimeline />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
