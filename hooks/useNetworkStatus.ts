import { useState, useEffect } from 'react';

export function useNetworkStatus() {
  const [isLowBandwidth, setIsLowBandwidth] = useState(false);

  useEffect(() => {
    // Check if navigator.connection is supported (Chromium browsers)
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const connection = (navigator as any).connection;
      
      const updateStatus = () => {
        // Check for saveData (Data Saver mode) or slow effective types
        const isSlow = connection.saveData === true || 
                       connection.effectiveType === 'slow-2g' || 
                       connection.effectiveType === '2g';
        setIsLowBandwidth(isSlow);
      };
      
      updateStatus();
      connection.addEventListener('change', updateStatus);
      
      return () => connection.removeEventListener('change', updateStatus);
    }
  }, []);

  return isLowBandwidth;
}
