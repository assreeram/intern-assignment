import React from 'react';

const Productcard = () => {
  return (
    <div className="box-border flex flex-col items-start p-6 gap-3 w-[310px] h-[554px] bg-white border-2 border-[#63C3C6] hover:border-[#27797f] hover:rounded-[30px_30px]  rounded-[30px_0px] shadow-lg ">
      
      <div className="flex flex-row items-center px-3 py-[3px] gap-1.5 h-[21px] bg-[rgba(161,12,12,0.05)] rounded-[30px] flex-none">
        <span className="text-red-700 text-xs">• nicht lieferbar</span>
      </div>

      
      <div className="w-full h-[150px] flex-none">
        <img
          src="/kuppi.png"
          alt="Product"
          className="w-full h-full object-contain"
        />
      </div>

      
      <div className="flex flex-col items-start p-6 bg-[rgba(98,195,198,0.3)] border-2 border-accent-blue shadow-inner rounded-[0px_0px_30px_0px] -mx-6 w-[calc(100%+48px)] h-[339px] hover:rounded-[30px_30px] ">
       
        <div className="flex flex-row justify-center items-center p-2 gap-2.5 w-[74px] h-[24px] bg-[rgba(98,195,198,0.3)] rounded-[4px]  ">
          <span className="text-base font-bold font-Sora text-gray-600">Canify</span>
        </div>

      
        <div className="flex flex-row justify-center items-center gap-2.5 mt-3">
         
          <div className="flex flex-row justify-center items-center px-4 py-1 gap-2.5 w-[111px] h-[28px] bg-[#FCFCFA] rounded-[4px]">
            <span className="text-sm font-medium text-gray-700">THC 18%</span>
          </div>
         
          <div className="flex flex-row justify-center items-center px-0.5 py-1 gap-2 w-[111px] h-[28px] bg-[#62C3C6] rounded-[4px]">
            <span className="text-sm font-medium text-white">CBD &lt;1%</span>
          </div>
          
          <div className="flex justify-center items-center px-0.5 py-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1912_165)">
<path d="M12 13.2857C13.4201 13.2857 14.5714 12.1344 14.5714 10.7143C14.5714 9.29409 13.4201 8.14282 12 8.14282C10.5798 8.14282 9.42856 9.29409 9.42856 10.7143C9.42856 12.1344 10.5798 13.2857 12 13.2857Z" fill="#62C3C6"/>
<path d="M4.85443 2.35712C4.80625 2.39446 4.76659 2.44165 4.7381 2.49554C4.7096 2.54943 4.69293 2.60878 4.6892 2.66962C4.68547 2.73047 4.69476 2.79141 4.71645 2.84837C4.73815 2.90534 4.77174 2.95703 4.815 2.99998L6.04671 4.22569C6.11874 4.29674 6.21358 4.34001 6.31445 4.34786C6.41532 4.3557 6.51571 4.32761 6.59786 4.26855C7.71958 3.48357 8.99928 2.9532 10.3474 2.71455C10.554 2.68112 10.7074 2.50455 10.7104 2.29498V0.557119C10.7113 0.495989 10.699 0.435384 10.6744 0.379421C10.6498 0.323459 10.6134 0.27345 10.5678 0.232793C10.5221 0.192135 10.4682 0.161782 10.4098 0.143794C10.3514 0.125807 10.2898 0.120607 10.2291 0.128548C8.28045 0.414064 6.4334 1.17992 4.85443 2.35712ZM19.14 2.35155C17.5599 1.17776 15.7128 0.41518 13.7649 0.132405C13.7043 0.124833 13.6428 0.13029 13.5845 0.14841C13.5262 0.166531 13.4724 0.196897 13.4268 0.237474C13.3812 0.278052 13.3448 0.327906 13.32 0.383697C13.2952 0.439489 13.2827 0.499931 13.2831 0.560976V2.29798C13.284 2.39961 13.3209 2.49764 13.3873 2.57457C13.4537 2.6515 13.5453 2.70233 13.6457 2.71798C14.9942 2.95442 16.2747 3.48291 17.3974 4.26641C17.4795 4.32524 17.5797 4.3532 17.6804 4.34536C17.7811 4.33751 17.8757 4.29438 17.9477 4.22355L19.1803 2.99569C19.2237 2.95267 19.2574 2.90086 19.2792 2.84373C19.3009 2.7866 19.3102 2.72548 19.3064 2.66447C19.3026 2.60346 19.2858 2.54397 19.2571 2.49C19.2284 2.43603 19.1884 2.38882 19.14 2.35155ZM21.702 10.7104H23.4429C23.504 10.7113 23.5646 10.699 23.6206 10.6744C23.6765 10.6498 23.7265 10.6134 23.7672 10.5677C23.8078 10.5221 23.8382 10.4682 23.8562 10.4098C23.8742 10.3514 23.8794 10.2897 23.8714 10.2291C23.5864 8.27957 22.8196 6.43193 21.6403 4.85355C21.6029 4.80537 21.5558 4.76571 21.5019 4.73722C21.448 4.70872 21.3886 4.69205 21.3278 4.68832C21.2669 4.68459 21.206 4.69388 21.149 4.71557C21.0921 4.73727 21.0404 4.77086 20.9974 4.81412L19.7709 6.04283C19.6998 6.11486 19.6565 6.2097 19.6487 6.31057C19.6408 6.41144 19.6689 6.51183 19.728 6.59398C20.5134 7.71705 21.0438 8.99825 21.282 10.3478C21.3154 10.5544 21.4924 10.7078 21.702 10.7104ZM21.7011 13.2857C21.5998 13.2863 21.5019 13.3229 21.4249 13.3889C21.3479 13.4549 21.2968 13.546 21.2807 13.6461C20.4836 18.1465 16.5724 21.4268 12.0021 21.4281C7.43143 21.4294 3.51814 18.1521 2.718 13.6521C2.70188 13.552 2.65098 13.4607 2.57424 13.3944C2.4975 13.3281 2.39984 13.291 2.29843 13.2895H0.564428C0.503298 13.2887 0.442693 13.3009 0.38673 13.3256C0.330768 13.3502 0.280759 13.3865 0.240102 13.4322C0.199445 13.4779 0.169091 13.5317 0.151104 13.5902C0.133116 13.6486 0.127916 13.7102 0.135857 13.7708C1.02386 19.7421 6.21171 24.123 12.2473 23.9983C18.2829 23.874 23.2856 19.2831 23.9271 13.2805L23.9246 13.2857H21.7011ZM0.559714 10.7168H2.298C2.39963 10.716 2.49766 10.6791 2.57459 10.6127C2.65152 10.5463 2.70235 10.4547 2.718 10.3543C2.97514 8.88426 3.579 7.49569 4.47943 6.30555C4.48181 6.30297 4.48318 6.29962 4.48329 6.29612L3.00386 4.81798C2.96088 4.77474 2.90917 4.74118 2.85218 4.71952C2.7952 4.69786 2.73425 4.68861 2.67341 4.69239C2.61256 4.69616 2.55322 4.71287 2.49935 4.7414C2.44548 4.76993 2.39831 4.80962 2.361 4.85783C1.18123 6.4363 0.415109 8.28486 0.132428 10.2351C0.124871 10.2956 0.130296 10.357 0.148341 10.4152C0.166387 10.4734 0.196637 10.5271 0.237074 10.5727C0.277512 10.6182 0.327206 10.6547 0.382842 10.6795C0.438478 10.7044 0.498776 10.7171 0.559714 10.7168Z" fill="#62C3C6"/>
<path d="M12 18.8571C13.5074 18.8629 14.9743 18.3694 16.1717 17.4537C17.3691 16.538 18.2296 15.2516 18.6188 13.7953C18.6377 13.7233 18.6376 13.6476 18.6183 13.5757C18.5991 13.5038 18.5614 13.4381 18.5091 13.3852C18.4568 13.3322 18.3915 13.2938 18.3199 13.2738C18.2482 13.2537 18.1725 13.2526 18.1003 13.2707C17.4163 13.4366 16.7475 13.6598 16.101 13.938C15.2525 14.2766 14.4844 14.7894 13.8463 15.4432C13.2082 16.097 12.7143 16.8773 12.3964 17.7339C12.3641 17.8125 12.3092 17.8797 12.2386 17.927C12.168 17.9743 12.085 17.9996 12 17.9996C11.915 17.9996 11.8319 17.9743 11.7614 17.927C11.6908 17.8797 11.6358 17.8125 11.6036 17.7339C11.2857 16.8773 10.7917 16.0969 10.1536 15.443C9.51539 14.7892 8.74718 14.2765 7.89856 13.938C7.25259 13.6603 6.58474 13.4365 5.90184 13.269C5.82955 13.2506 5.75371 13.2514 5.68182 13.2712C5.60993 13.2911 5.54447 13.3294 5.49192 13.3824C5.43937 13.4353 5.40154 13.5011 5.38219 13.5731C5.36283 13.6451 5.36261 13.721 5.38156 13.7931C5.77034 15.2498 6.63058 16.5367 7.82794 17.4528C9.0253 18.369 10.4924 18.8628 12 18.8571Z" fill="#62C3C6"/>
</g>
<defs>
<clipPath id="clip0_1912_165">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

          </div>
          </div>
          
          
        
        <div className="w-[262px] h-[54px] mt-3">
          <span className="font-semibold text-lg leading-[23px] text-[#116A6C] font-Sora">
          Cannabis Flos 18/1 PT <br />
    <span> Mango</span>
  
          </span>
        </div>
        
          
        <div className="flex flex-col items-start p-0 gap-2 w-[262px] h-auto flex-none order-1 self-stretch flex-grow-0">
  
  <div className="flex flex-col gap-2 font-Sora">
    <div className="flex flex-row items-baseline p-0 gap-2 w-[260px] h-[20px] justify-between text-[#365758] text-sm mt-2">
      <p>Kultivar</p>
      <p>Mango</p>
    </div>
    <div className="flex flex-row items-baseline p-0 gap-2 w-[260px] h-[20px] justify-between text-[#365758] text-sm">
      <p>Genetik</p>
      <p>Hybrid</p>
    </div>
  </div>


  <div className="flex flex-col gap-2 w-[262px] h-auto flex-none order-1 self-stretch flex-grow-0 mt-4">
  
  <div className="flex flex-row items-center justify-between w-full">
    
    <div className="flex flex-row items-center p-0 gap-[4px]">
      
      <span className="w-[18px] h-[30px] font-bold text-[24px] leading-[30px] tracking-[0.01em] text-[#62C3C6] flex-none">
        €
      </span>
      
      <span className="w-[70px] h-[30px]  font-extrabold text-[24px] leading-[30px] tracking-[0.01em] text-[#116A6C] flex-none">
        11,66
      </span>
      
      <sup className="w-[15px] h-[24px] font-[SF Pro Display] font-normal leading-[28px] tracking-[0.01em] text-[#365758] flex-none">
        1
      </sup>
    </div>

  
    <button className="flex flex-row justify-center items-center p-[7px_18px_8px] gap-[10px] w-[164px] h-[33px] bg-[#ECFEAA]  hover:bg-[#d4ed4a] rounded-[24px_0px] flex-none">
      <span className="w-[128px] h-[18px] font-normal text-[14px] leading-[18px] tracking-[0.01em] text-[#365758]">
        in den Warenkorb
      </span>
    </button>
  </div>

  
  <span className="font-Sora w-[70px] h-[26px] font-light text-[12px] leading-[15px] tracking-[0.01em] text-[#365758]">
    pro Gramm
  </span>
</div>

    </div>
  </div>

</div>

   
  );
};

export default Productcard;
