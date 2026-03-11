'use client'
import Image from 'next/image'
import React from 'react'
import { rasingFont, roboto } from '../(home)/_components/Hero/Hero'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const AboutPage = () => {
    const router = useRouter()
    return (
        <div className='container mx-auto my-20'>
            <div className='flex flex-col md:flex-row justify-between p-5'>
                <div className='w-full lg:w-1/2 flex h-auto justify-center items-center flex-col space-x-3 font-extrabold my-20'>
                    <div className={`${rasingFont.className} flex flex-col space-y-5 text-center mb-5`}>
                        <h1 className='text-[#088395] text-6xl'>About SkillNova</h1>
                        <h2 className='text-4xl'>Who We Are ? </h2>
                    </div>
                    <div>
                        <h4 className={`${roboto.className} text-xl text-gray-500 text-center`}>SkillNova is an AI-powered learning platform helping students and professionals master modern technologies</h4>
                        <p className={`${roboto.className} text-xl text-gray-500 text-center`}>Our mission is to make high-quality education accessible to everyone, anytime, anywhere.</p>
                    </div>
                    <Button className={`${roboto.className} px-6 py-5 w-1/2 mx-auto   flex justify-center text-white text-sm font-semibold bg-[#088395] mt-6 cursor-pointer hover:bg-[#09637E]`} onClick={()=>router.push(`/sign-up`)}>Get To Started</Button>
                </div>
                <Image
                    src={'/abimage.jpg'}
                    alt='About Us Main Image'
                    width={500}
                    height={600}
                    className='hidden lg:block'
                />
            </div>
            <div className='w-full bg-[#088395] h-auto text-white my-15 p-20 rounded-2xl text-center flex flex-col space-y-3'>
                <h1 className={`text-white text-5xl mb-10 ${rasingFont.className}`} >Why Choose Our Platform</h1>
                <ul className={`list-disc-none ${roboto.className} font-bold text-xl`}>
                    <li>Expert-designed courses</li>

                    <li> Progress tracking & personalized learning paths</li>

                    <li>  Access from any device</li>

                    <li>  AI-powered recommendations</li>
                </ul>
                <div>
                    <p className={`${roboto.className} text-xl text-white text-center font-bold`}>
                        Our team is composed of experienced educators and developers passionate about technology and learning.
                    </p>
                    <p className={`${roboto.className} text-xl text-white text-center font-bold`}>
                        We envision a world where everyone can learn new skills and advance their career efficiently.”
                    </p>
                </div>


            </div>
        </div>
    )
}

export default AboutPage