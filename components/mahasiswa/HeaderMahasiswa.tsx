import React from 'react'
import {ThemeModeButton} from '@/components/ThemeModeButton'
import Logo from '../Logo'


function HeaderMahasiswa() {
  return (
    <div>
        <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
            <Logo/>
            <div className="flex  items-center gap-4">
                <ThemeModeButton />
            </div>
        </nav>
      
    </div>
  )
}

export default HeaderMahasiswa
