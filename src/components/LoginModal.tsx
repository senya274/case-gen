import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import type { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import { buttonVariants } from './ui/button'

const LoginModal = ({isOpen, setIsOpen} : {
    isOpen: boolean
    setIsOpen:  Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogContent className='absolute z-[999999]'>
            <DialogHeader>
                <div className="relative mx-auto w-24 h-24 mb-2">
                    <Image src="/snake-1.png" alt='Snake Img' className='object-contain' fill/>
                </div>
                <DialogTitle className='text-3xl text-center font-bold tracking-tight text-gray-900'>
                    Log In to continue
                </DialogTitle>
                <DialogDescription className='text-base text-center py-2'>
                    <span className='font-medium text-zinc-900'>
                        Your configuration was saved!
                    </span>{' '}
                    Please login or create or account to complete your purchase
                </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
                <LoginLink className={buttonVariants({variant: "outline"})}>Log In</LoginLink>
                <RegisterLink className={buttonVariants({variant: "default"})}>Sign Up</RegisterLink>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default LoginModal