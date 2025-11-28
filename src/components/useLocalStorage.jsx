
import { useState, useEffect } from 'react';

// Custon hook to read and write in local storage
export function useLocalStorage({ name }) {
  const [data, setData] = useState(() => {
    
    const data = localStorage.getItem(name);
    
    return data ? JSON.parse(data) : [];
  });

  // Save into local storage each time tasks changes
  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(data));
  }, [data]);

  return [ data, setData ];
}