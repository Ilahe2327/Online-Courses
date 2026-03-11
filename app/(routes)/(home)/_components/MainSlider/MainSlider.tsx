'use client'
import React, { useEffect } from 'react'
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
import { rasingFont, roboto } from '../Hero/Hero'
import Autoplay from "embla-carousel-autoplay" //npm install embla-carousel-autoplay
import { Badge } from '@/components/ui/badge'
import { SliderProps } from '@/app/(routes)/courses/page'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const MainSlider = ({ category }: SliderProps) => {
    const courses = useSelector((state: RootState) => state.cart.courses)
    const coursesS = React.useMemo(() =>
        courses.filter(course => course.category === category),
        [courses, category]
    )
    const autoplay = React.useRef(Autoplay({ delay: 3000 }))
    return (
        <div className={`${category ? 'container mx-auto my-15' : 'container mx-auto my-20'}`}>
            <div className={`justify-center my-10 ${category ? 'hidden' : 'flex'}`}>
                <h1 className={`md:text-6xl text-4xl  text-[#09637E] uppercase ${rasingFont.className}`}>Our Courses</h1>
            </div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    autoplay.current
                ]}
            >
                <CarouselContent>
                    {
                        category ?
                            coursesS.map((course, index) => (
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
                                                <Button className={`${roboto.className} px-4 py-3 w-full mx-10  flex justify-center text-white text-sm font-semibold bg-[#088395] mt-2 cursor-pointer hover:bg-[#09637E]`}><Link href={`/courses/${category}/${course.title.toLowerCase().replaceAll(' ', '-')}`}>View Details</Link></Button>
                                            </CardFooter>
                                        </Card>
                                    </div>

                                </CarouselItem>

                            )) :
                            courses.map((course, index) => (
                                (index < 18 && index > 10) &&
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className='p-3'>
                                        <Card>
                                            <CardHeader className='relative'>
                                                <Image src={course.image} alt={course.title} width={1000} height={1060} loading="lazy" className='w-full h-54 rounded-t-xl object-cover' />
                                                {course.discount && (
                                                    <Badge className={`absolute top-2 left-2 bg-blue-500 text-white text-lg p-2 hover:bg-blue-600 ${roboto.className}`}>{course.discount}</Badge>
                                                )}
                                            </CardHeader>
                                            <CardContent>
                                                <CardTitle className={`${roboto.className}`}>{course.title} -- {course.category} </CardTitle>
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
                                                <Button className={`${roboto.className} px-4 py-3 w-full mx-10  flex justify-center text-white text-sm font-semibold bg-[#088395] mt-2 cursor-pointer hover:bg-[#09637E]`}><Link href={`./courses/${course.category}/${course.title.toLowerCase().replaceAll(' ', '-')}`}>View Details</Link></Button>
                                            </CardFooter>
                                        </Card>
                                    </div>

                                </CarouselItem>

                            ))

                    }

                </CarouselContent>
            </Carousel>
        </div >
    )
}

export default MainSlider
