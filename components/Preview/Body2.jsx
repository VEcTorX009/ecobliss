import React, { useEffect, useState } from 'react';
export default function Body2() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);
    function reveal() {
    
        var reveals = document.querySelectorAll(".crousel");
        var revealed = document.querySelectorAll(".previewbody");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
    
          if (elementTop < windowHeight - elementVisible) {
            revealed[i].classList.add("active");
          }
          else{
            revealed[i].classList.remove("active");
    
          }
         
        }
    }
    window.addEventListener("scroll", reveal);
    return () => clearInterval(interval);
  }, []);

  return (
    <section  className="flex flex-col mt-14  h-screen w-full relative">
      <div className="carousel absolute h-screen w-full">
        <div
          className={`previewbody ${activeIndex === 0 ? 'active' : ''}`}
          style={{ backgroundImage: `url("/previewbodyb1.png")` }}
        />
        <div
          className={`previewbody ${activeIndex === 1 ? 'active' : ''}`}
          style={{ backgroundImage: `url("/previewbodyb2.png")` }}
        />
        <div
          className={`previewbody ${activeIndex === 2 ? 'active' : ''}`}
          style={{ backgroundImage: `url("/previewbodyb3.png")` }}
        />
      </div>
    </section>
  );
}
