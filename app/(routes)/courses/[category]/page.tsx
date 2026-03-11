'use client'
import { Course } from '@/data/courses'
import React from 'react'
import CourseCards from '../_components/CourseCards'
import Link from 'next/link'
import { rasingFont } from '../../(home)/_components/Hero/Hero'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = React.use(params)

    const courses = useSelector((state: RootState) => state.cart.courses)
    const coursesA: Course[] = courses.filter(course => course.category === category)
    return (
        <div>
            <h1 className={`${rasingFont.className} text-center mt-10 text-5xl text-[#09637E] hover:text-[#09637E] capitalize`}><Link href={`/courses`}>{category} Courses</Link></h1>
            <CourseCards coursesArr={coursesA} />
        </div>
    )
}
