"use client"
import React from 'react'
import Footer from '../components/Footer'
import CourseData from "../data/music_courses.json"
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Image from 'next/image';


function page() {
  return (
    <div>
        <div className=' mt-32'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-8'>Total Courses {CourseData.courses.length}</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
            {CourseData.courses.map((data, index)=>(
            <CardContainer key={index} className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        {data.title}
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                    {data.description}
                    </CardItem>
                    <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4"
                    >
                    <Image src={data.image} width={1000} height={1000} alt={data.slug}/>
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        <h1>Price : {data.price}$</h1>
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Sign up
                    </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
            ))}
                
        </div>
        <div className=' mt-4'>
            <Footer />
        </div>
    </div>
  )
}

export default page