'use client'

import { RootState } from '@/redux/store'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rasingFont, roboto } from '../(home)/_components/Hero/Hero'
import { Delete, DeleteIcon, RemoveFormatting } from 'lucide-react'
import { TiDeleteOutline } from "react-icons/ti";
import { removeFromBasket } from '@/redux/cartSlice'

import Link from 'next/link'
const BasketPage = () => {
  const dispatch = useDispatch()
  const { items, totalAmount, hydrated } = useSelector((state: RootState) => state.cart)
  return (
    <div className='container mx-auto py-10 mt-10 flex flex-col space-y-4'>
      {
        items && items.map((item) => (
          <div key={item.id} className='flex flex-col lg:flex-row w-4/5 border-2 border-[#088395] mx-auto '>
            <div className='border-r-4 p-9'>
              <div className='lg:w-[300px] lg:h-[170px] w-full'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className={`${roboto.className} p-10 relative w-full`}>
              <h2 className={`${rasingFont.className} text-2xl font-bold`}>{item.title} - <span className={`text-[#088395] ${roboto.className} font-bold text-lg`}>   {item.level} Level</span></h2>
              <p className={`${roboto.className} text-gray-700 font-bold mt-1`}>{item.instructor}</p>
              <p className={`${roboto.className} text-gray-500 text-sm mt-2`}>{item.description} - </p>
              {
                item.discount ?
                  <div className="flex space-x-3 justify-between mt-3">
                    <div>
                      <p className="text-2xl text-red-500 font-extrabold">{item.newPrice}  </p>
                      <del className="text-gray-500">{item.price}</del><span className="text-xl text-red-500"> - {item.discount}</span>
                    </div>

                  </div> : <div>
                    <p className="text-3xl text-red-500 font-extrabold">{item.price}</p>
                  </div>
              }

              <div className='absolute top-3 right-4'>
                <TiDeleteOutline onClick={() => dispatch(removeFromBasket(item))} className='text-3xl text-[#088395] cursor-pointer' />
              </div>
            </div>
          </div>
        ))
      }
      {

        <div className='justify-end flex w-4/5 mx-auto'>
          <table className='w-full lg:w-1/2 border p-10 border-collapse'>
            <thead className='carttotalsThead'>
              <tr>
                <th colSpan={2} className='bg-[#f5f5f5] h-[60px] ' >
                  <h2 style={{ color: 'black' }} className={`${rasingFont.className} text-left pl-3 text-2xl`}>CART TOTALS</h2>
                </th>
              </tr>
            </thead>
            <tbody className={`${roboto.className} text-left`}>
              <tr className=''>
                <td className='py-4 px-8'>Subtotal</td>
                <td className='text-right py-4 px-8'>{totalAmount}</td>
              </tr>
              <tr>
                <td className='py-4 px-8'>
                  Total
                </td>
                <td className='text-right py-4 px-8'>
                  {totalAmount}
                </td>
              </tr>
              <tr className='p-3 flex justify-center w-full mx-auto'>
                <td className='p-3 flex justify-center w-full mx-auto' colSpan={2}>
                  <button className={`${roboto.className} w-full ${items.length > 0 ? 'cursor-pointer' : 'cursor-no-drop'} flex justify-center text-lg p-2 font-bold text-white bg-[#088395] hover:bg-[#09637E]`} > <Link href={'/checkout'} className={`${items.length > 0 ? 'pointer-events-auto' : 'pointer-events-none'}`}>Proceed to checkout</Link></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      }
    </div>

  )
}

export default BasketPage