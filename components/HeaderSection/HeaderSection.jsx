import React from 'react'
import Typewriter from 'typewriter-effect'

export default function HeaderSection() {
  return (
    <header className="h-screen static" data-scroll-index="0" id="header-section">
      <div className="h-full w-full bg-center bg-cover filter grayscale bg-header-image bg-fixed absolute z-10 top-0"></div>
      <div className="h-full w-full bg-black opacity-75 absolute z-10 top-0"></div>
      <div className="h-full w-full flex flex-col justify-end items-center relative z-30 pb-44">
        <div className="font-mono text-gray-300 text-4xl">
          Hello World!
        </div>
        <div className="text-gray-300 text-3xl md:text-5xl m-4 mt-10 font-bold tracking-wide">
          I am a
        </div>
        <div className="font-mono text-blue-400 text-lg md:text-3xl">
          <Typewriter
            options={{
              strings: ['React Developer', 'NodeJs Developer', 'Full Stack Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </header>
  )
}
