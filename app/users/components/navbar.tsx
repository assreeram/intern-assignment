'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


type NavItem = {
  id: string;
  label: string;
  icon?: JSX.Element;
  href: string;
  button?: boolean;
};

const Navibar: React.FC = () => {
  const [active, setActive] = useState<string>('');
  const router = useRouter();

  const navItems: NavItem[] = [
    { id: 'prescription', label: 'Rezept einlösen', icon: <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z" fill="#28E3E9"/>
      </svg>, href: '#' },
    { id: 'stock', label: 'Live Bestand', icon: <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z" fill="#62C3C6" fill-opacity="0.3"/>
</svg>, href: '#' },
    { id: 'video', label: 'Videosprechstunde', icon: <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z" fill="#62C3C6" fill-opacity="0.3"/>
</svg>, href: '#' },
    { id: 'faq', label: 'FAQs', icon: <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z" fill="#62C3C6" fill-opacity="0.3"/>
</svg>, href: '#' },
    { id: 'contact', label: 'Kontakt', icon: <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z" fill="#62C3C6" fill-opacity="0.3"/>
</svg>, href: '#' },
    { id: 'cart', label: '', icon:<svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="7" width="18" height="18" rx="9" fill="#62C3C6" fill-opacity="0.3"/>
      <path d="M26.7949 20V12.8457H26.7656L24.5566 14.3691V13.127L26.7832 11.5449H28.0781V20H26.7949Z" fill="#28E3E9"/>
      <path d="M10.4291 25C9.18748 25 8.1773 23.9882 8.1773 22.7447C8.1773 21.5011 9.18748 20.4897 10.4291 20.4897C11.6707 20.4897 12.6809 21.5011 12.6809 22.7447C12.6809 23.9882 11.6707 25 10.4291 25ZM10.4291 21.9053C10.2068 21.9055 9.99373 21.9939 9.83654 22.1513C9.67935 22.3087 9.59091 22.5221 9.59063 22.7447C9.59063 23.2079 9.96658 23.5845 10.4291 23.5845C10.8916 23.5845 11.2675 23.2079 11.2675 22.7447C11.2673 22.5221 11.1788 22.3087 11.0216 22.1513C10.8644 21.9939 10.6513 21.9055 10.4291 21.9053ZM18.2568 25C17.0152 25 16.0054 23.9882 16.0054 22.7447C16.0054 21.5011 17.0152 20.4897 18.2568 20.4897C19.4984 20.4897 20.5086 21.5011 20.5086 22.7447C20.5086 23.9882 19.4981 25 18.2568 25ZM18.2568 21.9053C18.0346 21.9056 17.8216 21.9941 17.6645 22.1514C17.5074 22.3088 17.419 22.5222 17.4187 22.7447C17.4189 22.9673 17.5073 23.1807 17.6644 23.3382C17.8215 23.4956 18.0346 23.5842 18.2568 23.5845C18.4791 23.5843 18.6923 23.4957 18.8495 23.3383C19.0067 23.1808 19.0951 22.9674 19.0953 22.7447C19.095 22.5221 19.0066 22.3087 18.8494 22.1513C18.6922 21.9939 18.4791 21.9055 18.2568 21.9053ZM19.9055 18.7415H8.80411C8.28238 18.7436 7.77558 18.5672 7.36757 18.2415C6.95957 17.9158 6.67482 17.4604 6.56045 16.9505L4.25636 6.87295C4.24109 6.80687 4.21102 6.74513 4.16841 6.6924C4.12581 6.63967 4.07179 6.59734 4.01044 6.56861L2.09926 5.68142C1.89048 5.58045 1.7297 5.40132 1.65161 5.18268C1.57353 4.96404 1.5844 4.72342 1.68188 4.51273C1.77936 4.30205 1.95563 4.13819 2.17267 4.05652C2.3897 3.97485 2.63009 3.98192 2.84197 4.0762L4.75315 4.96339C5.0587 5.10626 5.3278 5.31687 5.54009 5.57928C5.75238 5.84169 5.9023 6.14901 5.97851 6.47801L8.28259 16.5563C8.30916 16.6748 8.37535 16.7807 8.47019 16.8564C8.56504 16.932 8.68285 16.973 8.80411 16.9725H19.9055C20.0264 16.9728 20.1439 16.932 20.2387 16.8567C20.3334 16.7814 20.3998 16.6761 20.427 16.5581L22.2184 8.83878C22.2374 8.7603 22.238 8.6785 22.2204 8.59971C22.2028 8.52092 22.1673 8.44725 22.1166 8.38439C22.0669 8.32075 22.0033 8.2694 21.9307 8.2343C21.858 8.19921 21.7783 8.1813 21.6976 8.18197H8.62426C8.38999 8.18197 8.16531 8.08876 7.99965 7.92284C7.834 7.75693 7.74093 7.5319 7.74093 7.29726C7.74093 7.06262 7.834 6.83759 7.99965 6.67167C8.16531 6.50576 8.38999 6.41254 8.62426 6.41254H21.6976C22.4039 6.41254 23.0604 6.72998 23.4999 7.28381C23.9395 7.83764 24.0992 8.55036 23.9395 9.23938L22.1477 16.959C22.0313 17.4668 21.746 17.9199 21.3385 18.2438C20.931 18.5678 20.4257 18.7433 19.9055 18.7415Z" fill="#28E3E9"/>
      </svg>, href: '#' },
    { id: 'login', label: 'Anmelden', href: '#', button: true }
  ];

  return (
    <nav className="flex items-center gap-[15px] absolute w-[1200px] h-[34px] left-[calc(50%-650px)] top-[70px] rounded-[24px] bg-white text-[16px] whitespace-nowrap font-sora">
      
      <div className="relative flex-none flex-grow-0 mr-[13px]">
        <div className="flex items-center bg-[#EEF7F7] text-emerald-300 rounded-[30px] pl-[16px] pr-[16px] py-[6px] w-[366px] h-[34px]">
          <input
            type="text"
            placeholder="Suchen..."
            className="bg-transparent text-emerald-300 focus:outline-none flex-grow h-full pr-[36px] text-[16px]"
          />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.11496 1.60947C7.1279 1.6128 5.22318 2.40364 3.81812 3.8087C2.41306 5.21376 1.62223 7.11848 1.6189 9.10554C1.62056 11.0943 2.41045 13.0013 3.81552 14.4087C5.22058 15.8161 7.12624 16.6092 9.11496 16.6142C10.8787 16.6142 12.5039 15.9937 13.789 14.967L16.9102 18.0882C17.0684 18.2352 17.2773 18.3153 17.4932 18.3115C17.7091 18.3077 17.9151 18.2204 18.068 18.0679C18.2208 17.9155 18.3087 17.7097 18.313 17.4938C18.3174 17.2779 18.2379 17.0688 18.0913 16.9103L14.9701 13.7859C16.0361 12.4601 16.6173 10.8099 16.6173 9.10869C16.6173 4.9764 13.2472 1.60947 9.11496 1.60947ZM9.11496 3.27876C12.3465 3.27876 14.948 5.87719 14.948 9.10554C14.948 12.3339 12.3465 14.9481 9.11496 14.9481C5.88346 14.9481 3.28504 12.3433 3.28504 9.11183C3.28504 5.88034 5.88346 3.27876 9.11496 3.27876Z" fill="#28E3E9"/>
          </svg>
        </div>
      </div>
  
      <div className="flex-grow flex items-center gap-[15px]">
        {navItems.slice(0, -2).map(({ id, label, icon, href, button }) => (
          <div
            key={id}
            onClick={() => {
              setActive(id);
              router.push(href);
            }}
            className={`flex items-center space-x-2 text-[#045A5C] hover:text-emerald-300 text-[16px] ${
              id === 'prescription' ? 'font-extrabold' : 'font-medium'
            } ${
              button ? 'bg-[#ECFEAA] text-[#045A5C] text-sm rounded-tl-3xl rounded-br-3xl' : ''
            } w-[auto] h-[34px] px-2 py-[6px]`}
          >
            {icon && <span className="flex items-center">{icon}</span>}
            {label && <span className="flex items-center">{label}</span>}
          </div>
        ))}
      </div>
  
      <div className="flex items-center gap-[5px]">
        {navItems.slice(-2, -1).map(({ id, label, icon, href }) => (
          <div
            key={id}
            onClick={() => {
              setActive(id);
              router.push(href);
            }}
            className={`flex items-center space-x-2 text-[#045A5C] hover:text-emerald-300 text-[16px] ${
              id === 'faq' ? 'ml-[-15px]' : ''
            } w-[auto] h-[34px] px-2 py-[6px]`}
          >
            {icon && <span className="flex items-center">{icon}</span>}
          </div>
        ))}
        {navItems.slice(-1).map(({ id, label, icon, href, button }) => (
          <div
            key={id}
            onClick={() => {
              setActive(id);
              router.push(href);
            }}
            className={`flex items-center justify-center space-x-2 text-[#045A5C] hover:text-emerald-300 text-[16px] ${
              id === 'contact' ? 'ml-[-15px]' : ''
            } ${
              id === 'prescription' ? 'font-extrabold' : 'font-medium'
            } ${
              button ? 'bg-[#ECFEAA] text-[#045A5C] text-sm rounded-tl-3xl rounded-br-3xl' : ''
            } w-[110px] h-[34px] flex-shrink-0`}
          >
            {icon && <span className="flex items-center">{icon}</span>}
            {label && <span className="flex items-center">{label}</span>}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navibar;
