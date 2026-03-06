import { roboto } from '@/app/(routes)/(home)/_components/Hero/Hero'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='container mx-auto p-4 flex items-center justify-between'>
            <Image
                src='/SkillNova.png'
                alt='Header Logo'
                width={130}
                height={120}
                className='rounded-xl object-cover'
                style={{ objectFit: 'cover' }}
            />

            <nav className='hidden md:flex space-x-6'>

                <Link href={'/'} className={`text-white font-semibold text-xl ${roboto.className}`}>Home</Link>

                <Link href={'/contact'} className='text-white font-semibold text-xl'>Contact</Link>

                <Link href={'/contact'} className='text-white font-semibold text-xl'>Home</Link>

                <Link href={'/contact'} className='text-white font-semibold text-xl'>Home</Link>
            </nav>
            <div className='flex items-center space-x-2'>
                {/* <Button variant={'secondary'}><Search /></Button>
                <Link href={'/login'}>
                    <Button variant={'secondary'}>
                        <User />
                    </Button>
                </Link>
                <ModeToggle /> */}
                {/* <MobileMenu /> */}
            </div>

        </div >
    )
}

export default Header