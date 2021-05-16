import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="py-12 p-5" data-scroll-index="1" id="hero-section">
      <div className="flex flex-col justify-center items-center">
        <div className="h-60 w-60 md:h-80 md:w-80 rounded-full border-double border-blue-400 shadow-lg bg-profile-image bg-cover filter grayscale ring ring-purple-600 ring-offset-4 ring-offset-purple-100"></div>
        <div className="mt-16 text-3xl md:text-4xl font-bold tracking-wider text-gray-700 text-opacity-90">I am Satish Gupta</div>
        <div className="m-4 border w-1/3"></div>
        <p className="text-center text-sm text-gray-500 text-opacity-80 tracking-wide px-10 mt-5">
          Hey there, I am A DEVELOPER having experience of Native and Hybrid App development in Android & React Native and I also do Web development in ReactJs. I'm always look forward to learn new technology and programming languages.
          I have diverse set of skills like Android, ReactNative, ReactJs, Java, JavaScript, Google Firebase and other related technology.
        </p>

        <div className="m-10 flex">
          <button className="border-2 p-2 px-4 border-blue-400 w-40 bg-blue-400 text-white text-xs tracking-wider hover:bg-white hover:text-blue-400 hover:shadow-md">HIRE ME</button>
          <button className="group border-2 p-2 px-4 border-blue-400 w-40 text-blue-400 text-xs tracking-wider hover:bg-blue-400 hover:text-white hover:shadow-md">DOWNLOAD CV</button>
        </div>
      </div>
    </section>
  )
}
