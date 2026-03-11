'use client'
import React from 'react'
import './Hero.css'
import { Racing_Sans_One, Roboto } from "next/font/google"
import Header from '@/components/layout/header/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const rasingFont = Racing_Sans_One({
    variable: "--font-racing",
    subsets: ["latin"],
    weight: '400'
});

export const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ['400', '600'],
    style: ["normal", "italic"]
})
const Hero = () => {
    return (
        <div style={{ width: '100%', height: 'auto' }}>
            <div className='bg-image h-auto'>
                <Header title='' />
                <div className='leftDiv md:w-1/2 w-full pb-10'>
                    <div className='flex flex-col justify-start items-start w-full md:p-10 p-5 container md:mx-10 py-20 gap-3 text-center sm:text-left'>
                        <h1 className={`${rasingFont.className} mainTitle md:w-lg uppercase shadow-blue-900 text-white font-semibold text-3xl sm:text-5xl xl:text-7xl`}>
                            Learn Future Skills with SkillNova
                        </h1>
                        <h3 className={`${roboto.className} md:w-lg  text-white font-extrabold text-xl md:text-2xl
                        xl:text-3xl  italic `}>Master Web Development, AI, and Modern Technologies</h3>
                        <p className={`${roboto.className} italic  md:w-lg  text-white font-semibold text-xl`}>Explore high-quality courses designed to help you build real-world skills and advance your career.</p>
                        <div className='w-full flex justify-center sm:justify-start'>
                            <Link href='/sign-up'><Button className={`${roboto.className} px-9 py-5 flex justify-center text-white text-lg font-semibold bg-[#088395] mt-2 cursor-pointer hover:bg-[#09637E]`}>Get Started</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero