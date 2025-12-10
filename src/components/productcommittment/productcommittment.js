'use client';
import React from 'react';
import Image from 'next/image';

export default function ProductCommittment() {
  return (
    <section
      id="product-commitment"
      className="relative min-h-screen w-full bg-[#1d1d1d] text-white font-poppins flex flex-col gap-[40px]"
    >

      {/* TOP BLOCK */}
      <div className="grid md:grid-cols-2 gap-[48px] pt-[160px] px-[120px]">

        <div>
          <h2 className="font-bold text-[56px] leading-tight">
            Product Committment
          </h2>
        </div>

        <div>
          <div className="font-semibold text-lg">
            Quality You Can Trust: The Arbee Standard
          </div>

          <p className="text-[#BDBDBD] mt-4 text-sm leading-relaxed">
            At Arbee, quality drives everything we do. From advanced R&D to
            world-class manufacturing, we ensure each product—from refined
            Omega-3 fish oil to nutrient-rich fish meal—is crafted to the
            highest standards. With a focus on purity, sustainability, and
            innovation, Arbee delivers marine solutions that meet diverse
            industry needs with excellence.
          </p>
        </div>
      </div>

      {/* BOTTOM IMAGE BLOCK */}
      <div className="relative w-full h-auto md:h-[460px] overflow-hidden">
        <Image
          src="/c1b78a0a9d63eab24ff8111d80cdc4dbd6eaf476.png"
          alt="product-commitment"
          fill
          className="object-cover"
        />

        {/* two columns overlay */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 z-10 p-4 sm:p-8 md:p-12 lg:p-16">
          {/* left col → 4 rows */}
          <div className="flex flex-col justify-center">
            {[
              'Quality Standard',
              'Sustainable Innovation',
              'Responsible Sourcing',
              'Eco Production',
            ].map((label) => (
              <div key={label}>
                <div className="grid grid-cols-[1fr_auto] items-center py-3 md:py-6">
                  <div className="pl-4 md:pl-6 text-2xl md:text-3xl lg:text-[40px]">{label}</div>
                  <div className="pr-4 md:pr-6 p-2 md:p-[20px]">
                    <svg
                      className="w-5 h-5 md:w-7 md:h-7"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full h-[1px] md:h-[2px] bg-white opacity-60" />
              </div>
            ))}
          </div>

          {/* right empty column */}
          <div className="hidden md:block" />
        </div>
      </div>
      
    </section>
  );
}
