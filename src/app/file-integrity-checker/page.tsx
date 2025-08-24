'use client';

import { useState, useEffect } from 'react';

export default function FileIntegrityChecker() {
  const [fileInfo, setFileInfo] = useState({});

  useEffect(() => {
    // Function to calculate a simple checksum of a file
    const calculateChecksum = (arrayBuffer) => {
      const uint8Array = new Uint8Array(arrayBuffer);
      let checksum = 0;
      for (let i = 0; i < Math.min(uint8Array.length, 1000); i++) {
        checksum = (checksum + uint8Array[i]) % 1000000;
      }
      return checksum;
    };

    // Function to fetch and check a file
    const checkFile = async (url, name) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const buffer = await response.arrayBuffer();
        const checksum = calculateChecksum(buffer);
        const size = buffer.byteLength;
        
        setFileInfo(prev => ({
          ...prev,
          [name]: {
            status: 'loaded',
            size,
            checksum,
            url
          }
        }));
      } catch (error) {
        setFileInfo(prev => ({
          ...prev,
          [name]: {
            status: 'error',
            error: error.message
          }
        }));
      }
    };

    // Check all image files
    checkFile('/images/portfolio/project1.jpg', 'project1');
    checkFile('/images/portfolio/project2.jpg', 'project2');
    checkFile('/images/portfolio/project3.jpg', 'project3');
    checkFile('/images/hero/profile.jpg', 'profile');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">File Integrity Checker</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Analysis:</h2>
          <p className="text-gray-600">
            This tool checks the actual binary content of your image files to determine if they are truly different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(fileInfo).map(([name, data]) => (
            <div key={name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-800 capitalize">{name}</h3>
              </div>
              <div className="p-4">
                {data.status === 'loaded' ? (
                  <>
                    <div className="mb-2">
                      <p className="text-sm text-gray-600">File Size:</p>
                      <p className="font-medium">{data.size} bytes</p>
                    </div>
                    <div className="mb-2">
                      <p className="text-sm text-gray-600">Checksum:</p>
                      <p className="font-mono text-xs bg-gray-100 p-2 rounded">{data.checksum}</p>
                    </div>
                    <div className="mt-4 h-32 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src={data.url} 
                        alt={name} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </>
                ) : (
                  <div className="text-red-500">
                    <p>Error loading file:</p>
                    <p>{data.error}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Interpretation:</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            <li>If all files have the same checksum, they are identical copies</li>
            <li>If files have different checksums, they are different images</li>
            <li>If you've placed different images but still see the same checksum, there might be a caching issue</li>
          </ul>
        </div>
      </div>
    </div>
  );
}