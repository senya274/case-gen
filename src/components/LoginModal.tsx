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
    <div className="h-screen">
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogContent className='absolute z-[999999]'>
            <DialogHeader>
              
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
    </div>
  )
}

export default LoginModal