import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="flex flex-row items-start gap-8 absolute w-[262px] h-[23px] left-[1215px] top-[2146px]">
      <div className="flex flex-row items-center gap-6 w-[162px] h-[23px] flex-none order-1 flex-grow-0 text-[#045A5C]">
     
        <button>&larr;</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>12</button>
        <button>&rarr;</button>
      </div>
    </div>
  );
};

export default Pagination;
