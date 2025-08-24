'use client';

export default function SimpleImageTest() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Simple Image Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Project 1</h2>
          <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/images/portfolio/project1.jpg" 
              alt="Project 1" 
              className="object-cover w-full h-full"
              onError={(e) => {
                console.log('Failed to load project1.jpg');
                e.currentTarget.src = '/images/hero/profile.jpg';
              }}
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Project 2</h2>
          <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/images/portfolio/project2.jpg" 
              alt="Project 2" 
              className="object-cover w-full h-full"
              onError={(e) => {
                console.log('Failed to load project2.jpg');
                e.currentTarget.src = '/images/hero/profile.jpg';
              }}
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Profile Image</h2>
          <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/images/hero/profile.jpg" 
              alt="Profile" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}