import React, { useEffect, useState } from 'react';

export default function Body() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section  className="flex flex-col h-screen w-full relative">
      <div className="carousel absolute h-screen w-full">
        <div
          className={`previewbody ${activeIndex === 0 ? 'active' : ''}`}
          style={{ backgroundImage: `url("/previewbody1.png")` }}
        />
        <div
          className={`previewbody ${activeIndex === 1 ? 'active' : ''}`}
          style={{ backgroundImage: `url("/previewbody2.png")` }}
        />
        <div
          className={`previewbody ${activeIndex === 2 ? 'active' : ''}`}
          style={{ backgroundImage: `url("/previewbody3.png")` }}
        />
      </div>
    </section>
  );
}
