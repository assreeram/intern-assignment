
import Image from "next/image";
import Link from "next/link";
import Navibar from "./users/components/navbar";
import './globals.css'
import Head from "next/head";
import Breadcrumbs from "./users/components/breadcrumb";
import Options from "./users/components/optionButton";
import Filterbar from "./users/components/filtreBar";
import Bluten from "./users/components/bluten";
import Filebar from "./users/components/fileBar";
import Productcard from "./users/components/productCard";
import Newproduct from "./users/components/newproduc";
import Pagination from "./users/components/pagination";
import Footer from "./users/components/footer";



export default function Home() {
  return (
    <>
      <head >
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <main>

    
   
   

<Navibar/>
<Breadcrumbs/>
<Options/>
<Filterbar/>
<Bluten/>
<Filebar/>


    <div className="absolute top-[404px] left-[475px] w-[970px] h-[1702px] flex flex-col gap-5">
      {/* Top Row */}
      <div className="flex flex-row gap-5 w-full h-[554px]">
        <Productcard />
        <Productcard />
        <Productcard />
      </div>

      {/* Middle Row */}
      <div className="flex flex-row gap-5 w-full h-[554px] items-center justify-center">
        <Newproduct />
        <Newproduct />
        <Newproduct />
      </div>

      {/* Bottom Row */}
      <div className="flex flex-row gap-5 w-full h-[554px]">
        <Productcard />
        <Productcard />
        <Productcard />
      </div>
    </div>
<Pagination/>
<Footer/>

</main>
    </>
  );
}