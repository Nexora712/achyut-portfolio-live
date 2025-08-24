'use client';

import { useEffect } from 'react';

export default function PathDebug() {
  useEffect(() => {
    console.log('Testing image paths:');
    
    const testImages = [
      '/images/portfolio/project1.jpg',
      '/images/portfolio/project2.jpg',
      '/images/portfolio/project3.jpg',
      '/images/hero/profile.jpg'
    ];
    
    testImages.forEach(src => {
      const img = new Image();
      img.onload = () => {
        console.log(`✅ Loaded: ${src}`, img);
      };
      img.onerror = () => {
        console.log(`❌ Failed to load: ${src}`);
      };
      img.src = src;
    });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Path Debug Information</h1>
      <p className="mb-4">Check the browser console for image loading results.</p>
      <p>Open Developer Tools (F12) and look at the Console tab to see which images are loading correctly.</p>
    </div>
  );
}