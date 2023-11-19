"use client"

import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

const Hero = () => {
  const handleScroll = () => alert("Hello mate")
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'> Find, book, or rent a car — quickly and easily</h1>
            <p className="hero__subtitle">Streamline your car rental experience with our effortless booking process.</p>

            <CustomButton 
              containerStyles="bg-primary-blue text-white rounded-md mt-10"
              title="Get Started"
              handleClick={handleScroll}
            />
        </div>

        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className='object-contain'/>
          </div>

          <div className="hero__image-overlay" />
          <div className="hero__image-overlay" />
        </div>
    </div>
  )
}

export default Hero