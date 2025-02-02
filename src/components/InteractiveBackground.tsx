import React from 'react';

const InteractiveBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      {/* Main background with gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(100, 255, 218, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(100, 255, 218, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(100, 255, 218, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(100, 255, 218, 0.02) 0%, transparent 50%),
            #0a192f
          `
        }}
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100, 255, 218, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 255, 218, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Decorative geometric shapes */}
      <div 
        className="absolute top-[20%] left-[10%] w-[300px] h-[300px] opacity-[0.02] transform rotate-45"
        style={{
          background: 'linear-gradient(45deg, rgba(100, 255, 218, 0.5), transparent)',
          filter: 'blur(100px)'
        }}
      />
      <div 
        className="absolute bottom-[30%] right-[15%] w-[400px] h-[400px] opacity-[0.02] transform -rotate-45"
        style={{
          background: 'linear-gradient(-45deg, rgba(100, 255, 218, 0.5), transparent)',
          filter: 'blur(120px)'
        }}
      />

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(10, 25, 47, 0.2) 100%)'
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
