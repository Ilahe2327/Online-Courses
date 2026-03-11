'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { roboto } from "../../(home)/_components/Hero/Hero"
import { Course } from "@/data/courses"
import { useRouter } from "next/navigation"
export interface CoursesArrayProps {
    coursesArr: Course[]
}


const CourseCards = ({ coursesArr }: CoursesArrayProps) => {

    const router = useRouter()
    return (
        <div className="container mx-auto w-full my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {coursesArr.map((course) => (
                <div key={course.id} className="p-3 w-full">
                    <Card>
                        <CardHeader>
                            <Image
                                src={course.image || "/placeholder.png"}
                                alt={course.title}
                                width={1000}
                                height={600}
                                loading="lazy"
                                className="w-full h-54 rounded-t-xl object-cover"
                            />
                        </CardHeader>

                        <CardContent className={`${roboto.className}`}>
                            <CardTitle className="text-xl font-extrabold text-gray-900">{course.title}</CardTitle>
                            <CardDescription className=" font-extrabold text-gray-400 my-2">{course.description}</CardDescription>
                        </CardContent>

                        <CardFooter className="flex justify-center px-10">
                            <Button className={`${roboto.className} px-4 py-3 w-full mx-10  flex justify-center text-white text-sm font-semibold bg-[#088395] mt-2 cursor-pointer hover:bg-[#09637E]`} onClick={() => {
                                router.push(`/courses/${course.category}/${course.title.toLowerCase().replaceAll(" ", "-")}`)
                            }}>View Details</Button>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>
    )
}
export default CourseCards