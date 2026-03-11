'use client'

import { Course, courses } from '@/data/courses'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AdminPage = () => {
    const [courseList, setCourseList] = useState<Course[]>([])
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [lessons, setLessons] = useState('')
    const [duration, setDuration] = useState('')
    const [level, setLevel] = useState('')
    const [instructor, setInstructor] = useState('')
    const [students, setStudents] = useState('')
    const [image, setImage] = useState('')

    const router = useRouter()
    const { user, isLoaded } = useUser()
    // page yüklənəndə localStorage-dan kursları çəkmək
    useEffect(() => {
        if (isLoaded) {
            const adminEmails = ["suleymanovailahe012@gmail.com"]
            const userEmail = user?.emailAddresses?.[0]?.emailAddress || ""
            if (!user || !adminEmails.includes(userEmail)) {
                router.replace('/') // admin deyilsə home-a yönləndir
            }
        }
    }, [isLoaded, user])

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCourses = JSON.parse(localStorage.getItem("courses") || "[]")
            if (storedCourses.length === 0) {
                localStorage.setItem("courses", JSON.stringify(courses)) // courses → default data
                setCourseList(courses)
            } else {
                setCourseList(storedCourses)
            }
        }
    }, [])

    const saveToStorage = (courses: Course[]) => {
        localStorage.setItem('courses', JSON.stringify(courses))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newCourse: Course = {
            id: Date.now(),
            title,
            category,
            description,
            price,
            lessons: Number(lessons),
            duration,
            level,
            instructor,
            rating: 5,
            students: Number(students),
            image: image || '/HtmlCss.jpeg',
        }

        const updatedCourses = [...courseList, newCourse]
        setCourseList(updatedCourses)
        saveToStorage(updatedCourses)

        alert('Your course has been successfully added!')

        // inputları sıfırlamaq
        setTitle('')
        setCategory('')
        setDescription('')
        setPrice('')
        setLessons('')
        setDuration('')
        setLevel('')
        setInstructor('')
        setStudents('')
        setImage('')
    }

    const handleDelete = (id: number) => {
        const updatedCourses = courseList.filter(course => course.id !== id)
        setCourseList(updatedCourses)
        saveToStorage(updatedCourses)
    }
    if (!isLoaded || !user) return <p>Loading...</p>

    return (
        <div className="container mx-auto my-20">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg mx-auto">
                <input type="text" className="border p-3" required placeholder="Course Title" value={title} onChange={e => setTitle(e.target.value)} />
                <input type="text" className="border p-3" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
                <input type="text" className="border p-3" required placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                <input type="text" className="border p-3" required placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
                <input type="text" className="border p-3" required placeholder="Lessons" value={lessons} onChange={e => setLessons(e.target.value)} />
                <input type="text" className="border p-3" required placeholder="Duration" value={duration} onChange={e => setDuration(e.target.value)} />
                <input type="text" className="border p-3" required placeholder="Level" value={level} onChange={e => setLevel(e.target.value)} />
                <input type="text" className="border p-3" required placeholder="Instructor" value={instructor} onChange={e => setInstructor(e.target.value)} />
                <input type="text" className="border p-3" required placeholder="Students" value={students} onChange={e => setStudents(e.target.value)} />
                <input type="text" className="border p-3" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
                <button type="submit" className="bg-amber-700 text-white p-3 mt-2">Add Course</button>
            </form>

            <div className="mt-10 flex flex-col gap-3 max-w-lg mx-auto">
                {courseList.map(course => (
                    <div key={course.id} className="flex justify-between items-center border p-3">
                        <p>{course.title}</p>
                        <button className="bg-red-500 text-white px-3 py-1" onClick={() => handleDelete(course.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminPage