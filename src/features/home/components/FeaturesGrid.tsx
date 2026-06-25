"use client";

import Image from "next/image";

export default function FeaturesGrid() {
  const cards = [
    {
      id: 1,
      title: "Secure Cashless Equb Transactions",
      description: "Send and receive Equb payments safely—no cash, no risk.",
      image: "/image5.png",
      reverseOrder: false,
    },
    {
      id: 2,
      title: "Easy Equb Creation & Management",
      description: "Create or join Equb groups and manage everything in one place.",
      image: "/image6.png",
      reverseOrder: true, // Center Card
    },
    {
      id: 3,
      title: "Smart Automated Contributions",
      description: "Stay on track with scheduled payments and instant reminders.",
      image: "/image7.png",
      reverseOrder: false,
    },
  ];

  return (
    <section className="relative w-full bg-white py-12 px-6 sm:px-8 lg:px-12">
      {/* BACKGROUND SPLIT LAYER WITH SIDE SPACE */}
      {/* mx-auto and max-w-7xl ensures it matches the width grid and leaves left/right white spaces */}
      <div className="absolute top-0 left-6 right-6 lg:left-6 lg:right-6 h-[55%] bg-[#1A5A45] rounded-3xl z-0" />

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <div className="w-full text-center pt-8 pb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#85E040] tracking-tight">
            Digital Equb, Zero Cash Risk
          </h2>
        </div>

        {/* 3-Column Card Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`bg-white rounded-2xl shadow-xl flex flex-col justify-between border border-gray-100 min-h-[420px] ${
                card.reverseOrder ? "overflow-visible" : "overflow-hidden"
              }`}
            >
              {/* CARD CONDITION: Side Cards vs Center Card */}
              {!card.reverseOrder ? (
                /* Card 1 & 3: TEXT TOP, IMAGE BOTTOM */
                <>
                  {/* Centered text alignment with reduced padding */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1A5A45] leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#242424] font-normal leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Image container handles cropping at your exact top specifications */}
                  <div className="relative w-full h-[220px] mt-auto overflow-hidden">
                    <div className="absolute w-[90%] h-full left-[5%] top-[2.5%]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-w-768px) 100vw, 33vw"
                        className="object-contain object-top"
                      />
                    </div>
                  </div>
                </>
              ) : (
                /* Card 2 (Center): IMAGE TOP (Pops out), TEXT BOTTOM (Brought closer) */
                <>
                  {/* Overflow-visible allows the image to break out of the card limits */}
                  <div className="relative w-full h-[220px] z-30 overflow-visible">
                    <div className="absolute w-[95%] h-[115%] left-[2.5%] -top-[15%]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-w-768px) 100vw, 33vw"
                        className="object-contain object-bottom drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Centered text pulled up tightly right underneath the popped image */}
                  <div className="p-6 pt-2 pb-8 text-center mt-auto">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1A5A45] leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#242424] font-normal leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";

// export default function FeaturesGrid() {
//   const cards = [
//     {
//       id: 1,
//       title: "Secure Cashless Equb Transactions",
//       description: "Send and receive Equb payments safely—no cash, no risk.",
//       image: "/image5.png",
//       reverseOrder: false, // Normal order: Text top, Image bottom
//     },
//     {
//       id: 2,
//       title: "Easy Equb Creation & Management",
//       description: "Create or join Equb groups and manage everything in one place.",
//       image: "/image6.png",
//       reverseOrder: true,  // Center card anomaly: Image top, Text bottom
//     },
//     {
//       id: 3,
//       title: "Smart Automated Contributions",
//       description: "Stay on track with scheduled payments and instant reminders.",
//       image: "/image7.png",
//       reverseOrder: false, // Normal order: Text top, Image bottom
//     },
//   ];

//   return (
//     <section className="relative w-full bg-white py-12">
//       {/* BACKGROUND SPLIT LAYER */}
//       {/* Top half is #1A5A45, Bottom half is pure white */}
//       <div className="absolute top-0 left-0 w-full h-[55%] bg-[#1A5A45] z-0" />

//       {/* CONTENT WRAPPER */}
//       <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
//         {/* Section Heading with requested #85E040 color */}
//         <div className="w-full text-center pt-8 pb-12">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-[#85E040] tracking-tight">
//             Digital Equb, Zero Cash Risk
//           </h2>
//         </div>

//         {/* 3-Column Card Layout Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-4">
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between border border-gray-100 min-h-[450px]"
//             >
//               {/* CARD CONDITION: Normal Card VS Center Card (Inverted Layout) */}
//               {!card.reverseOrder ? (
//                 /* Card 1 & 3: TEXT TOP, IMAGE BOTTOM */
//                 <>
//                   <div className="p-8 pb-4">
//                     <h3 className="text-xl font-bold text-[#1A5A45] leading-snug">
//                       {card.title}
//                     </h3>
//                     <p className="mt-3 text-sm sm:text-base text-[#242424] font-normal leading-relaxed">
//                       {card.description}
//                     </p>
//                   </div>
//                   {/* Image container handles cropping at ~75% via overflow hidden & partial height translation */}
//                   <div className="relative w-full h-[240px] mt-auto overflow-hidden">
//                     <div className="absolute w-[90%] h-full left-[5%] top-[2.5%]">
//                       <Image
//                         src={card.image}
//                         alt={card.title}
//                         fill
//                         sizes="(max-w-768px) 100vw, 33vw"
//                         className="object-contain object-top"
//                       />
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 /* Card 2 (Center): IMAGE TOP, TEXT BOTTOM */
//                 <>
//                   {/* Image container handles cropping at ~75% via overflow hidden & partial height translation */}
//                   <div className="relative w-full h-[240px] mb-auto overflow-hidden">
//                     <div className="absolute w-[90%] h-full left-[5%] -top-[2.5%]">
//                       <Image
//                         src={card.image}
//                         alt={card.title}
//                         fill
//                         sizes="(max-w-768px) 100vw, 33vw"
//                         className="object-contain object-bottom"
//                       />
//                     </div>
//                   </div>
//                   <div className="p-8 pt-4">
//                     <h3 className="text-xl font-bold text-[#1A5A45] leading-snug">
//                       {card.title}
//                     </h3>
//                     <p className="mt-3 text-sm sm:text-base text-[#242424] font-normal leading-relaxed">
//                       {card.description}
//                     </p>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }