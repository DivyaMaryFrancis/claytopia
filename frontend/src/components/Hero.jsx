import React from 'react'
import { assets } from '../assets/assets'
const Hero = () => {
    return (
    <main className="bg-white py-16">
      <div className="bg-white flex items-center">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className="lg:w-2/5 flex flex-col">
            <span className="w-20 h-2 bg-gray-700 mb-6"></span>
            <h1 className="font-bebas-neue uppercase text-5xl sm:text-6xl font-black leading-tight text-gray-700">
              Be on
              <span className="block text-4xl sm:text-5xl">Time</span>
            </h1>
            <p className="text-base text-gray-700 mt-4">
              Dimension of reality that makes change possible and understandable.
              An indefinite and homogeneous environment in which natural events and
              human existence take place.
            </p>
            <div className="flex mt-6">
              <a
                href="/collection"
                className="uppercase py-2 px-4 rounded-lg bg-orange-400 border-2 border-transparent text-white text-sm mr-4 hover:bg-orange-200 transition"
              >
                Shop Now
              </a>
             
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-3/5">
            <img
              src={assets.heroimage}
              className="max-w-xs md:max-w-sm mx-auto"
              alt="hero section image"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero