import React from 'react';

const BackgroundStars = () => {
  const starPositions = [
    // Left side stars
    { top: '15%', left: '5%', scale: 0.4, opacity: 0.6 },
    { top: '35%', left: '8%', scale: 0.3, opacity: 0.5 },
    { top: '65%', left: '6%', scale: 0.5, opacity: 0.7 },
    
    // Top area stars
    { top: '10%', left: '25%', scale: 0.3, opacity: 0.6 },
    { top: '8%', left: '45%', scale: 0.4, opacity: 0.5 },
    { top: '12%', left: '65%', scale: 0.3, opacity: 0.7 },
    { top: '15%', left: '85%', scale: 0.4, opacity: 0.6 },
    
    // Right side stars
    { top: '30%', left: '92%', scale: 0.3, opacity: 0.5 },
    { top: '50%', left: '95%', scale: 0.4, opacity: 0.6 },
    { top: '70%', left: '90%', scale: 0.3, opacity: 0.7 },
    
    // Bottom area stars
    { top: '85%', left: '15%', scale: 0.4, opacity: 0.6 },
    { top: '80%', left: '35%', scale: 0.3, opacity: 0.5 },
    { top: '88%', left: '55%', scale: 0.4, opacity: 0.7 },
    { top: '82%', left: '75%', scale: 0.3, opacity: 0.6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {starPositions.map((star, index) => (
        <div
          key={index}
          className="absolute transition-all duration-500"
          style={{
            top: star.top,
            left: star.left,
            transform: `scale(${star.scale})`,
            opacity: star.opacity,
          }}
          data-aos="fade-in"
          data-aos-duration="1500"
          data-aos-delay={index * 150}
          data-aos-once="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="56"
            viewBox="0 0 56 51"
            fill="none"
            className="transition-transform duration-1000"
          >
            <path
              d="M28 0L34.5109 19.3554H55.5806L38.5349 31.3177L45.0458 50.673L28 38.7108L10.9542 50.673L17.4651 31.3177L0.419361 19.3554H21.4891L28 0Z"
              fill="#FFAC1C"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default BackgroundStars;