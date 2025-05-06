import React, { useEffect } from 'react';
import { Routes, Route, MemoryRouter as Router, useNavigate, useLocation, useNavigationType } from 'react-router-dom';
import Other from './app/other/page.tsx'
import Page from './app/page.tsx'
import "./app/globals.css";

const AppRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigationType = useNavigationType();
  

  // Keep track of navigation history
  const [history, setHistory] = React.useState(["/"]); // Start with home route
  const [historyIndex, setHistoryIndex] = React.useState(0);
  

  // Update history when location changes
  React.useEffect(() => {
    if (navigationType === "PUSH") {
      // Add new location to history, removing any "future" entries if we navigated back and then to a new route
      setHistory(prev => [...prev.slice(0, historyIndex + 1), location.pathname]);
      setHistoryIndex(prev => prev + 1);
    }
  }, [location, navigationType]);
  

  useEffect(() => {
    const handleMessage = (event) => {
      try {
        if (!event.data || !event.data.type) return;
        

        switch (event.data.type) {
          case "NAVIGATE":
            navigate(event.data.path);
            console.log("Navigation requested to:", event.data.path);
            break;
          

          case "GO_BACK":
            if (historyIndex > 0) {
              const prevIndex = historyIndex - 1;
              const prevPath = history[prevIndex];
              navigate(-1); // Use React Router's built-in back navigation
              setHistoryIndex(prevIndex);
              console.log("Navigating back to:", prevPath);
            } else {
              console.log("Cannot go back, at the beginning of history");
            }
            break;
          

          case "GO_FORWARD":
            if (historyIndex < history.length - 1) {
              const nextIndex = historyIndex + 1;
              const nextPath = history[nextIndex];
              navigate(1); // Use React Router's built-in forward navigation
              setHistoryIndex(nextIndex);
              console.log("Navigating forward to:", nextPath);
            } else {
              console.log("Cannot go forward, at the end of history");
            }
            break;
          

          default:
            break;
        }
      } catch (error) {
        console.error("Navigation error:", error);
        window.parent.postMessage({ type: "ERROR", message: error.message }, "*");
      }
    };
    

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate, history, historyIndex]);
  

  // Report current route to parent window when it changes
  useEffect(() => {
    try {
      window.parent.postMessage({ 
        type: "ROUTE_CHANGED", 
        path: location.pathname,
        canGoBack: historyIndex > 0,
        canGoForward: historyIndex < history.length - 1
      }, "*");
    } catch (error) {
      console.error("Error reporting route change:", error);
    }
  }, [location, historyIndex, history]);
  

  return (
    <Routes>
      <Route path="/other" element={<Other />} />
      <Route index element={<Page />} />
    </Routes>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Router initialEntries={["/"]}>
        <AppRoutes />
      </Router>
    </div>
  );
};

export default App;