import React from 'react'
import aboutmeImg from "../assets/AboutMe-image.webp"
import aboutmeImg2 from "../assets/aboutme-inner-img.png"
import frontendlogo from "../assets/forntendevlogo.svg"
import "./Fonts.css"
function AboutMe() {
  return (
    <div id='about' className='AboutMe-Container w-screen min-h-screen flex flex-col md:flex-row items-center overflow-x-auto'>
      <div className='Aboutme-Imgs w-full md:w-1/2 px-2 md:px-4 pt-6 md:pt-0'>
         <div className='relative '>
            <img src={aboutmeImg} alt="aboutme main img " className=' rounded-2xl'/>
            <div className='absolute w-24 h-24 sm:w-44 sm:h-44 bg-white rounded-full right-26 -bottom-10 sm:-right-20 sm:-bottom-10'>
                <img src={frontendlogo} alt="frontendlogo"  className='animate-spin'/>
                <div className='absolute sm:w-16 sm:h-16 w-10 h-10 sm:top-14 sm:left-14 top-7 left-7 '>
                <img src={aboutmeImg2} alt="aboutmeImg2" />
            </div>
            </div>
            
         </div>
      </div>

      <div className='Aboutme-Text w-full md:w-1/2 px-4 md:px-14 py-8 md:py-0 lg:px-20'>
         <div className='mt-8 md:mt-0 text-left '>
         <h3 className='font-bold text-xl text-sky-400 mb-3'>ABOUT ME</h3>
         <h4 className='text-3xl md:text-4xl leading-snug font-bold mb-5'>Front-end Developer <br />
            based in Pune, India 📍
         </h4>
         <p className='leading-normal text-base md:text-lg font-medium '>
         Hey, my name is Pradeep, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.
         <br />
         <br />
         My main stack currently is React.js in combination with Tailwind CSS and JavaSript.
         </p>

         
         </div>
      </div>


    </div>
  )
}

export default AboutMe