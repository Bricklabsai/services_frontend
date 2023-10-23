'use client'


import Image from "next/image";
import React from "react";
import Group from '@/assets/group.2700ddbe.png'



export default function AvailabilitySection() {
  return (
    <div className="flex items-center justify-center dark:bg-gray-900 py-20 px-8 md:px-20 space-y-10 md:space-y-0 md:space-x-20">
      <div className="flex-1 relative w-full h-96 z-10">
        {/* Adjust the path to your local image */}
        <Image src={Group} layout="fill" objectFit="cover" alt="Services illustration" />
      </div>
      <div className="flex-1 flex flex-col space-y-6">
        <div className="flex items-center space-x-3">
          
          <h2 className="text-2xl md:text-3xl font-semibold text-white-800">Available everywhere in United Kingdom</h2>
        </div>
        <p className="text-white text-lg">
          There’s nothing worse than getting your hopes up, then not being able to find what you want. That won’t happen on StarOfService. From big cities to small towns, we’ve got professionals covering every region in United Kingdom.
        </p>
      </div>
    </div>
  );
}
