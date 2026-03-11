'use client'

import { rasingFont, roboto } from "@/app/(routes)/(home)/_components/Hero/Hero";
import MainSlider from "@/app/(routes)/(home)/_components/MainSlider/MainSlider";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import { addToBasket, removeFromBasket } from "@/redux/cartSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CourseDetail({ params }: { params: Promise<{ category: string; slug: string }> }) {
    const { slug } = React.use(params)
    const decodedSlug = decodeURIComponent(slug).replaceAll('&', 'and').replaceAll(' ', '-')
    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState) => state.cart.items)

    const course = courses.find((c) =>
        c.title.toLowerCase().replaceAll('&', 'and').replaceAll(' ', '-') === decodedSlug
    );
    if (!course) {
        return <div>Course not found</div>;
    }
    const isInCart = cartItems.find(item => item.id === course.id)

    return (
        <div className="container mx-auto my-20">
            <div>
                <h1 className={`md:text-6xl text-4xl text-center  text-[#09637E] uppercase ${rasingFont.className}`}><Link href={`/courses/${course.category}`}>{course.category} Courses</Link></h1>
            </div>

            <div className="my-10 border-20 border-[#088395] p-3 shadow-2xl">

                <div className="border-3 p-10 flex md:flex-row flex-col">
                    {/* Left */}
                    <div className="mr-10">
                        <Image
                            src={course.image}
                            alt={course.title}
                            width={600}
                            height={900}
                            className="w-full h-[350px] shadow-2xl object-cover "
                        />
                    </div>
                    {/* Right */}
                    <div className="w-1/2 h-auto flex flex-col">
                        <h1 className={`text-4xl ${rasingFont.className} text-center md:text-left text-[#088395] uppercase`}>{course.title}</h1>
                        <p className={`${roboto.className} text-gray-700 font-bold mt-2`}>{course.instructor}</p>
                        <p className={`${roboto.className} text-gray-500 text-sm mt-2`}>{course.description} - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quisquam aliquam non error, alias amet sapiente architecto cum obcaecati. -  <span className="text-[#088395] font-bold text-lg">   {course.level} Level</span></p>
                        {
                            course.discount ?
                                <div className="flex space-x-3 justify-between mt-3">
                                    <div>
                                        <p className="text-3xl text-red-500 font-extrabold">{course.newPrice}  </p>
                                        <del className="text-gray-500">{course.price}</del><span className="text-xl text-red-500"> - {course.discount}</span>
                                    </div>

                                </div> : <div>
                                    <p className="text-3xl text-red-500 font-extrabold">{course.price}</p>
                                </div>
                        }
                        <div className="flex justify-between">
                            <p className={`${roboto.className} text-gray-500 font-bold mt-2`}>Total {course.duration} - {course.lessons} lessons </p>
                            <p className={`${roboto.className} text-gray-500 font-bold mt-2`}>Number of students:  {course.students}</p>
                        </div>
                        <div className="place-content-end">
                            {
                                isInCart ? <Button onClick={() => dispatch(removeFromBasket(course))} className={`${roboto.className} p-5 w-1/2 flex justify-center text-white text-sm font-semibold bg-[#088395] mt-7 cursor-pointer hover:bg-[#09637E]`}>Remove To Basket</Button> :
                                    <Button onClick={() => dispatch(addToBasket(course))} className={`${roboto.className} p-5 w-1/2 flex justify-center text-white text-sm font-semibold bg-[#088395] mt-7 cursor-pointer hover:bg-[#09637E]`}>Add To Basket</Button>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <h1 className={`md:text-6xl text-4xl  text-[#09637E] uppercase text-center ${rasingFont.className}`}>Our Courses</h1>
            </div>
            <div className="border-5 border-[#088395] shadow-2xl px-10 my-20">
                <MainSlider category={course.category} />
            </div>
        </div>
    );
}