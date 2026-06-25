"use client";

import Image from "next/image";

export default function Hero() {
  const sponsors = [
    { name: "Sponsor 1", src: "/spo1.png" },
    { name: "Sponsor 2", src: "/spo2.png" },
    { name: "Sponsor 3", src: "/spo3.png" },
    { name: "Sponsor 4", src: "/spo4.png" },
    { name: "Sponsor 5", src: "/spo5.png" },
    { name: "Sponsor 6", src: "/spo6.png" },
  ];

  return (
    <section className="w-full bg-white pt-6 md:pt-10 overflow-hidden">
      {/* Top Content: Center-Aligned Typography & CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Main Title: Size decreased for a tight single-line style */}
        {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A5A45] tracking-tight whitespace-nowrap">
          Transforming Equb for the Digital Age
        </h1> */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A5A45] tracking-tight break-words">
            Transforming Equb for the Digital Age
        </h1>
        
        {/* Subtitle text: Decreased size and changed color to pure black */}
        <p className="mt-3 text-sm sm:text-base text-black font-normal max-w-xl">
          Save together, access funds easily, and manage your Equb anytime, anywhere with Wave.
        </p>

        {/* Action Button */}
        <button className="mt-5 bg-[#1A5A45] text-white pl-5 pr-2.5 py-2 rounded-md text-base font-semibold flex items-center gap-3 hover:bg-opacity-90 transition-all group">
          <span>Get the app</span>
          <span className="w-6 h-6 bg-white rounded flex items-center justify-center text-[#1A5A45]">
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </button>
      </div>

      {/* Middle Content: 3 Connected Overlapping Phone Mockups */}
      {/* Tighter margin-top, and a lower container height to cut them off directly at 65% */}
      <div className="relative mt-8 max-w-4xl mx-auto px-6 h-[220px] sm:h-[320px] md:h-[400px] overflow-hidden flex justify-center items-end">
        <div className="relative w-full max-w-2xl h-full flex justify-center items-end">
          
          {/* Left Phone: Scale increased (scale-125) and pulled closer inside to connect */}
          <div className="absolute transform -rotate-[20deg] -translate-x-[30%] translate-y-6 origin-bottom w-1/3 min-w-[150px] sm:min-w-[220px] md:min-w-[260px] aspect-[9/19] z-10 scale-125">
            <Image
              src="/image3l.png"
              alt="Wave App Screen Left"
              fill
              sizes="33vw"
              priority
              className="object-contain"
            />
          </div>

          {/* Right Phone: Scale increased (scale-125) and pulled closer inside to connect */}
          <div className="absolute transform rotate-[20deg] translate-x-[30%] translate-y-6 origin-bottom w-1/3 min-w-[150px] sm:min-w-[220px] md:min-w-[260px] aspect-[9/19] z-10 scale-125">
            <Image
              src="/image2r.png"
              alt="Wave App Screen Right"
              fill
              sizes="33vw"
              priority
              className="object-contain"
            />
          </div>

          {/* Center Phone: Grounded cleanly over the sides */}
          <div className="relative w-1/3 min-w-[140px] sm:min-w-[200px] md:min-w-[240px] aspect-[9/19] z-20 drop-shadow-xl">
            <Image
              src="/image1.png"
              alt="Wave App Screen Center"
              fill
              sizes="33vw"
              priority
              className="object-contain"
            />
          </div>

        </div>
      </div>

      {/* Bottom Content: Sponsor Ribbon directly after the image with no extra space */}
      <div className="border-t border-gray-100 bg-white py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-3 md:flex md:flex-row md:items-center md:justify-between gap-6 md:gap-2">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center col-span-1"
              >
                {/* Reverted opacity/grayscale filters back to normal native colors */}
                <Image
                  src={sponsor.src}
                  alt={sponsor.name}
                  width={110}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
