import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0); // New state for loading bar
  const fullText = "<Markcy Petras - Full Stack Developer/> ";

  useEffect(() => {
    let index = 0;
    // Speeding up the interval slightly to 75ms for faster loading feel
    const typingSpeed = 75; 
    
    const interval = setInterval(() => {
      // 1. Update the displayed text
      setText(fullText.substring(0, index));
      
      // 2. Synchronize the loading bar progress
      const currentProgress = (index / fullText.length) * 100;
      setProgress(currentProgress);

      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        // Ensures the progress bar hits 100% just before closing
        setProgress(100); 

        // Wait 1 second (1000ms) after typing is complete before showing the site
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      
      {/* 3. Using a Block Cursor (█) for a stronger console look */}
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> █ </span>
      </div>

      <div className="w-[200px] h-[2px] bg-pink-800 rounded relative overflow-hidden">
        {/* 4. Dynamic width for the loading bar */}
        <div 
          className="h-full bg-pink-500 shadow-[0_0_15px_#f75e9e] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
    </div>
  );
};