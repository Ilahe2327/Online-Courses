import { roboto } from '@/app/(routes)/(home)/_components/Hero/Hero'
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#131B22] w-full h-auto'>
            <div className='container mx-auto py-12 px-4 grid grid-cols-1 place-items-center  text-center sm:text-left sm:grid-cols-2 lg:grid-cols-8 gap-8'>
                <Image
                    src='/SkillNova.png'
                    alt='Header Logo'
                    width={160}
                    height={140}
                    className='rounded-xl object-cover lg:col-span-2'
                    style={{ objectFit: 'cover' }}
                />
                <div className={`lg:col-span-2  text-taupe-50 ${roboto.className} text-sm gap-2`}>
                    <div className='flex flex-col gap-1'>
                        <h1 className={`text-taupe-50 ${roboto.className} font-semibold text-xl gap-1`}>Pages</h1>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/courses'}>Courses</Link>
                        <Link href={'/about'}>About Us</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </div>
                </div>
                <div className={`lg:col-span-2 text-taupe-50 ${roboto.className} text-sm gap-2`}>
                    <div className='flex flex-col gap-1'>
                        <h1 className={`text-taupe-50 ${roboto.className} font-semibold text-xl gap-1`}>Courses</h1>
                        <Link href={'/courses/frontend'}>Frontend Courses</Link>
                        <Link href={'/courses/backend'}>Backend Courses</Link>
                        <Link href={'/courses/datascience'}>Data Science Courses</Link>
                        <Link href={'/courses/design'}>UI/UX courses</Link>
                        <Link href={'/courses/ai'}>Artificial Intelligence courses</Link>
                    </div>
                </div>
                <div className={`lg:col-span-2 place-content-center text-taupe-50 ${roboto.className} text-sm gap-2`}>
                    <div className='flex flex-row gap-4'>
                        <Link href={'#'} className='rounded-xl hover:shadow-[2px_2px_3px_#597be6]'><Facebook /></Link>
                        <Link href={'#'} className='rounded-xl hover:shadow-[2px_2px_3px_#597be6]'><Instagram /></Link>
                        <Link href={'#'} ><Twitter className='rounded-xl hover:shadow-[2px_2px_3px_#597be6]' /></Link>
                        <Link href={'#'} className='rounded-xl hover:shadow-[2px_2px_3px_#597be6]'><Linkedin /></Link>
                        <Link href={'#'} className='rounded-xl hover:shadow-[2px_2px_3px_#597be6]'><Github /></Link>
                    </div>
                </div>

            </div>
            <div className='container mx-auto py-4 text-center text-sm border-t border-gray-700'>
                <div className={`flex flex-col md:flex-row justify-between text-amber-50 ${roboto.className}`}>

                    <div>
                        Copyright © 2026{" "}
                        <span className='text-orange-500 pl-2'>Courses</span>
                    </div>
                    <div>
                        <span className='text-orange-500'>YouTube</span>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer