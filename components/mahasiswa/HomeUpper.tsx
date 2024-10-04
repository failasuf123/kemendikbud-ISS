import React from 'react'

function HomeUpper() {
  return (
    <div className="flex items-center justify-center relative">
        <div className="px-5 rounded-xl mt-4 h-[250px] w-[800px] relative">
            {/* Banner Image */}
            <img className="object-cover dark:opacity-75 scale-90 md:scale-95 lg:scale-100 rounded-xl h-[250px] w-[1000px]" 
                src="/img/mahasiswa-banner.png" 
                alt="Banner" 
            />
            
            {/* Profile Image - positioned to overlap banner */}
            <img 
                className="z-10 w-28 h-28 scale-90 md:scale-95 lg:scale-100 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-gray-800 dark:border-white " 
                src="/img/mahasiswa-dummy-profile.png" 
                alt="Profile" 
            />
        </div>
    </div>
  )
}

export default HomeUpper
