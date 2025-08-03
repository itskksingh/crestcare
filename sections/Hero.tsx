"use client";

import DrAvijeetSlide from "@/components/DrAvijeetSlide";
import DrRohitSlide from "@/components/DrRohitSlide";
import DrSushilSlide from "@/components/DrSushilSlide";

import { useEffect, useRef, useState } from "react";

// Example backgrounds per doctor, adjust as needed
const backgrounds = ["/img/hero_slider_1.jpg", "/img/hero_slider_2.jpg", "/img/hero_slider_3.jpg"];

const slides = [
  { content: <DrSushilSlide />, img: backgrounds[0], thumb: backgrounds[0] },
  { content: <DrRohitSlide />, img: backgrounds[1], thumb: backgrounds[1] },
  { content: <DrAvijeetSlide />, img: backgrounds[2], thumb: backgrounds[2] },
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const gotoSlide = (idx: number) => setCurrent(idx);

  return (
    <div className='relative h-screen w-full overflow-hidden bg-gray-100 flex items-center justify-center'>
      {/* Slider Slides */}
      <div
        className='absolute inset-0 w-full h-full flex transition-transform duration-[1500ms]'
        style={{
          transform: `translateX(-${current * 100}vw)`,
        }}>
        {slides.map(({ content, img }, idx) => (
          <div
            key={idx}
            className='w-screen h-full flex items-center'
            style={{
              // backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              flex: "0 0 100vw",
            }}>
            {content}
          </div>
        ))}
      </div>

      {/* Responsive Slider Control Thumbnails */}
      <div
        className={`
          absolute z-10 
          left-1/2 -translate-x-1/2 bottom-4 flex flex-row space-x-3 
          md:left-auto md:right-8 md:bottom-8 md:-translate-x-0 md:flex-col md:space-x-0 md:space-y-3
        `}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`border-4 rounded-xl cursor-pointer overflow-hidden transition duration-200 ${
              current === idx ? "border-blue-500" : "border-transparent"
            }`}
            style={{
              width: 56,
              height: 56,
              boxShadow: current === idx ? "0 4px 18px #287bff60" : "none",
            }}
            onClick={() => gotoSlide(idx)}>
            <img src={slide.thumb} alt={`Doctor ${idx + 1}`} className='object-cover w-full h-full' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
