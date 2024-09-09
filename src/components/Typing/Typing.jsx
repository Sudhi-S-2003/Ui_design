import React, { useState, useEffect } from "react";

function Typing({ text, speed = 100, onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!text) return;

    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      setIndex(0);
      onComplete();
    }
  }, [index, text, speed, onComplete]);

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md max-w-3xl mx-auto">
      <span className="font-mono text-lg text-gray-800">
        {text.substring(0, index)}
      </span>
    </div>
  );
}

export default Typing;
