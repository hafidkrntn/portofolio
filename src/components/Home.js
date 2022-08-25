import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#30475E]">
            
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-red-600">Hi, my name is</p>
                <h1 className="text-4xl sm:text-3xl font-bold text-[#F5F5F5]">Muhamad Hafid Kurnianton</h1>
                <h2 className="text-4xl sm:text-2xl font-bold text-[#121212]">I'm an enthusiastic coding & technology</h2>
                <div>
                    <button className="text-white border-2 px-6 py-3 mt-2 flex items-center hover:bg-red-600 hover:border-red-600">
                        View More 
                    <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                    </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home