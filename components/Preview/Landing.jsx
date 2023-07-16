import Image from "next/image";
import React, { useEffect } from "react";
import {  playfairDisplay } from "../../font";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Landing({isloading}) {
  const { session, data, status } = useSession();
  useEffect(() => {
    if(!isloading){
      if (status === "authenticated") {
        handleclick()
      }
      function handleclick  ()  {
        document.getElementById("previewlanding").classList.add("goupbro");
          setTimeout(() => {
            document.getElementById("previewlanding").style.display="none";
            
          }, 3000);
        };

    }
    else{
      if (status === "authenticated") {
        setTimeout(() => {
          handleclick()
          
        }, 4500);
      }
      function handleclick  ()  {
        document.getElementById("previewlanding").classList.add("goupbro");
          setTimeout(() => {
            document.getElementById("previewlanding").style.display="none";
            
          }, 5000);
        };
    }
  }, [status]);
  const handleclick = ()=>{
    if (isloading===false && status === "authenticated") {
    }
    else{

      document.getElementById("previewlanding").classList.add("goupbro");
      document.getElementById("popup").classList.add("popup");
      document.getElementById("popup2").classList.add("popup");
      setTimeout(() => {
        document.getElementById("previewlanding").style.display="none";
        
      }, 3000);
    }

  }
  return (
    <div id="previewlanding" style={{ fontFamily: playfairDisplay.style.fontFamily }} className="fixed flex z-full items-center justify-center flex-col bg-[#5B8A72] min-h-screen w-screen ">
      <div className="flex flex-col items-center justify-center text-center">
        <Image src={"/logo.png"} width={150} height={150} />
        <div className="flex playfair font-semibold flex-col mt-5 text-[3.3vw]">
          <h1 className="text-[#A7C6A2]">Ready to embrace an</h1>
          <h1 className="text-[#F7F2E7]">eco-friendly lifestyle?</h1>
        </div>
        <div className="flex flex-col mt-5">
          <button
            onClick={handleclick}
            className="px-[4vw] bg-[#F4E9DD] rounded-full py-[0.7vw]"
          >
            <h2 className="text-[#646464] text-2xl">{isloading? "Loading" : "Yes I am"}</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
