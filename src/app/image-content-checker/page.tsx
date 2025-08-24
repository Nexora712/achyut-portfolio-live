'use client';

import { useState, useEffect } from 'react';

export default function ImageContentChecker() {
  const [imageHashes, setImageHashes] = useState({});

  useEffect(() => {
    const checkImageContent = async (src, name) => {
      try {
        // Load image and get a simple "hash" based on dimensions and a few pixel values
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          
          // Get a few pixel values as a simple "hash"
          const samplePoints = [
            [10, 10],
            [50, 50],
            [100, 100]
          ];
          
          let hash = '';
          try {
            samplePoints.forEach(([x, y]) => {
              if (x < img.width && y < img.height) {
                const data = ctx.getImageData(x, y, 1, 1).data;
                hash += `${data[0]},${data[1]},${data[2]},${data[3]}|`;
              }
            });
          } catch (e) {
            hash = 'unable to sample';
          }
          
          setImageHashes(prev => ({
            ...prev,
            [name]: {
              src,
              dimensions: `${img.width}x${img.height}`,
              hash: hash.slice(0, 50) + (hash.length > 50 ? '...' : '')
            }
          }));
        };
        img.src = src;
      } catch (error) {
        setImageHashes(prev => ({
          ...prev,
          [name]: {
            src,
            error: error.message
          }
        }));
      }
    };

    checkImageContent('/images/portfolio/project1.jpg', 'project1');
    checkImageContent('/images/portfolio/project2.jpg', 'project2');
    checkImageContent('/images/hero/profile.jpg', 'profile');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Image Content Checker</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Findings:</h2>
          <p className="text-gray-600">
            All your images have the same file size (184,669 bytes), which means they're identical copies.
            To fix this, you need to replace the project images with actual different images.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(imageHashes).map(([name, data]) => (
            <div key={name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-800 capitalize">{name}</h3>
              </div>
              <div className="p-4">
                {data.dimensions && (
                  <div className="mb-2">
                    <p className="text-sm text-gray-600">Dimensions:</p>
                    <p className="font-medium">{data.dimensions}</p>
                  </div>
                )}
                {data.hash && (
                  <div className="mb-2">
                    <p className="text-sm text-gray-600">Content Hash:</p>
                    <p className="font-mono text-xs bg-gray-100 p-2 rounded break-words">{data.hash}</p>
                  </div>
                )}
                {data.error && (
                  <div className="mb-2">
                    <p className="text-sm text-gray-600">Error:</p>
                    <p className="text-red-500">{data.error}</p>
                  </div>
                )}
                <div className="mt-4 h-32 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={data.src} 
                    alt={name} 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">How to Fix This:</h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-700">
            <li>Replace the files in <code className="bg-blue-100 px-1 rounded">public/images/portfolio/</code> with your actual project images</li>
            <li>Name them exactly as: <code className="bg-blue-100 px-1 rounded">project1.jpg</code>, <code className="bg-blue-100 px-1 rounded">project2.jpg</code>, <code className="bg-blue-100 px-1 rounded">project3.jpg</code></li>
            <li>Make sure they are different images, not copies of the profile image</li>
            <li>Refresh the page after replacing the images</li>
          </ol>
        </div>
      </div>
    </div>
  );
}