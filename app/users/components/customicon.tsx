import React from 'react';
import Image from 'next/image';

interface ImageIconProps {
  width?: number;
  height?: number;
}

const Customcon: React.FC<ImageIconProps> = ({ width = 10, height = 16 }) => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/image.png" 
        alt="Custom Icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Customcon;
