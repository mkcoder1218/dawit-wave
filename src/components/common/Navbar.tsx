"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "How to Work", href: "#how-to-work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Container with horizontal padding */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Logo Image */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/test-logo.png" // Change extension to .svg or .jpg if necessary
                alt="Company Logo" 
                width={140}          // Adjust width as needed for your asset
                height={40}          // Adjust height as needed for your asset
                priority             // Ensures the logo loads instantly without layout shifts
                className="object-contain"
              />
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          {/* Changed text size to text-lg and font weight to font-semibold for a bold, crisp look */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#1A5A45] text-lg font-semibold hover:opacity-80 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Desktop CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-[#1A5A45] text-white px-6 py-2.5 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all">
              Download App
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger / Cross) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#1A5A45] focus:outline-none p-2"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                // "X" Close Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Menu Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Collapsible Menu) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute top-20 left-0 w-full shadow-lg transition-all">
          <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#1A5A45] font-semibold text-xl py-2 border-b border-gray-50 last:border-none"
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full bg-[#1A5A45] text-white px-6 py-3 rounded-md font-semibold text-lg mt-4 hover:bg-opacity-90 transition-all">
              Download App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { label: "Features", href: "#features" },
//     { label: "How to Work", href: "#how-to-work" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
//       {/* Container with horizontal padding to create the left/right spacing */}
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         <div className="flex items-center justify-between h-20">
          
//           {/* Left: Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="text-2xl font-bold text-[#1A5A45]">
//               LOGO
//             </Link>
//           </div>

//           {/* Center: Desktop Navigation Links */}
//           <div className="hidden md:flex space-x-10">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="text-[#1A5A45] font-medium hover:opacity-80 transition-opacity"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           {/* Right: Desktop CTA Button */}
//           <div className="hidden md:flex">
//             <button className="bg-[#1A5A45] text-white px-6 py-2.5 rounded-md font-medium hover:bg-opacity-90 transition-all">
//               Download App
//             </button>
//           </div>

//           {/* Mobile Menu Button (Hamburger / Cross) */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="text-[#1A5A45] focus:outline-none p-2"
//               aria-expanded={isOpen}
//             >
//               {isOpen ? (
//                 // "X" Close Icon
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 // Hamburger Menu Icon
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Drawer (Collapsible Menu) */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100 absolute top-20 left-0 w-full shadow-lg transition-all">
//           <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="text-[#1A5A45] font-medium text-lg py-2 border-b border-gray-50 last:border-none"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <button className="w-full bg-[#1A5A45] text-white px-6 py-3 rounded-md font-medium mt-4 hover:bg-opacity-90 transition-all">
//               Download App
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }