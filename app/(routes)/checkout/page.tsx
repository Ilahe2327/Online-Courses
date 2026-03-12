"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { IoIosLock } from "react-icons/io";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field
} from "@/components/ui/field"
import { rasingFont, roboto } from "../(home)/_components/Hero/Hero"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { clearBasket } from "@/redux/cartSlice"
const bugReportSchema = z.object({
    email: z.string()
        .min(1, "Email boş ola bilməz")
        .email("Düzgün email daxil edin"),
    username: z.string()
        .min(3, "Name must be at least 3 letters."),
    lastname: z.string()
        .min(3, 'Lastname must be at least 3 letters.'),
    description: z.string()
        .min(10, "The description must be at least 10 characters long.")
        .max(500, "The description cannot exceed 500 characters."),
    phone: z.string()
        .min(10, 'Telefon nömrəsi çox qısadır')
        .max(13, 'Telefon nömrəsi çox uzundur')
        .regex(/^(\+994|0)(50|51|55|70|77|99)\d{7}$/, 'Düzgün telefon nömrəsi daxil edin')
})

const CheckoutPage = () => {
    const route = useRouter()
    const dispatch = useDispatch()
    type BugReportType = z.infer<typeof bugReportSchema>
    const {
        register,                        // input-ları forma bağlamaq üçün
        handleSubmit,                    // submit-i idarə edir
        formState: { errors, isSubmitting },  // xətalar və göndərmə vəziyyəti
        reset,                           // formu sıfırlamaq üçün
    } = useForm<BugReportType>({
        resolver: zodResolver(bugReportSchema),
        defaultValues: {
            email: "",
            username: "",
            lastname: "",
            description: "",
            phone: '',
        },
    })
    function onSubmit(data: BugReportType) {
        console.log("Form məlumatları:", data)
        route.push('/my-course')
        dispatch(clearBasket())
        reset() // göndərildikdən sonra formu təmizlə
        alert('Congratulations, the course was successfully completed.')
    }
    return (
        <div className="container mx-auto my-20">

            <div>
                <div className={`${rasingFont.className} flex flex-col space-y-5 text-center mb-5`}>
                    <h1 className='text-[#088395] text-6xl'>Checkout</h1>
                    <h2 className='text-4xl'>Get in Touch</h2>
                </div>
                <div>
                    <h4 className={`${roboto.className} text-xl text-gray-500 text-center`}>Have questions or want to collaborate? Send us a message!</h4>
                </div>
            </div>
            <div className="w-full flex justify-start items-center my-10 border-[#088395] border-4 rounded-2xl">
                <Card className="w-full text-center flex flex-col mx-auto" >
                    <CardHeader >
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 h-auto text-xl mx-auto flex flex-col items-start gap-3 mt-10 ">
                            <div className="w-full h-auto text-xl mx-auto flex flex-col items-start gap-3 mt-10 border-[#088395] border-2 p-10">
                                <div className="flex space-x-3 w-full justify-center items-center">
                                    <div className="flex flex-col w-full">
                                        <input
                                            {...register("email")}
                                            type="email"
                                            placeholder="Email*"
                                            className="border-2 rounded p-3 w-full"
                                        />
                                        {errors.email && (
                                            <p style={{ color: "red", fontSize: '15px' }}>{errors.email.message}</p>
                                        )}</div>
                                </div>
                                <div className="flex space-x-1 w-full">
                                    <div className="flex flex-col w-1/2">
                                        <input
                                            {...register("username")}
                                            type="text"
                                            placeholder="userName*"
                                            className="border-2 rounded p-3 w-full"
                                        />
                                        {errors.username && (
                                            <p style={{ color: 'red', fontSize: '15px' }}>{errors.username.message}</p>
                                        )}
                                    </div>
                                    <div className="flex flex-col w-1/2">
                                        <input
                                            {...register("lastname")}
                                            type="text"
                                            placeholder="lastName*"
                                            className="border-2 rounded p-3 w-full"
                                        />
                                        {errors.lastname && (
                                            <p style={{ color: 'red', fontSize: '15px' }}>{errors.lastname.message}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex space-x-3 w-full items-center">
                                    <div className="flex- flex-col w-full">
                                        <input
                                            {...register("phone")}
                                            type="text"
                                            placeholder="Phone*"
                                            className="border-2 rounded p-3 w-full"
                                        />
                                        {errors.phone && (
                                            <p style={{ color: 'red', fontSize: '15px' }}>{errors.phone.message}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex space-x-3 w-full justify-center">
                                    <div className="flex- flex-col w-full">
                                        <textarea
                                            {...register("description")}
                                            placeholder="Additional information"
                                            rows={5}
                                            className="border-2 rounded p-3 w-full"
                                        />
                                        {errors.description && (
                                            <p style={{ color: "red", fontSize: '15px' }}>{errors.description.message}</p>
                                        )}
                                    </div>
                                </div>


                            </div>
                            <div className='w-full'>
                                <h3 className={`${rasingFont.className} text-left`}>Payment</h3>
                                <div className='w-full '>
                                    <div className={` ${roboto.className} border-[#088395] border-1 w-full flex justify-around items-center text-sm md:text-lg`}>
                                        <p style={{ marginLeft: '15px' }}>PayPal</p>
                                        <img src='/PayPal.jpg' alt="paypal" className="w-1/3" />
                                        <a className="text-blue-500 text-lg" href="https://www.paypal.com/us/digital-wallet/how-paypal-works">What is PayPal ?</a>
                                    </div>
                                    <div className={`${roboto.className} border-t-0 p-3 border-[#088395] border-1 text-sm font-bold text-gray-500`}>
                                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full'>
                                <Button type="submit" className={`${roboto.className} w-4/5  text-lg p-6 cursor-pointer font-bold text-white bg-[#088395] hover:bg-[#09637E]`}><IoIosLock /> Proceed to PayPal
                                </Button>
                            </div>

                        </form>
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card >
            </div>
        </div>

    )
}

export default CheckoutPage