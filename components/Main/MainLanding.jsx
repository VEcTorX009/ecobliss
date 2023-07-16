import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Landing() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = document.getElementById("mainland");

    window.addEventListener(
      "scroll",
      () => {
        const scrollPosition = window.scrollY;
        const sectionOffset = section.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition > sectionOffset - windowHeight / 2) {
          const scale =
            0.65 + (scrollPosition - sectionOffset + windowHeight / 2) * 0.001;
          section.style.transform = `scale(${scale})`;
        }
      },
      []
    );
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={`flex flex-col h-screen absolute w-screen overflow-hidden  items-center justify-center  `}
    >
      <div
        className={` -z-20 overflow-hidden bg-[#F2E9E2]   absolute previewbody ${
          activeIndex === 0 ? "active" : ""
        }`}
      ></div>
      <div
        className={` -z-20 overflow-hidden bg-[#E4ADAC]   absolute previewbody ${
          activeIndex === 1 ? "active" : ""
        }`}
      ></div>
      <div
        className={` -z-20 overflow-hidden bg-[#A2C2D0]   absolute previewbody ${
          activeIndex === 2 ? "active" : ""
        }`}
      ></div>
      <div className="carousel overflow-hidden absolute h-screen w-full">
        <div
          className={`flex shoplandbody flex-row absolute items-center justify-center z-50  h-[40vw] mt-[5vw] w-screen ${
            activeIndex === 0 ? "active" : ""
          }`}
          style={{
            backgroundImage: `url("/leaves1.png")`,
          }}
        ></div>
        <div
          className={`flex shoplandbody flex-row absolute items-center justify-center z-50  h-[45vw] mt-[5vw] w-screen ${
            activeIndex === 1 ? "active" : ""
          }`}
          style={{
            backgroundImage: `url("/leaves2.png")`,
          }}
        ></div>
        <div
          className={`flex shoplandbody flex-row absolute items-center justify-center z-50  h-[45vw] mt-[5vw] w-screen ${
            activeIndex === 2 ? "active" : ""
          }`}
          style={{
            backgroundImage: `url("/leaves3.png")`,
          }}
        ></div>
        <div
          id="mainland"
          className="flex flex-col justify-center items-center"
        >
          <div className="flex flex-col absolute  text-center items-center justify-center ">
          {activeIndex===1? 
            <h1
              className={`text-[350px] transition-all ${
            activeIndex === 1 ? "shoplandheading" : ""
          } text-white   `}
            >
              Vector
            </h1>
            : activeIndex ===2?
            <h1
              className={`text-[350px] transition-all text-white ${
            activeIndex === 2 ? "shoplandheading" : ""
          }  `}
            >
              Natural
            </h1>
             
             : 
            <h1
              className={`text-[350px] transition-all  text-white  ${
            activeIndex === 3 ? "shoplandheading" : ""
          } `}
            >
              Cute 
            </h1>

          }
           
          </div>
          <div
            className={` flex itembag flex-col z-50 mt-[5vw]  items-center justify-center`}
          >
            <Image
              className={`shoplandbody ${activeIndex === 0 ? "active" : ""}`}
              src={"/bag1.png"}
              width={350}
              height={350}
            />

            <Image
              className={`mt-[-29vw] shoplandbody ${
                activeIndex === 1 ? "active" : ""
              }`}
              src={"/bag2.png"}
              width={550}
              height={550}
            />
            <Image
              className={`mt-[-27vw] shoplandbody ${
                activeIndex === 2 ? "active" : ""
              }`}
              src={"/bag3.png"}
              width={350}
              height={550}
            />
          </div>

          <div className="flex flex-row mt-5 z-50 cursor-pointer items-center  justify-center">
            {" "}
            <Link href={"/shop"} className={"z-50 cursor-pointer"}>
            <button  className="button z-50 cursor-pointer  text-white bg-[#444444] font-semibold py-[15px] w-[8vw] rounded-full border-[#444444] border">
              View
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
