'use client';

import { useEffect, useState } from 'react';

export default function ImageDebug() {
  const [imageStatus, setImageStatus] = useState({});

  useEffect(() => {
    const portfolioImages = [
      '/images/portfolio/project1.jpg',
      '/images/portfolio/project2.jpg',
      '/images/portfolio/project3.jpg',
    ];

    portfolioImages.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        setImageStatus(prev => ({ ...prev, [src]: 'Loaded successfully' }));
      };
      img.onerror = () => {
        setImageStatus(prev => ({ ...prev, [src]: 'Failed to load' }));
      };
      img.src = src;
    });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Image Debug Information</h1>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Portfolio Image Status:</h2>
        <ul className="space-y-2">
          <li>
            <strong>Project 1:</strong> {imageStatus['/images/portfolio/project1.jpg'] || 'Checking...'}
          </li>
          <li>
            <strong>Project 2:</strong> {imageStatus['/images/portfolio/project2.jpg'] || 'Checking...'}
          </li>
          <li>
            <strong>Project 3:</strong> {imageStatus['/images/portfolio/project3.jpg'] || 'Checking...'}
          </li>
        </ul>
      </div>
      
      <div className="mt-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Instructions:</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Ensure your images are placed in the <code className="bg-gray-200 px-1 rounded">public/images/portfolio/</code> directory</li>
          <li>Name them exactly as: <code className="bg-gray-200 px-1 rounded">project1.jpg</code>, <code className="bg-gray-200 px-1 rounded">project2.jpg</code>, <code className="bg-gray-200 px-1 rounded">project3.jpg</code></li>
          <li>Refresh the page after placing the images</li>
          <li>If images still don't load, check the browser's Network tab for 404 errors</li>
        </ol>
      </div>
    </div>
  );
}