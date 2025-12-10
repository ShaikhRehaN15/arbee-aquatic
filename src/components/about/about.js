"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function AboutCare() {
  const handleAnchorClick = (id) => (e) => {
    e.preventDefault();
    const el = typeof document !== 'undefined' ? document.getElementById(id) : null;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
    <section id="about-care" className="relative w-full min-h-screen bg-gradient-to-b from-[#1d1d1d] to-[#292929] items-center pt-[21.5vh] font-poppins overflow-x-hidden px-4 sm:px-6 lg:px-8">
      {/* Background watermark */}
      <div
        className="
          absolute bottom-0
          w-[clamp(200px,calc(200px+((311*(100vw-320px))/1120)),511px)]
          h-[clamp(170px,calc(170px+(330*(100vw-320px)/1120)),500px)]
          pointer-events-none
          right-0 md:right-auto
          md:left-0
        "
      >
        <Image
          src="/Arbee - ICON - Cropped Dark Shade.webp"
          alt="Background Watermark"
          fill
          className="
            object-contain object-bottom
            scale-x-[-1] md:scale-x-100
          "
          priority
        />
      </div>

      <div className="relative z-20">
        {/* Heading */}
        <h2 className="text-white text-[clamp(28px,calc(28px+28*((100vw-320px)/(1200-320))),56px)] font-bold mb-4 px-[120px]">
          About <span className="text-[#00AEEF]">Arbee Care</span>
        </h2>

        {/* Two-column grid: left -> subheading/text/button, right -> stats */}
        <div className="md:grid md:grid-cols-2 gap-[60px] items-start px-[120px]">
          {/* Left column */}
          <div>
            {/* Subheading */}
            <h3 className="text-white font-semibold text-[clamp(18px,calc(18px+14*((100vw-320px)/880)),32px)] leading-snug mb-6 w-full">
              Empowering Communities. Sustaining the Future. Pioneering Social Impact
              in Health, Education &amp; the Environment
            </h3>

            {/* Body text */}
            <p className="text-[#BDBDBD] text-[clamp(16px,calc(16px+6*((100vw-320px)/880)),22px)] leading-relaxed w-full mb-8">
              Arbee Care is the CSR and community welfare initiative of Arbee Group.
              Rooted in the same legacy of trust, innovation, and responsibility that
              defines our marine business, we work to improve lives across India
              through accessible healthcare, inclusive education, and environmental
              awareness. We believe every individual deserves the opportunity to
              thrive—and every action can contribute to a better tomorrow.
            </p>

            {/* Button (visible on small screens as before) */}
            <Link
              href="#get-support"
              onClick={handleAnchorClick('get-support')}
              className="md:hidden w-[132px] mb-[100px] font-semibold h-[44px] text-[13px] py-[10px] px-[15px] bg-[#FFFFFF4D] border-2 text-white tracking-wide text-center flex items-center justify-center"
            >
              Get Support
            </Link>
          </div>

          {/* Right column: stats (three rows) */}
          <div className="flex flex-col justify-center gap-8 md:gap-10 text-white">
            <div className="flex items-center gap-6 py-6 border-t border-[#2f2f2f] first:border-t-0">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-transparent flex items-center justify-center">
                {/* teal icon (placeholder) */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v6" stroke="#00AEEF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="14" r="6" stroke="#00AEEF" strokeWidth="1.6"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[#00AEEF] text-[36px] font-bold">000+</div>
                <div className="text-[#BDBDBD] text-sm mt-1">Years of Experience &amp; Innovation</div>
              </div>
            </div>

            <div className="flex items-center gap-6 py-6 border-t border-[#2f2f2f]">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-transparent flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7h18M3 12h18M3 17h18" stroke="#00AEEF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[#00AEEF] text-[36px] font-bold">000+</div>
                <div className="text-[#BDBDBD] text-sm mt-1">Strong Team across APAC Region</div>
              </div>
            </div>

            <div className="flex items-center gap-6 py-6 border-t border-[#2f2f2f]">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-transparent flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6h16v12H4z" stroke="#00AEEF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 10h8" stroke="#00AEEF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[#00AEEF] text-[36px] font-bold">000+</div>
                <div className="text-[#BDBDBD] text-sm mt-1">Metric Tonnes per Annum Refined Fish Oil Production Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}







