"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

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
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { rasingFont, roboto } from "../(home)/_components/Hero/Hero"
const bugReportSchema = z.object({

  name: z.string()
    .min(2, "Name must be at least 2 letters."),

  email: z.string()
    .min(1, "Email cannot be empty")
    .email("Please enter a valid email"),

  bugTitle: z.string()
    .min(5, "Title must be at least 5 characters long.")
    .max(100, "Title cannot exceed 100 characters."),

  bugDescription: z.string()
    .min(20, "The description must be at least 20 characters long.")
    .max(500, "The description cannot exceed 500 characters."),

  pageUrl: z.string()
    .min(1, "URL cannot be empty")
    .url("Enter the correct URL"),       // https:// ilə başlamalıdır

  priority: z.enum(["low", "medium", "high", "critical"]).optional(),
  //        ↑ yalnız bu 4 dəyərdən biri ola bilər, optional = məcburi deyil
})

const ContactPage = () => {
  type BugReportType = z.infer<typeof bugReportSchema>
  const {
    register,                        // input-ları forma bağlamaq üçün
    handleSubmit,                    // submit-i idarə edir
    formState: { errors, isSubmitting },  // xətalar və göndərmə vəziyyəti
    reset,                           // formu sıfırlamaq üçün
  } = useForm<BugReportType>({
    resolver: zodResolver(bugReportSchema),
    defaultValues: {
      name: "",
      email: "",
      bugTitle: "",
      bugDescription: "",
      pageUrl: "",
      priority: undefined,           // optional olduğu üçün undefined
    },
  })
  function onSubmit(data: BugReportType) {
    console.log("Form məlumatları:", data)
    reset() // göndərildikdən sonra formu təmizlə
  }
  return (
    <div className="container mx-auto my-20">

      <div>
        <div className={`${rasingFont.className} flex flex-col space-y-5 text-center mb-5`}>
          <h1 className='text-[#088395] text-6xl'>Contact Us</h1>
          <h2 className='text-4xl'>Get in Touch</h2>
        </div>
        <div>
          <h4 className={`${roboto.className} text-xl text-gray-500 text-center`}>Have questions or want to collaborate? Send us a message!</h4>
        </div>
      </div>
      <div className="w-full flex justify-start items-center my-10 border-[#088395] border-4 rounded-2xl">
        <Card className="w-full text-center flex flex-col mx-auto" >
          <CardHeader >
            <CardTitle className={`${roboto.className} text-4xl font-bold mt-8`}>Report a Bug</CardTitle>
            <CardDescription className={`${roboto.className} text-2xl italic font-bold`}>
              Help us improve by reporting bugs you encounter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 h-auto text-xl mx-auto flex flex-col items-start gap-3 mt-10 ">
              <div className="w-full h-auto text-xl mx-auto flex flex-col items-start gap-3 mt-10 border-[#088395] border-2 p-10">
                <div className="flex space-x-3 w-full items-center">
                  <div className="flex flex-col w-full">
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Name*"
                      className="border p-3 w-full"
                    />
                    {errors.name && (
                      <p style={{ color: 'red', fontSize: '15px', textAlign: 'left' }}>{errors.name.message}</p>
                    )}
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex space-x-3 w-full justify-center items-center">
                  <div className="flex flex-col w-full">
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Email*"
                      className="border p-3 w-full"
                    />
                    {errors.email && (
                      <p style={{ color: "red", fontSize: '15px', textAlign: 'left' }}>{errors.email.message}</p>
                    )}</div>
                </div>

                {/* BUG BAŞLIĞI */}
                <div className="flex space-x-3 w-full justify-center">
                  <div className="flex- flex-col w-full">
                    <input
                      {...register("bugTitle")}
                      type="text"
                      placeholder="Bug Title*"
                      className="border p-3 w-full"
                    />
                    {errors.bugTitle && (
                      <p style={{ color: "red", fontSize: '15px', textAlign: 'left' }}>{errors.bugTitle.message}</p>
                    )}
                  </div>

                </div>

                {/* BUG İZAHI */}
                <div className="flex space-x-3 w-full justify-center">
                  <div className="flex- flex-col w-full">
                    <textarea
                      {...register("bugDescription")}
                      placeholder="Bug Explanation*"
                      rows={5}
                      className="border p-3 w-full"
                    />
                    {errors.bugDescription && (
                      <p style={{ color: "red", fontSize: '15px', textAlign: 'left' }}>{errors.bugDescription.message}</p>
                    )}
                  </div>

                </div>

                {/* SƏHIFƏ URL */}
                <div className="flex space-x-3 w-full justify-center">
                  <div className="flex- flex-col w-full">
                    <input
                      {...register("pageUrl")}
                      type="url"
                      placeholder="https://saytim.com/login"
                      className="border p-3 w-full"
                    />
                    {errors.pageUrl && (
                      <p style={{ color: "red", fontSize: '15px', textAlign: 'left' }}>{errors.pageUrl.message}</p>
                    )}
                  </div>
                </div>
                <div className="flex space-x-3 w-full justify-center">
                  <div className="flex flex-col w-full">
                    <select {...register("priority")} className="border p-3 w-full">
                      <option value="">Choose...</option>
                      <option value="low">Down</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="critical">Critical</option>
                    </select>
                    {errors.priority && (
                      <p style={{ color: "red", fontSize: '15px', textAlign: 'left' }}>{errors.priority.message}</p>
                    )}
                  </div>

                </div>
              </div>
              <div className="flex justify-end w-full space-x-2">
                <Button
                  className={`cursor-pointer p-5 bg-[#088395] ${roboto.className}`}
                  type="button"
                  onClick={() => reset()}
                >
                  Reset
                </Button>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`cursor-pointer bg-[#088395] p-5 ${roboto.className}`}
                >
                  {isSubmitting ? "Göndərilir..." : "Göndər"}
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

export default ContactPage