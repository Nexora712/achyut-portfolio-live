'use client';

import { useEffect, useState } from 'react';

export default function ImageDiagnostics() {
  const [diagnostics, setDiagnostics] = useState({
    project1: { status: 'checking...', size: null },
    project2: { status: 'checking...', size: null },
    profile: { status: 'checking...', size: null }
  });

  useEffect(() => {
    const checkImage = (src, name) => {
      const img = new Image();
      img.onload = () => {
        setDiagnostics(prev => ({
          ...prev,
          [name]: { 
            status: '✅ Loaded successfully', 
            size: `${img.naturalWidth}x${img.naturalHeight}` 
          }
        }));
      };
      img.onerror = () => {
        setDiagnostics(prev => ({
          ...prev,
          [name]: { 
            status: '❌ Failed to load', 
            size: null 
          }
        }));
      };
      img.src = src;
    };

    checkImage('/images/portfolio/project1.jpg', 'project1');
    checkImage('/images/portfolio/project2.jpg', 'project2');
    checkImage('/images/hero/profile.jpg', 'profile');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Image Diagnostics</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">What to do:</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Look at the status of each image below</li>
            <li>If any portfolio images show "Failed to load", there's an issue with the image files or paths</li>
            <li>If all images show "Loaded successfully" but you still see the wrong images on your portfolio page, there's an issue with the component code</li>
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DiagnosticCard 
            title="Project 1" 
            src="/images/portfolio/project1.jpg"
            status={diagnostics.project1.status}
            size={diagnostics.project1.size}
          />
          <DiagnosticCard 
            title="Project 2" 
            src="/images/portfolio/project2.jpg"
            status={diagnostics.project2.status}
            size={diagnostics.project2.size}
          />
          <DiagnosticCard 
            title="Profile Image" 
            src="/images/hero/profile.jpg"
            status={diagnostics.profile.status}
            size={diagnostics.profile.size}
          />
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Next Steps:</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            <li>If portfolio images fail to load: Check that the files exist in <code className="bg-blue-100 px-1 rounded">public/images/portfolio/</code></li>
            <li>If portfolio images load but still don't appear correctly: The issue is in the component code</li>
            <li>If all images load: The problem might be browser caching - try a hard refresh (Ctrl+F5)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DiagnosticCard({ title, src, status, size }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="p-4">
        <div className="mb-3">
          <p className="text-sm text-gray-600">Status:</p>
          <p className="font-medium">{status}</p>
        </div>
        {size && (
          <div className="mb-3">
            <p className="text-sm text-gray-600">Size:</p>
            <p className="font-medium">{size}</p>
          </div>
        )}
        <div className="mt-4 h-32 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
          <img 
            src={src} 
            alt={title} 
            className="object-cover w-full h-full"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </div>
  );
}