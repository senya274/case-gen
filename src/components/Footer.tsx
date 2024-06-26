import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const Footer = () => {
  return (
   <footer className='bg-white h-20 relative'>
    <MaxWidthWrapper>
        <div className='border-t border-gray-200'/>
        <div className="h-full flex justify-center items-center flex-col md:flex-row md:justify-between ">
            <div className="text-center md:text-left pb-2 md:pb-0">
                <p className='text-sm text-muted-foreground'>
                    &copy; {new Date().getFullYear()} Non Commercial Use by Syn-Front.Dev
                </p>
            </div>
        </div>
    </MaxWidthWrapper>
   </footer>
  )
}

export default Footer