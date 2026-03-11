// 'use client'
import React from 'react'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { rasingFont, roboto } from '@/app/(routes)/(home)/_components/Hero/Hero'

const MobileMenu = () => {
    return (
        <div className='block lg:hidden'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={'secondary'}><Menu /></Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className={`${rasingFont.className} font-semibold text-2xl text-center mt-4 uppercase text-[#088395]`}>Skill Nova</SheetTitle>
                        <SheetDescription className='mt-10 flex text-[17px] flex-col gap-3 uppercase'>
                            <Link href={'/'} className={`text-[#09637E] font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]
                hover-underline
                `}>Home</Link>

                            <Link href={'/courses'} className={`text-[#09637E] font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[6px_2px_3px_#597be6] 
              hover-underline
                `} >Courses</Link>

                            <Link href={'/about'} className={`text-[#09637E] p-0 font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]  hover-underline`}>About Us</Link>

                            <Link href={'/contact'} className={`text-[#09637E] font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]  hover-underline`}>Contact</Link>
                        </SheetDescription>
                        <SheetTitle className={`${rasingFont.className} font-semibold text-2xl text-center mt-4 uppercase text-[#088395]`}>Courses</SheetTitle>
                        <SheetDescription className='mt-10 flex text-[17px] flex-col gap-3 uppercase'>
                            <Link href={'/courses/frontend'} className={`text-[#09637E] font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]
                hover-underline
                `}>Frontend Courses</Link>
                            <Link href={'/courses/backend'} className={`text-[#09637E] font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]
                hover-underline
                `}>Backend Courses</Link>
                            <Link href={'/courses/datascience'} className={`text-[#09637E] font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]
                hover-underline
                `}>Data Science Courses</Link>
                            <Link href={'/courses/design'} className={`text-[#09637E] font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]
                hover-underline
                `}>UI/UX courses</Link>
                            <Link href={'/courses/ai'} className={`text-[#09637E] font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]
                hover-underline
                `}>Artificial Intelligence courses</Link>

                        </SheetDescription>
                    </SheetHeader>

                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileMenu