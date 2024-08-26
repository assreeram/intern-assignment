
'use client';
import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

const STEP = 1;
const MIN = 5;
const MAX = 10;
const THC_MIN = 11;
const THC_MAX = 18;
const CBD_MIN = 1;
const CBD_MAX = 5;

const Filebar: React.FC = () => {
  const [preisValues, setPreisValues] = useState<number[]>([5, 10]);
  const [thcValues, setThcValues] = useState<number[]>([11, 18]);
  const [cbdValues, setCbdValues] = useState<number[]>([1, 5]);

  const renderSlider = (
    values: number[],
    setValues: React.Dispatch<React.SetStateAction<number[]>>,
    min: number,
    max: number,
    unit: string 
  ) => (
    <>
      <div className="w-full h-[20px]">
        <Range
          values={values}
          step={STEP}
          min={min}
          max={max}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="h-[5px] w-full bg-gray-300 rounded"
              style={{
                background: getTrackBackground({
                  values,
                  colors: ['#CCC', '#04B5B7', '#CCC'],
                  min,
                  max,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} className="flex items-center justify-start">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.307678 15.3846C0.307678 6.88793 7.19561 0 15.6923 0V4.61539C15.6923 13.1121 8.80437 20 0.307678 20V15.3846Z"
                  fill="#62C3C6"
                />
              </svg>
            </div>
          )}
        />
      </div>
      <div className="flex flex-row items-start p-0 gap-1 w-full h-[24px]">
        <div className="flex items-center justify-start p-2 gap-2 w-[116px] h-[24px] bg-[rgba(129,145,145,0.1)] rounded-[20px]">
          <span className="w-[25px] h-[20px] font-normal text-[16px] leading-[20px] text-[#365758]">
            {unit}{values[0]}
          </span>
        </div>
        <span className="flex items-center justify-center text-[#365758] text-[16px] leading-[20px]">–</span>
        <div className="flex items-center justify-start p-2 gap-2 w-[116px] h-[24px] bg-[rgba(129,145,145,0.1)] rounded-[20px]">
          <span className="w-[25px] h-[20px] font-normal text-[16px] leading-[20px] text-[#365758]">
            {unit}{values[1]}
          </span>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex flex-col items-start gap-5 absolute w-[250px] h-[1322px] left-[120px] top-[404px]">
  
      <div className="flex justify-center items-center p-2 gap-2 w-[250px] h-[34px] bg-[rgba(98,195,198,0.1)] rounded-[4px]">
        <h2 className="w-[65px] h-[30px] font-sora font-semibold text-[24px] leading-[30px] tracking-[0.01em] text-[#045A5C]">Filter</h2>
      </div>

     
      <div className="flex flex-col items-start p-0 pb-8 gap-5 w-[250px] h-[125px] border-b border-[#62C3C6]/30">
        <h3 className="w-full h-[23px] font-sora font-semibold text-[18px] leading-[23px] text-center text-[#365758]">
          Preis
        </h3>
        {renderSlider(preisValues, setPreisValues, MIN, MAX, '€')}
      </div>

      <div className="w-[250px] h-[290px] flex flex-col items-start p-0 pb-8 gap-5 border-b border-[#62C3C6]/30 box-border my-4">
      <h3 className="w-full h-[23px] font-sora font-semibold text-[18px] leading-[23px] text-[#365758] flex items-center justify-between">
        <span className="flex-grow text-center">Hersteller</span>
        <span className="ml-2 flex-shrink-0">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7443 4.56461L15.2202 4.03687C15.0552 3.87205 14.8358 3.78125 14.6012 3.78125C14.3668 3.78125 14.1471 3.87205 13.9822 4.03687L8.00358 10.0157L2.0181 4.03023C1.85341 3.86542 1.6337 3.77475 1.3993 3.77475C1.16489 3.77475 0.945048 3.86542 0.780234 4.03023L0.256002 4.55472C-0.085334 4.8958 -0.085334 5.45138 0.256002 5.79246L7.38243 12.9445C7.54712 13.1092 7.76657 13.2252 8.00306 13.2252H8.00579C8.24033 13.2252 8.45978 13.1091 8.62446 12.9445L15.7443 5.81184C15.9092 5.64716 15.9997 5.42107 16 5.18666C16 4.95213 15.9092 4.72916 15.7443 4.56461Z" fill="#62C3C6"/>
          </svg>
        </span>
      </h3>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="peer hidden"
              id="checkbox-custom-1"
            />
            <div
              className="w-4 h-4 border-2 rounded-md border-[#62c3c6] peer-checked:bg-[#edf6f6] peer-checked:border-[#edf6f6] flex items-center justify-center relative"
            >
              <svg
                className="hidden peer-checked:block w-3 h-3 text-[#36c3c6] absolute"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-[#365758]">ADREXpharma</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="peer hidden"
              id="checkbox-custom-2"
            />
            <div
              className="w-4 h-4 border-2 rounded-md border-[#62c3c6] peer-checked:bg-[#edf6f6] peer-checked:border-[#edf6f6] flex items-center justify-center relative"
            >
              <svg
                className="hidden peer-checked:block w-3 h-3 text-[#36c3c6] absolute"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-[#365758]">Aurora</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="peer hidden"
              id="checkbox-custom-3"
            />
            <div
              className="w-4 h-4 border-2 rounded-md border-[#62c3c6] peer-checked:bg-[#edf6f6] peer-checked:border-[#edf6f6] flex items-center justify-center relative"
            >
              <svg
                className="hidden peer-checked:block w-3 h-3 text-[#36c3c6] absolute"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-[#365758]">Avaay</span>
          </label>

          <label className="flex items-center gap-2">
      <input
        type="checkbox"
        className="peer hidden"
        id="checkbox-custom-4"
      />
      <div
        className="w-4 h-4 border-2 rounded-md border-[#62c3c6] peer-checked:bg-[#edf6f6] peer-checked:border-[#edf6f6] flex items-center justify-center relative"
      >
        <svg
          className="w-3 h-3 text-[#36C3C6] absolute peer-checked:block hidden"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
            stroke="currentColor"
          />
        </svg>
      </div>
      <span className="text-[#365758]">Bedrocan</span>
    </label>



          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="peer hidden"
              id="checkbox-custom-5"
            />
            <div
              className="w-4 h-4 border-2 rounded-md border-[#62c3c6] peer-checked:bg-[#edf6f6] peer-checked:border-[#edf6f6] flex items-center justify-center relative"
            >
              <svg
                className="hidden peer-checked:block w-3 h-3 text-[#36c3c6] absolute"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-[#365758]">Cantourage</span>
          </label>

          <button
            className="w-[250px] h-[33px] flex items-center justify-center border-2 border-[#ECFEAA] text-teal-700
            px-5 py-2 gap-1 hover:bg-[#ECFEAA] transition duration-300 box-border rounded-tl-3xl rounded-br-3xl my-0 mx-1"
          >
            mehr anzeigen
          </button>
        </div>
      </div>

      {/* THC Gehalt Filter */}
      <div className="flex flex-col items-start p-0 pb-8 gap-5 w-[250px] h-[125px] border-b border-[#62C3C6]/30">
        <h3 className="w-full h-[23px] font-sora font-semibold text-[18px] leading-[23px] text-center text-[#365758]">
          THC Gehalt
        </h3>
        {renderSlider(thcValues, setThcValues, THC_MIN, THC_MAX, '%')}
      </div>

      {/* CBD Gehalt Filter */}
      <div className="flex flex-col items-start p-0 pb-8 gap-5 w-[250px] h-[125px] border-b border-[#62C3C6]/30">
        <h3 className="w-full h-[23px] font-sora font-semibold text-[18px] leading-[23px] text-center text-[#365758]">
          CBD Gehalt
        </h3>
        {renderSlider(cbdValues, setCbdValues, CBD_MIN, CBD_MAX, '%')}
      </div>

     
      {/* Genetik Section */}
      <div className="flex flex-col items-start p-0 pb-8 gap-5 w-[250px] h-[101px] border-b border-[#62C3C6]/30 my-4">
        <h3 className="w-full h-[23px] font-sora font-semibold text-[18px] leading-[23px] text-center text-[#365758]">
          Genetik
        </h3>
        <div className="flex flex-row items-start gap-1 w-[250px] h-[28px] justify-center">
          <button className="bg-[#62c3c6] text-[#ceebea] rounded-[4px] p-[4px_10px]">Indica</button>
          <button className="bg-[#ceebea] text-[#62c3c6] rounded-[4px] p-[4px_10px]">Sativa</button>
          <button className="bg-[#ceebea] text-[#62c3c6] rounded-[4px] p-[4px_10px]">Hybrid</button>
        </div>
      </div>
      {/* Bestrahlung Filter */}
      <div className="flex flex-col gap-5">

      {/* Bestrahlung Section */}
      <div className="flex flex-col items-start p-0 pb-8 gap-5 w-[250px] h-[101px] border-b border-[#62C3C6]/30 my-4">
        <h3 className="w-full h-[23px] font-sora font-semibold text-[18px] leading-[23px] text-center text-[#365758]">
          Bestrahlung
        </h3>
        <div className="flex flex-row items-start gap-1 w-[250px] h-[28px] justify-center">
          <button className="bg-[#62c3c6] text-[#ceebea] rounded-[4px] p-[4px_10px]">bestrahlt</button>
          <button className="bg-[#ceebea] text-[#62c3c6] rounded-[4px] p-[4px_10px]">nicht bestrahlt</button>
        </div>
      </div>

      

      <div className="w-full flex flex-col gap-5">
  {/* Terpene Section */}
  <div className="flex flex-col items-start p-0 pb-[30px] gap-[20px] w-[250px] h-[53px] border-b border-[#62C3C6]/30 box-border flex-none order-6 self-stretch flex-grow-0">
    <h3 className="w-full h-[23px] font-sora font-semibold text-[18px] leading-[23px] text-[#365758] flex items-center justify-between mb-[-4px]">
      <span className="flex-grow text-center">Terpene</span>
      <span className="ml-2 flex-shrink-0">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.7443 4.56461L15.2202 4.03687C15.0552 3.87205 14.8358 3.78125 14.6012 3.78125C14.3668 3.78125 14.1471 3.87205 13.9822 4.03687L8.00358 10.0157L2.0181 4.03023C1.85341 3.86542 1.6337 3.77475 1.3993 3.77475C1.16489 3.77475 0.945048 3.86542 0.780234 4.03023L0.256002 4.55472C-0.085334 4.8958 -0.085334 5.45138 0.256002 5.79246L7.38243 12.9445C7.54712 13.1092 7.76657 13.2252 8.00306 13.2252H8.00579C8.24033 13.2252 8.45978 13.1091 8.62446 12.9445L15.7443 5.81184C15.9092 5.64716 15.9997 5.42107 16 5.18666C16 4.95213 15.9092 4.72916 15.7443 4.56461Z" fill="#62C3C6"/>
        </svg>
      </span>
    </h3>
  </div>
  </div>

  {/* Reset Button */}
  <div className="w-full mt-5">
  <button className="flex items-center justify-center gap-1 px-0 py-0 w-[250px] h-[20px] flex-none order-7 self-stretch flex-grow-0 text-[#365758]">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.59415 9.14712C1.24653 9.49474 1.24653 10.0583 1.59415 10.406C1.94177 10.7536 2.50537 10.7536 2.85299 10.406L6.00013 7.25883L9.14726 10.406C9.49488 10.7536 10.0585 10.7536 10.4061 10.406C10.7537 10.0583 10.7537 9.49474 10.4061 9.14712L7.25897 5.99998L10.4061 2.8529C10.7537 2.50528 10.7537 1.94168 10.4061 1.59406C10.0584 1.24644 9.49483 1.24644 9.14721 1.59406L6.00013 4.74114L2.85305 1.59406C2.50543 1.24644 1.94182 1.24644 1.5942 1.59406C1.24658 1.94168 1.24658 2.50528 1.5942 2.8529L4.74129 5.99998L1.59415 9.14712Z" fill="#28E3E9"/>
    </svg>
    alle Filter zurücksetzen
  </button>
</div>
</div>




</div>
);
};

export default Filebar;
