import { useEffect, useState } from "react";

export const useProgress = () => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((currentProgress) => {
        if (currentProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return currentProgress + 1;
      });
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return {
    // Properties
    progress,
  }
}