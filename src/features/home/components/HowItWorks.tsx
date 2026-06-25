"use client";

import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Download the App",
      description: "Get the Wave Equb app and create your account in minutes. Quick setup and secure access.",
    },
    {
      number: 2,
      title: "Join or Create an Equb",
      description: "Start your own group or join an existing one. Set contribution amounts and schedules.",
    },
    {
      number: 3,
      title: "Make Contributions",
      description: "Pay your share securely through the app. Get reminders so you never miss a payment.",
    },
    {
      number: 4,
      title: "Track & Get Paid",
      description: "Monitor progress in real-time and receive your payout through a fair system.",
    },
  ];

  return (
    <section id="how-to-work" className="w-full bg-white py-12 md:py-16">
      {/* Balanced layout container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image Asset (Scale increased to max-w-2xl & aspect-square) */}
        <div className="relative w-full aspect-square max-w-2xl mx-auto lg:mx-0">
          <Image
            src="/image4.png"
            alt="How Wave Equb Works"
            fill
            sizes="(max-w-1024px) 100vw, 50vw"
            priority
            className="object-contain"
          />
        </div>

        {/* Right Side: Step-by-Step Connected Timeline */}
        <div className="flex flex-col">
          {/* Section Small Label */}
          <span className="text-sm font-semibold text-black uppercase tracking-wider">
            How it works
          </span>
          
          {/* Main Headline */}
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A5A45] leading-tight">
            Start saving with confidence in just a few simple steps.
          </h2>

          {/* Timeline Steps Container */}
          <div className="mt-8 flex flex-col">
            {steps.map((step, index) => (
              <div key={step.number} className="flex group">
                
                {/* Left Line & Dot Geometry Column */}
                <div className="flex flex-col items-center mr-4 sm:mr-6">
                  {/* The Timeline Dot */}
                  <div className="w-4 h-4 rounded-full bg-[#1A5A45] flex-shrink-0 mt-1.5" />
                  
                  {/* The Connected Dashed Line (Repeating small dashes with micro gaps) */}
                  {index !== steps.length - 1 && (
                    <div className="w-0 h-full border-l-2 border-dashed border-[#1A5A45] flex-grow my-1 min-h-[60px]" />
                  )}
                </div>

                {/* Content Block (Title & Description) */}
                <div className="pb-8 group-last:pb-0">
                  {/* Changed subtitle text color directly to your brand hex #1A5A45 */}
                  <h3 className="text-lg font-bold text-[#1A5A45] flex items-center gap-2">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-[#3C3C3C] font-normal leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


// "use client";

// import Image from "next/image";

// export default function HowItWorks() {
//   const steps = [
//     {
//       number: 1,
//       title: "Download the App",
//       description: "Get the Wave Equb app and create your account in minutes. Quick setup and secure access.",
//     },
//     {
//       number: 2,
//       title: "Join or Create an Equb",
//       description: "Start your own group or join an existing one. Set contribution amounts and schedules.",
//     },
//     {
//       number: 3,
//       title: "Make Contributions",
//       description: "Pay your share securely through the app. Get reminders so you never miss a payment.",
//     },
//     {
//       number: 4,
//       title: "Track & Get Paid",
//       description: "Monitor progress in real-time and receive your payout through a fair system.",
//     },
//   ];

//   return (
//     <section id="how-to-work" className="w-full bg-white py-12 md:py-16">
//       {/* Balanced layout grid container */}
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
//         {/* Left Side: Image Asset */}
//         <div className="relative w-full aspect-[4/3] max-w-xl mx-auto lg:mx-0">
//           <Image
//             src="/image4.png"
//             alt="How Wave Equb Works"
//             fill
//             sizes="(max-w-1024px) 100vw, 50vw"
//             priority
//             className="object-contain"
//           />
//         </div>

//         {/* Right Side: Step-by-Step Connected Timeline */}
//         <div className="flex flex-col">
//           {/* Section Small Label */}
//           <span className="text-sm font-semibold text-black uppercase tracking-wider">
//             How it works
//           </span>
          
//           {/* Main Headline */}
//           <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A5A45] leading-tight">
//             Start saving with confidence in just a few simple steps.
//           </h2>

//           {/* Timeline Steps Container */}
//           <div className="mt-8 flex flex-col">
//             {steps.map((step, index) => (
//               <div key={step.number} className="flex group">
                
//                 {/* Left Line & Dot Geometry Column */}
//                 <div className="flex flex-col items-center mr-4 sm:mr-6">
//                   {/* The Timeline Dot */}
//                   <div className="w-4 h-4 rounded-full bg-[#1A5A45] flex-shrink-0 mt-1.5" />
                  
//                   {/* The Connected Line down (Hidden on the final item) */}
//                   {index !== steps.length - 1 && (
//                     <div className="w-0.5 bg-[#1A5A45] flex-grow my-1 min-h-[50px]" />
//                   )}
//                 </div>

//                 {/* Content Block (Title & Description) */}
//                 <div className="pb-8 group-last:pb-0">
//                   <h3 className="text-lg font-bold text-black flex items-center gap-2">
//                     {step.title}
//                   </h3>
//                   <p className="mt-1 text-sm sm:text-base text-[#3C3C3C] font-normal leading-relaxed max-w-md">
//                     {step.description}
//                   </p>
//                 </div>

//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }