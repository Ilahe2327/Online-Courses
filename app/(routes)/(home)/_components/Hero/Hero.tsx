import React from 'react'
import './Hero.css'
import { Racing_Sans_One , Roboto } from "next/font/google"
import Header from '@/components/layout/header/Header';

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
            <div className='bg-image'>
                <Header/>
                <div className='leftDiv w-1/2'>
                    <div className='flex flex-col justify-start items-start w-full p-10 container mx-10 py-40 gap-3'>
                        <h1 className={`${rasingFont.className} mainTitle w-lg uppercase shadow-blue-900 text-white font-semibold text-7xl`}>
                            Learn Future Skills with SkillNova
                        </h1>
                        <h3 className={`${roboto.className}  w-lg  text-white font-extrabold text-3xl  italic `}>Master Web Development, AI, and Modern Technologies</h3>
                        <p className={`${roboto.className} italic  w-lg  text-white font-semibold text-xl`}>Explore high-quality courses designed to help you build real-world skills and advance your career.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero