import React, { useState } from 'react';
import "../../index.css";

export const DeleteButton = () => {
  const [isRunning, setIsRunning] = useState(false);

  const handleClick = () => {
    if (!isRunning) {
      setIsRunning(true);
      setTimeout(() => setIsRunning(false), 2000);
    }
  };

  return (
    <button 
    onClick={handleClick}
    disabled={isRunning}
    className={`relative flex items-center bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition-colors duration-300 del-btn ${isRunning ? 'running' : ''} 
    w-auto max-w-[140px] sm:max-w-[140px] md:w-1/2 lg:w-auto`} // Adjusted width with max-width on mobile
    data-running={isRunning}
  >
      <svg className="del-btn__icon" viewBox="0 0 48 48" width="48px" height="48px" aria-hidden="true">
        <clipPath id="can-clip">
          <rect className="del-btn__icon-can-fill" x="5" y="24" width="14" height="11" />
        </clipPath>
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(12,12)">
          <g className="del-btn__icon-lid">
            <polyline points="9,5 9,1 15,1 15,5" />
            <polyline points="4,5 20,5" />
          </g>
          <g className="del-btn__icon-can">
            <g strokeWidth="0">
              <polyline id="can-fill" points="6,10 7,23 17,23 18,10" />
              <use clipPath="url(#can-clip)" href="#can-fill" fill="currentColor" />
            </g>
            <polyline points="6,10 7,23 17,23 18,10" />
          </g>
        </g>
      </svg>
      <span className="del-btn__letters">
        {'Delete All'.split('').map((letter, index) => (
          <span key={index} className="del-btn__letter-box">
            <span className="del-btn__letter">{letter}</span>
          </span>
        ))}
      </span>
    </button>
  );
};
