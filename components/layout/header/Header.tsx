'use client'
import { roboto } from '@/app/(routes)/(home)/_components/Hero/Hero'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Menu, Search, ShoppingBasket, User } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { HeaderProps } from '@/app/(routes)/layout'
import { Input } from '@/components/ui/input'
// import MobileMenu from './MobileMenu'
const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });
import { UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setQuery } from '@/redux/searchSlice'
import { RiLoginCircleLine } from "react-icons/ri";
import dynamic from 'next/dynamic'

const Header = ({ title }: HeaderProps) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')
    const searchItem = () => {
        dispatch(setQuery(inputValue))
    }
    return (
        <div className={`${title ? 'bg-[#171D26] p-4 flex items-center justify-between lg:px-30 px-10' : 'container mx-auto p-4 flex items-center justify-between'} `}>
            <Image
                src='/SkillNova.png'
                alt='Header Logo'
                width={130}
                height={120}
                className={`rounded-xl object-cover ${title ? 'w-20 h-10 xl:w-30' : 'w-30 h-10'} `}
                style={{ objectFit: 'cover' }}
            />
            <nav className='hidden lg:flex lg:text-lg xl:text-xl space-x-10'>
                <Link href={'/'} className={`text-white font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]
                hover-underline
                `}>Home</Link>

                <Link href={'/courses'} className={`text-white font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[6px_2px_3px_#597be6] 
              hover-underline
                `} >Courses</Link>

                <Link href={'/about'} className={`text-white p-0 font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]  hover-underline`}>About Us</Link>

                <Link href={'/contact'} className={`text-white font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]  hover-underline`}>Contact</Link>
            </nav>
            <div className={`${title ? 'hidden md:block' : 'hidden'}  relative w-96 md:w-80 xl:w-80 mx-5`}>
                <Input className='relative w-full text-white ' onChange={(e) => setInputValue(e.target.value)} />
                <Search className='absolute right-2 top-1 text-sm text-amber-50' onClick={searchItem} />
            </div>
            <div className='flex items-center space-x-2'>
                <button onClick={() => router.push('/sign-in')} className='bg-white p-1.5 rounded-full cursor-pointer'>
                    <User className='text-[#088395] text-sm' />
                </button>
                <button onClick={() => router.push('/sign-up')} className='bg-white p-2 rounded-full cursor-pointer'>
                    <RiLoginCircleLine className='text-[#088395] text-xl' />
                </button>
                <button onClick={() => router.push('/basket')} className='bg-white p-1.5 rounded-full cursor-pointer'>
                    <ShoppingBasket className='text-[#088395] text-xl' />
                </button>
                <MobileMenu />
                <UserButton />
            </div>

        </div >
    )
}

export default Header