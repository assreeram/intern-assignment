import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="absolute top-[2319px] left-0 right-0 h-[201px] bg-[#1A8D91] shadow-[0px_0px_20px_rgba(7,64,64,0.05)] rounded-t-[30px]">
      <div className="flex flex-wrap justify-around items-start p-8 text-white">
        <div>
          <p className="font-bold"> Rezept einlösen  Live Bestand</p>
          <p className='gap-8'>Videopretchstunde    FAQ   Kontakt</p>
        </div>
        <div>
          <p className="font-extralight">Standort</p>
          <p>Bergstraße 49 - 57<br />69469 Weinheim<br />(3 Glocken Quartier)</p>
        </div>
        <div>
          <p className="font-extralight">Telefon</p>
          <p>0223 545 5250</p>
        </div>
        <div>
          <p className="font-extralight">Öffnungszeiten</p>
          <p>Mo-Fr: 09:00 – 18:00 Uhr<br />Sa: 09:00 – 14:00 Uhr</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
