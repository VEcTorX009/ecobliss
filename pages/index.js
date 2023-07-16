import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import Hero from "@/components/Preview/Hero";
import Body from "@/components/Preview/Body";
import Body2 from "@/components/Preview/Body2";
import About from "@/components/Preview/About";
import Banner from "@/components/Preview/Banner";
import Review from "@/components/Preview/Review";
import Footer from "@/components/Footer";
import Aboutus from "@/components/Preview/Aboutus";
import Landing from "@/components/Preview/Landing";
import MainLanding from "@/components/Main/MainLanding";
import SocialMedia from "@/components/Main/SocialMedia";

export default function Home({isloggedin,isloading,setIsloading}) {
 
  return (
    <>
      <Head>
        <title>EcoBliss | Environmental Store</title>
        <meta
          name="description"
          content="World's First All in One Environment Friendly Ecommerce Store. Buy 100% Organic goods and help us plant a tree on your purchase :)"
        />
        <meta
          name="keywords"
          content="ecostore, eco friendly, environment friendly, environmental store, ecobliss, ecofriendly bliss"
        />
      </Head>
      <div className="overflow-hidden">
  <Landing isloading={isloading} />
        {!isloggedin? 
        (

        <><div className="justify-center z-max items-center">
              <Hero />
            </div><Body /><Body2 /><About /><Aboutus /><Review /><Banner /><Footer /></>
        ):(<>
          <MainLanding />
          <SocialMedia setIsloading={setIsloading}/>
          <Footer/>
        </>)
        }
      </div>
    </>
  );
}
