'use client'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import { usePathname } from 'next/navigation'
import React from 'react'

export interface HeaderProps {
    title: string
}
interface RouteLayoutProps {
    children: React.ReactNode
}
const LayoutPage = ({ children }: RouteLayoutProps) => {
    const pathname = usePathname()
    return (
        <div>
            {
                pathname === '/' ? '' : <Header title="My Courses" />
            }
            <div className='min-h-screen'>
                 {children}
            </div>
            <Footer />
        </div>
    )
}

export default LayoutPage