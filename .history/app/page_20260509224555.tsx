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
import nine from "../public/assets/9.png";
import FadeInOnScroll from "./imagecom";
import playPng from "../public/assets/play.png";
import { useState, useRef, useEffect } from "react";



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
          <div className="relative group w-fit">
            <Image
              src={picturePerFrame[frame]}
              alt="Sample"
              width={1000}
              height={100}
            />
          </div>
          <div className="absolute top-10 left-50 text-white text-3xl">
            Hello
          </div>
          <div         
          // style={{background: 'url(/assets/1.png) no-repeat center,}}
            >          
            <Image 
              src={two} 
              alt={"asd"}
              width={1000}
              height={100}
            />
          </div>
          <div         
          // style={{background: 'url(/assets/1.png) no-repeat center,}}
            >
              <Image 
                src={three}
                alt={"asd"}
                width={1000}
                height={100}
              />
          </div>
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
