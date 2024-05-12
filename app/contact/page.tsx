import React from 'react'
import Footer from '../components/Footer'

function page() {
  return (
    <div>
        <div>
            <h1 className=' mt-40 text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Contact Us</h1>
            <form className='grid w-[100%] sm:grid-cols-12 grid-rows-1'>
                <input type="email" placeholder='Enter your Email' className=' mr-2 p-1 col-start-4 col-end-10 mb-3 h-10 rounded text-black'/>
                <textarea name="message" id="message" placeholder='Your complain/suggestion' className=' mr-2 p-1 text-start text-black col-start-4 col-end-10 mb-3 h-[250px] rounded'></textarea>
                <button className=' col-start-6 col-end-8 mt-4 border-cyan-800 bg-slate-700 rounded-md font-bold h-8 hover:bg-gray-300 hover:text-black duration-300'>Submit</button>
            </form>
        </div>
        <div className=' mt-4'>
            <Footer/>
        </div>
    </div>
  )
}

export default page