'use client';

import { useState, useEffect } from 'react';

export default function ImageLoaderTest() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const testImages = [
      { name: 'Project 1', src: '/images/portfolio/project1.jpg' },
      { name: 'Project 2', src: '/images/portfolio/project2.jpg' },
      { name: 'Project 3', src: '/images/portfolio/project3.jpg' },
      { name: 'Profile', src: '/images/hero/profile.jpg' }
    ];

    const checkImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ src, status: 'loaded', width: img.naturalWidth, height: img.naturalHeight });
        img.onerror = () => resolve({ src, status: 'error' });
        img.src = src;
      });
    };

    Promise.all(testImages.map(img => checkImage(img.src))).then(results => {
      setImageData(results);
    });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Image Loader Test</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {imageData.map((img, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              {imageData.find(i => i.src === img.src)?.name || 'Unknown'}
            </h2>
            <p className="mb-2">
              <strong>Status:</strong> {img.status}
            </p>
            {img.status === 'loaded' && (
              <>
                <p><strong>Dimensions:</strong> {img.width} x {img.height}</p>
                <img src={img.src} alt="Test" className="mt-2 max-w-full h-auto" />
              </>
            )}
            {img.status === 'error' && (
              <p className="text-red-500">Failed to load image</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}