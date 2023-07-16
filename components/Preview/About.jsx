import React from "react";
import { playfairDisplay } from "../../font";

export default function About() {
  return (
    <section  className="flex mt-16  items-center flex-col aboutbg h-screen w-full relative">
      <h1
        className="text-9xl text-white mt-16"
        style={{ fontFamily: playfairDisplay.style.fontFamily }}
      >
        About Us
      </h1>
      <div className="flex flex-col justify-center items-center mt-12 leading-[4vw] text-6xl text-white text-center w-[70%]">
        <p>
          Born out of a shared passion for the environment, ecobliss was created
          to provide a sustainable alternative for conscientious consumers.
          Fueled by the desire to make a positive impact, our platform emerged
          as a haven for eco-friendly products, connecting like-minded
          individuals and fostering a greener future. Join us in our mission to
          redefine shopping with conscience.
        </p>

      </div>
      <div className="flex flex-col mt-12">
      <button className=" text-[#444444] font-semibold bg-white py-4 px-24 rounded-full text-xl border-[#444444] border">
                Support Us
              </button>
      </div>
    </section>
  );
}
