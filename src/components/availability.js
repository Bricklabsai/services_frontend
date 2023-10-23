import Image from 'next/image';
import Map from '@/assets/world_map.0320de77.png'

export default function AvailabilitySection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center dark:bg-gray-900 py-20 px-8 md:px-20 space-y-10 md:space-y-0 md:space-x-20">
      <div className="relative w-6 h-96">
        {/* Adjust the path to your local image */}
        <Image src={Map} layout="fill" objectFit="cover" alt="Services illustration" 
                     />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M4.293 9.293a1 1 0 011.414 0L10 13.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M2.293 5.293a1 1 0 011.414 0L10 11.586l6.293-6.293a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Available everywhere in United Kingdom</h2>
        </div>
        <p className="text-gray-600 text-lg">
          There’s nothing worse than getting your hopes up, then not being able to find what you want. That won’t happen on StarOfService. From big cities to small towns, we’ve got professionals covering every region in United Kingdom.
        </p>
      </div>
    </div>
  );
}
