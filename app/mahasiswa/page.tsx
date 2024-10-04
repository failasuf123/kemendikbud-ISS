'use client'
import HomeUpper from '@/components/mahasiswa/HomeUpper'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import LoadingAnimation from '@/components/LoadingAnimation' // Import komponen LoadingAnimation

function Page() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter(); 

  const handleStartSurvey = () => {
    setIsLoading(true); 
    setTimeout(() => {
      router.push('/mahasiswa/12Ansa82');
    }, 500);
  };

  return (
    <div>
      <HomeUpper />
      <div className="mt-24 md:mt-16 flex justify-center items-center">
        <div className="flex flex-col gap-1 items-center justify-center">
          <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl text-center">
            Hallo Failasuf Indi Marsendy !
          </h2>
          <p className="text-center text-sm md:text-base">
            Sudah siap berpartisipasi dalam survey?
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-6 lg:mt-4">
        <div className="flex justify-center items-center">
          {isLoading ? (
            <LoadingAnimation /> 
          ) : (
            <div
              onClick={handleStartSurvey}
              className="flex items-center justify-center w-40 rounded-xl px-3 py-2 bg-green-600 cursor-pointer hover:scale-95"
            >
              <p className="text-lg text-white">Mulai Survey</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Page;
