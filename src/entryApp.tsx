
    import { createRoot } from 'react-dom/client';
    import React from 'react';
    import App from './App';

    // Forward console errors to parent window
    const originalConsoleError = console.error;
    console.error = (...args) => {
      originalConsoleError.apply(console, args);
      try {
        window.parent.postMessage({ 
          type: "CONSOLE_ERROR", 
          message: args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
          ).join(' ') 
        }, "*");
      } catch (e) {
        originalConsoleError("Error forwarding to parent:", e);
      }
    };

    // Catch unhandled errors
    window.addEventListener('error', (event) => {
      try {
        window.parent.postMessage({ 
          type: "RUNTIME_ERROR", 
          message: event.message,
          source: event.filename,
          lineno: event.lineno,
          colno: event.colno
        }, "*");
      } catch (e) {
        console.error("Error forwarding to parent:", e);
      }
    });

    // Catch unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      try {
        window.parent.postMessage({ 
          type: "PROMISE_ERROR", 
          message: event.reason?.message || String(event.reason)
        }, "*");
      } catch (e) {
        console.error("Error forwarding to parent:", e);
      }
    });

    const target = document.getElementById('app-root')
    if (target) {
      const root = createRoot(target);
      root.render(<App />);
    } else {
      console.error('Root element not found');
    }
  