"use client"
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { RootState } from '@/redux/store'
import { rasingFont } from '../(home)/_components/Hero/Hero'

const MyCoursesPage = () => {
    const cartItems = useSelector((state: RootState) => state.cart.purchasedItems)

    return (
        <div className="container mx-auto my-20">
            <h1 className={`${rasingFont.className} text-4xl text-[#088395] text-center mb-10`}>My Courses</h1>
            <div className="flex flex-col gap-5">
                {cartItems.map((item: any) => (
                    <div key={item.id} className=" flex flex-col md:flex-row border w-full rounded-xl p-5 gap-5 items-center">
                        <div className="lg:w-1/3 w-full relative">
                            <div className='lg:w-[350px] lg:h-[190px] w-full'>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={300}
                                    height={300}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className='lg:w-2/3'>
                            <h2 className="text-2xl font-bold">{item.title}</h2>
                            <p className="text-gray-500">{item.description}</p>
                            <p className="text-[#088395] font-bold">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyCoursesPage