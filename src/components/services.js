'use client'

import Image from 'next/image';
import Dj from '@/assets/dj.faeb5a07.jpg'
import Plumber from '@/assets/plomberie.jpg'
import Coach from '@/assets/coaching.jpg'
import Catering from '@/assets/service.jpg'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-10">Popular services in Juja, Nairobi, Kenya</h1>
      <div className="flex space-x-6 overflow-x-scroll pb-4 no-scrollbar">
        <ServiceCard 
          title="Dj"
          count={95}
          imageUrl={Dj}
        />
        <ServiceCard 
          title="Plumbing"
          count={87}
          imageUrl={Plumber} 
        />
        <ServiceCard 
          title="Personal training"
          count={90}
          imageUrl={Coach}
        />
        <ServiceCard 
          title="Catering"
          count={92}
          imageUrl={Catering}
        />
        {/* Add more ServiceCard components as needed */}
      </div>
    </div>
  );
}

const ServiceCard = ({ title, count, imageUrl }) => {
  return (
    <div className="relative w-64 h-80 overflow-hidden rounded-md">
      <Image 
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute bottom-4 left-4 z-10">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        <p className="text-white">{count} professionals near you</p>
      </div>
    </div>
  );
};

// Styles to hide the scrollbar
{/* <style jsx global>{`
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style> */}
