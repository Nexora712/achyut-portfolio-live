'use client';

import Image from 'next/image';
import React from 'react';

export default function ImageTest() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Project 1</h2>
          <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/project1.jpg"
              alt="Project 1"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Project 2</h2>
          <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/project2.jpg"
              alt="Project 2"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Profile Image</h2>
          <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/hero/profile.jpg"
              alt="Profile"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}