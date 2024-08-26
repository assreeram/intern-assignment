import React from 'react';

const Bluten: React.FC = () => {
  return (
    <div
      className="flex items-center gap-3 absolute"
      style={{
        width: '160px',
        height: '50px',
        left: '120px',
        top: '294px',
      }}
    >
     
      <svg
        width="20"
        height="26"
        viewBox="0 0 20 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20C0 8.95431 8.95431 0 20 0V6C20 17.0457 11.0457 26 0 26V20Z"
          fill="#28E3E9"
        />
      </svg>

   
      <h2
        className="text-4xl font-semibold text-[#116A6C]"
        style={{
          fontFamily: "'Sora', sans-serif",
          lineHeight: '45px',
        }}
      >
        Blüten
      </h2>
    </div>
  );
};

export default Bluten;