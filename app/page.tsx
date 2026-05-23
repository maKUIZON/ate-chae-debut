'use client'

import Image from "next/image";
import one from "../public/assets/1.png";
import two from "../public/assets/2.png";
import three from "../public/assets/3.png";
import four from "../public/assets/4.png";
import five from "../public/assets/5.png";
import six from "../public/assets/6.png";
import seven from "../public/assets/7.png";
import eight from "../public/assets/8.png";
import ten from "../public/assets/10.png";
import eleven from "../public/assets/11.png";

import FadeInOnScroll from "./imagecom";
import playPng from "../public/assets/play.png";
import { useState, useRef, useEffect } from "react";
import qr from "../public/assets/qr.png";


import f1 from "../public/assets/frame/1.jpg"
import f2 from "../public/assets/frame/2.jpg"
import f3 from "../public/assets/frame/3.jpg"
import f4 from "../public/assets/frame/4.jpg"
import f5 from "../public/assets/frame/5.jpg"
import f6 from "../public/assets/frame/6.jpg"
import f7 from "../public/assets/frame/7.jpg"
import f8 from "../public/assets/frame/8.jpg"
import f9 from "../public/assets/frame/9.jpg"
import f10 from "../public/assets/frame/10.jpg"
import f11 from "../public/assets/frame/11.jpg"
import f12 from "../public/assets/frame/12.jpg"
import f13 from "../public/assets/frame/13.jpg"
import f14 from "../public/assets/frame/14.jpg"
import f15 from "../public/assets/frame/15.jpg"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
  // Reference to the audio element in the DOM
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Function to handle the play/pause logic
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Play error:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const targetDate = new Date("2026-06-20T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
          (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  const picturePerFrame = [
    f1, f2, f3, f4, f5,
    f6, f7, f8, f9, f10,
    f11, f12, f13, f14, f15
  ];

  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) =>
        prev < picturePerFrame.length - 1 ? prev + 1 : 0
      );
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleAudioError = () => {
    console.error("Audio error - check if file exists at /assets/music/music1.mp3");
  };

  return (  
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <audio 
        ref={audioRef} 
        src="/assets/music/music1.mp3" 
        preload="auto" 
        onEnded={() => setIsPlaying(false)}
        onError={handleAudioError}
      />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <div className="relative">
          <FadeInOnScroll>
            <div className="relative group w-fit">
              <Image
                src={one}
                alt="Sample"
                width={1000}
                height={100}
              />

            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div         
              >          
              <Image 
                src={two} 
                alt={"asd"}
                width={1000}
                height={100}
              />
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div   className="relative group w-fit"       
              >
                <Image 
                  src={three}
                  alt={"asd"}
                  width={1000}
                  height={100}
                />
                <div className="
                  absolute
                  top-[40%]
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  text-[#f57fcc]
                  text-3xl
                  sm:text-5xl
                  whitespace-nowrap
                ">
                  {String(timeLeft.days).padStart(2, "0")} :
                  {String(timeLeft.hours).padStart(2, "0")} :
                  {String(timeLeft.minutes).padStart(2, "0")} :
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf5jyPs-O17hxYxrTCWegEHHXQyA4YLeii0MB0kM3Eh96M5yQ/viewform">
                  <Image
                    src={qr}
                    alt="asd"
                    className="
                      absolute
                      top-[27%]
                      sm:top-[26%]
                      left-1/2
                      -translate-x-1/2
                      -translate-y-1/2

                      w-32
                      sm:w-40
                      md:w-52
                      lg:w-64

                      h-auto
                    "
                  />
                </a>
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d686.3677574475322!2d121.00788983416177!3d14.627240373063769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b6146e334f23%3A0x2a2d1d0be2c42017!2sBettys%20Sans%20rival%20%26%20Catering%20Service%20-%20Cuenco!5e0!3m2!1sen!2sph!4v1778487131219!5m2!1sen!2sph"
                className="
                  absolute
                  top-[70%]
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2

                  w-[90%]
                  sm:w-[80%]
                  md:w-[90%]

                  h-[350px]
                  sm:h-[400px]
                  md:h-[700px]

                  rounded-xl
                  shadow-lg
                "
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div         
              >          
              <Image 
                src={four} 
                alt={"asd"}
                width={1000}
                height={100}
              />
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div         
              >          
              <Image 
                src={five} 
                alt={"asd"}
                width={1000}
                height={100}
              />
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div         
              >          
              <Image 
                src={six} 
                alt={"asd"}
              width={1000}
              height={100}
            />
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div>          
              <Image 
                src={seven} 
                alt={"asd"}
                width={1000}
                height={100}
              />
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div>          
              <Image 
                src={eight} 
                alt={"asd"}
                width={1000}
                height={100}
              />
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div         
              >          
              <Image 
                src={ten} 
                alt={"asd"}
                width={1000}
                height={100}
              />
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div>          
              <Image 
                src={eleven} 
                alt={"asd"}
                width={1000}
                height={100}
              />
            </div>
          </FadeInOnScroll>
          <button className="fixed bottom-2 right-2 hover:bg-gray-800 text-pink-700 px-6 py-5 rounded-full shadow-lg hover:shadow-xl transition-all z-50 text-"
            onClick={togglePlayPause}
          >
            {isPlaying ? '⏸' : ' ▶'}
          </button>
        </div>    
      </main>

      {/* Sticky Button */}
      
    </div>
    
  );
}
