'use client'
import React from 'react'
import { rasingFont, roboto } from '../(home)/_components/Hero/Hero'
import Link from 'next/link'
import MainSlider from '../(home)/_components/MainSlider/MainSlider'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { Badge } from '@/components/ui/badge'
import { courses } from '@/data/courses'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export interface SliderProps {
    category: string
}
const CoursesPage = () => {
    const query = useSelector((state: RootState) => state.search.query)
    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase())
    )
    if (query) {
        return (
            <div>
                <h1 className={`${rasingFont.className} text-center mt-10 text-5xl text-[#09637E] hover:text-[#09637E]`}><Link href={'/courses/frontend'}>Frontend Courses</Link></h1>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {filteredCourses.map((course, index) => (

                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className='p-3'>
                                    <Card>
                                        <CardHeader className='relative'>
                                            <Image src={course.image} alt={course.title} width={1000} height={1060} className='w-full h-54 rounded-t-xl object-cover' />
                                            {course.discount && (
                                                <Badge className={`absolute top-2 left-2 bg-blue-500 text-white text-lg p-2 hover:bg-blue-600 ${roboto.className}`}>{course.discount}</Badge>
                                            )}
                                        </CardHeader>
                                        <CardContent>
                                            <CardTitle className={`${roboto.className}`}>{course.title}</CardTitle>
                                            <CardDescription className={`${roboto.className} max-h-10 pb-15 pt-4`}>{course.description}</CardDescription>
                                            <div className='flex justify-between items-center mt-4'>
                                                <div>
                                                    <span className='text-[#088395] font-bold text-xl'>{course.price}</span>
                                                    {course.newPrice && (
                                                        <span className='text-gray-600 ml-2 line-through'>{course.newPrice}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className='flex justify-center px-10'>
                                            <Button className={`${roboto.className} px-4 py-3 w-full mx-10  flex justify-center text-white text-sm font-semibold bg-[#088395] mt-2 cursor-pointer hover:bg-[#09637E]`}><Link href={`/courses/${course.category}/${course.title.toLowerCase().replaceAll(' ', '-')}`}>View Details</Link></Button>
                                        </CardFooter>
                                    </Card>
                                </div>

                            </CarouselItem>

                        ))}
                    </CarouselContent>
                </Carousel>
            // </div >
        )
    }
    return (
        <div className='container mx-auto'>
            <div>
                <h1 className={`${rasingFont.className} text-center mt-10 text-5xl text-[#09637E] hover:text-[#09637E]`}><Link href={'/courses/frontend'}>Frontend Courses</Link></h1>
                <MainSlider category="frontend" />
            </div>
            <hr />
            <div>
                <h1 className={`${rasingFont.className} text-center mt-10 text-5xl text-[#09637E] hover:text-[#09637E]`}><Link href={`/courses/backend`}>Backend Courses</Link></h1>
                <MainSlider category="backend" />
            </div>
            <hr />
            <div>
                <h1 className={`${rasingFont.className} text-center mt-10 text-5xl text-[#09637E] hover:text-[#09637E]`}><Link href={'/courses/ai'}>Artificial Intelligence Courses</Link></h1>
                <MainSlider category="ai" />
            </div>
            <div>
                <h1 className={`${rasingFont.className} text-center mt-10 text-5xl text-[#09637E] hover:text-[#09637E]`}><Link href={'/courses/design'}>UI/UX Courses</Link></h1>
                <MainSlider category="design" />
            </div>
            <div>
                <h1 className={`${rasingFont.className} text-center mt-10 text-5xl text-[#09637E] hover:text-[#09637E]`}><Link href={'/courses/datascience'}>Data Science Courses</Link></h1>
                <MainSlider category="datascience" />
            </div>
        </div>
    )
}

export default CoursesPage