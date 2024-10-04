import React from 'react'

function LoadingAnimation() {
  return (
      <div className="flex items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-2">
            <div className="bg-green-500 h-4 w-4 rounded-full  animate-bounce">
            </div>
        
            <div className="bg-green-500 h-4 w-4 rounded-full  animate-bounce delay-150">
            </div>
        
            <div className="bg-green-500 h-4 w-4 rounded-full  animate-bounce delay-300">
            </div>
        </div>

      </div>
  )
}

export default LoadingAnimation
