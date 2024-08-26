import React from 'react';

const Options: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center p-0 gap-3 absolute w-[223px] h-[63px] left-[1200px] top-[194px]"
    >
      <span className="text-gray-500 text-sm font-normal text-[14px] leading-[18px]">GKV mit Kostenübernahme?</span>
      <button
        className="w-full h-[34px] flex items-center justify-center border-2 border-teal-400 text-teal-700 
        rounded-tl-3xl rounded-br-3xl hover:bg-teal-400 hover:text-white transition duration-300"
>
      
        Preisoptionen
      </button>
    </div>
  );
};

export default Options;
