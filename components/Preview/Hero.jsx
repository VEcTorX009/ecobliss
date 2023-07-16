import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { playfairDisplay } from "../../font";

export default function Hero() {
  useEffect(() => {
    
    const section = document.getElementById('popup2');
    const section2 = document.getElementById('popup');
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const sectionOffset = section.offsetTop;
    const windowHeight = window.innerHeight;
  
    if (scrollPosition > sectionOffset - windowHeight / 2) {
      const scale = 0.65 + (scrollPosition - sectionOffset + windowHeight / 2) * 0.001;
      section.style.transform = `scale(${scale})`;
      section2.style.transform = `scale(${scale})`;
    }
    
  
  }, [])
});
  return (
    <section id="home" className="flex justify-center mt-52  flex-row h-screen w-screen">
      <div id="popup" className="POP flex flex-col w-[23%] p-5">
        <div className="flex flex-col bg-[#F3F3F3] items-center px-5 py-8 rounded-[35px]  text-center">
          <h2 className="text-2xl font-semibold">+500 Trees Planted</h2>
          <h2 className="text-[#646464] font-[500] w-[60%]">
            More than 500 trees were planted by us this year itself.
          </h2>
        </div>
        <div className="flex mt-[-9px] flex-col bg-[#D6E5BE] items-center px-5 py-8 rounded-[35px] text-center">
          <h2 className="text-2xl font-semibold">+100 Sellers Promoted</h2>
          <h2 className="text-[#646464] font-[500] w-[60%]">
            More than 100 hardworking individuals made la living
          </h2>
        </div>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-[#646464] text-[20px] mt-3 font-semibold">
            Join our team to protect nature together. To do this, you can donate
            any amount or help us.
          </h2>
          <div className="flex flex-row justify-between gap-8 items-center ">
            <div className="mr-3 flex flex-row gap-2">
              {" "}
              <Image src={"/logo.png"} width={50} height={50} />{" "}
              <Image src={"/logo.png"} width={50} height={50} />{" "}
            </div>
            <div className="flex ">
              <button className="text-white px-12 rounded-full py-4 bg-[#444444]">
                Join our team now!
              </button>
            </div>
          </div>
          <div className="flex mt-12 flex-col justify-center items-center">
            <div className="w-[20vw] flex justify-center items-center carpenterbg h-[10vw]">
              <div>
                <button className="px-8 py-3 rounded-xl  bg-[#ffffffc4] border-black">
                  <h2>Share with Us</h2>
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div id="popup2" className="POP flex flex-col p-5 w-[65%]  ">
        <div className="flex flex-row items-center justify-center">
          <div
            style={{ fontFamily: playfairDisplay.style.fontFamily }}
            className="text-[3.9vw] font-bold text-black"
          >
            <h1>
              Where{" "}
              <span className="bg-[#D6E5BE] rounded-full items-center justify-center text-center px-5">
                sustainable
              </span>{" "}
              style
            </h1>
            <h1>finds its perfect harmony</h1>
          </div>
          <div>
            <Image src={"/cactus.png"} width={200} height={200} />
          </div>
        </div>
        <div className="flex w-full h-[18vw] bg-leaf"></div>
        <div className="flex flex-row w-full  justify-center ">
          <div className="flex flex-col ml-[5vw] mt-[-4vw]">
            <div className="flex flex-col py-8 px-8 w-[15vw] bg-[#ffffffb6] h-[15vw] rounded-3xl border">
              <div className="flex flex-row">
                <div className="flex text-center">
                  <h2 className="text-6xl font-bold">10K+</h2>
                </div>
                <div className="flex flex-col justify-center font-semibold">
                  <h3>Products</h3>
                  <h3>Sold</h3>
                </div>
              </div>
              <div className="flex flex-col py-4 px-2">
                <h3 className="text-[16px] font-[400]">100+ empowered sellers. 10,000+ eco-friendly products sold. Join our community and make a sustainable difference through conscious shopping.</h3>
              </div>
            </div>
          </div>
          <div className="flex-col mt-5 ml-[10vw]  flex">
          <div className="flex text-2xl flex-col ">
                <h3 className="w-fullfont-semibold ">Explore a world of eco-friendly treasures, crafted by unsung artisans. Join us in supporting sustainability and showcasing their remarkable creations.</h3>
              </div>
            <div className="flex flex-row mt-5  items-center"> <button className=" text-white bg-[#444444] font-semibold py-[15px] w-[10vw] rounded-full border-[#444444] border">
                Login
              </button></div>
          </div>
        </div>
      </div>
    </section>
  );
}
