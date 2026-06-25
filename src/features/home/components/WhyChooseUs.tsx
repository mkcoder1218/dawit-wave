"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Left Title */}
        <div className="w-full text-left mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A5A45] tracking-tight">
            Why Choose Wave Equb
          </h2>
        </div>

        {/* Two-Column Responsive Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* BOX 1: Gradient from Top to Bottom (#85E040 to #1A5A45) */}
          {/* Changed pb-10 to pb-0 to eliminate any gap below the image */}
          <div className="bg-gradient-to-b from-[#85E040] to-[#1A5A45] rounded-3xl p-8 sm:p-10 pb-0 sm:pb-0 flex flex-col items-center text-center shadow-xl min-h-[500px] overflow-hidden">
            {/* Box 1 Header tag */}
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#1A5A45]">
              YOU ONLY NEED ONE APP
            </span>
            
            {/* Box 1 Main Content Title */}
            <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug max-w-md">
              Save smarter with a trusted digital Equb.
            </h3>
            
            {/* Image container: Increased height and added a slight scale boost */}
            <div className="relative w-full h-[280px] mt-auto overflow-hidden translate-y-1 scale-105">
              <Image
                src="/image9.png"
                alt="Save smarter illustration"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* BOX 2: Gradient from Bottom to Top (#1A5A45 to #85E040) */}
          {/* Changed pb-10 to pb-0 to eliminate any gap below the image */}
          <div className="bg-gradient-to-t from-[#1A5A45] to-[#85E040] rounded-3xl p-8 sm:p-10 pb-0 sm:pb-0 flex flex-col items-center text-center shadow-xl min-h-[500px] overflow-hidden">
            {/* Box 2 Header tag */}
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#85E040]">
              Simple Control
            </span>
            
            {/* Box 2 Main Content Title */}
            <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug max-w-md">
              Easily manage your Equb with reliability.
            </h3>
            
            {/* Image container: Increased height and added a slight scale boost */}
            <div className="relative w-full h-[280px] mt-auto overflow-hidden translate-y-1 scale-105">
              <Image
                src="/image10.png"
                alt="Simple control illustration"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";

// export default function WhyChooseUs() {
//   return (
//     <section className="w-full bg-white py-12 md:py-16">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
//         {/* Top Left Title */}
//         <div className="w-full text-left mb-8">
//           <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A5A45] tracking-tight">
//             Why Choose Wave Equb
//           </h2>
//         </div>

//         {/* Two-Column Responsive Box Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
//           {/* BOX 1: Gradient from Top to Bottom (#85E040 to #1A5A45) */}
//           <div className="bg-gradient-to-b from-[#85E040] to-[#1A5A45] rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center shadow-xl min-h-[480px]">
//             {/* Box 1 Header tag */}
//             <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#1A5A45]">
//               YOU ONLY NEED ONE APP
//             </span>
            
//             {/* Box 1 Main Content Title - Centered, White text, 2 lines max */}
//             <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug max-w-md">
//               Save smarter with a trusted digital Equb.
//             </h3>
            
//             {/* Image container grounded at the bottom of the flex box */}
//             <div className="relative w-full h-[240px] mt-auto overflow-hidden">
//               <Image
//                 src="/image9.png"
//                 alt="Save smarter illustration"
//                 fill
//                 sizes="(max-w-768px) 100vw, 50vw"
//                 className="object-contain object-bottom"
//               />
//             </div>
//           </div>

//           {/* BOX 2: Gradient from Bottom to Top (#1A5A45 to #85E040) */}
//           <div className="bg-gradient-to-t from-[#1A5A45] to-[#85E040] rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center shadow-xl min-h-[480px]">
//             {/* Box 2 Header tag */}
//             <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#85E040]">
//               Simple Control
//             </span>
            
//             {/* Box 2 Main Content Title - Centered, White text */}
//             <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug max-w-md">
//               Easily manage your Equb with reliability.
//             </h3>
            
//             {/* Image container grounded at the bottom of the flex box */}
//             <div className="relative w-full h-[240px] mt-auto overflow-hidden">
//               <Image
//                 src="/image10.png"
//                 alt="Simple control illustration"
//                 fill
//                 sizes="(max-w-768px) 100vw, 50vw"
//                 className="object-contain object-bottom"
//               />
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }