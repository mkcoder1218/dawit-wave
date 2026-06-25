"use client";

import Image from "next/image";

export default function AboutApp() {
  return (
    <section id="about" className="w-full bg-white py-12 md:py-16">
      {/* 2-Column Responsive Layout Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Large App Image Asset */}
        <div className="relative w-full aspect-square max-w-xl mx-auto lg:mx-0 lg:sticky lg:top-24">
          <Image
            src="/image8.png"
            alt="About Wave Equb App"
            fill
            sizes="(max-w-1024px) 100vw, 50vw"
            priority
            className="object-contain"
          />
        </div>

        {/* Right Side: Structured Typography & 4 Paragraphs */}
        <div className="flex flex-col text-left">
          {/* Small Section Label on left edge */}
          <span className="text-sm font-semibold text-black uppercase tracking-wider">
            About the App
          </span>
          
          {/* Main Big Section Title */}
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A5A45] tracking-tight">
            Wave Equb
          </h2>

          {/* Core Copywrite Blocks: 4 Paragraphs mapped to #242424 */}
          <div className="mt-6 flex flex-col gap-5 text-sm sm:text-base text-[#242424] font-normal leading-relaxed">
            <p>
              Wave Equb modernizes the traditional equb system, making it easier, clearer, and faster to use. 
              Users can save money together in a structured and secure manner using mobile technology—without 
              confusion or risk. Every contribution and payout is recorded, visible, and easy to track.
            </p>

            <p>
              With Wave Equb, users can effortlessly create or join Equb groups, set contribution amounts 
              and schedules, and manage everything directly from their mobile device. The platform offers 
              a fully cashless environment where all transactions are processed digitally, ensuring safety, 
              accuracy, and convenience. Automated reminders and smart payment systems help users stay 
              consistent with their contributions, minimizing delays or conflicts within the group.
            </p>

            <p>
              Beyond just digitizing Equb, Wave Equb enhances the entire saving experience by merging 
              technology with community trust. It empowers individuals to build better financial habits, 
              supports groups in achieving their goals more efficiently, and opens access to structured 
              savings for those who may lack traditional financial services.
            </p>

            <p>
              By bridging tradition and technology, Wave Equb provides a smarter, safer, and more reliable 
              way to save—anytime, anywhere.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}