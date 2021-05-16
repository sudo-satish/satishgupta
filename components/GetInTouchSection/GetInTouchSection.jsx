import React from 'react'
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
    <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
)

const PhoneOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const AtSymbol = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
  </svg>
);

const LocationMarker = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function GetInTouchSection() {
  return (
    <section className="flex flex-col py-12 p-5 justify-center items-center" data-scroll-index="3" id="get-in-touch-section">

      <div className="flex flex-col md:w-1/3 md:min-h-full  justify-items-start items-center my-5">
        <PhoneIcon />
        <div className="text-2xl font-bold tracking-wider text-gray-800 mt-5">Get In touch</div>
        <div className="m-4 border w-full border-blue-400"></div>
      </div>

      <div className="flex flex-col md:flex-row md:w-3/4 justify-between">
        <div className="flex flex-col justify-center items-center md:mt-5">
          <LocationMarker />
          <span className="mt-5">Delhi NCR, India</span>
        </div>

        <div className="flex flex-col justify-center items-center mt-10 md:mt-5">
          <PhoneOutline />
          <span className="mt-5"><a href="tel:8130626713" className="cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600">+91 8130626713</a></span>
        </div>

        <div className="flex flex-col justify-center items-center mt-10 md:mt-5">
          <AtSymbol />
          <span className="mt-5"><a href="mailto:satishkumr001@gmail.com" className="cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600">satishkumr001@gmail.com</a></span>
        </div>
      </div>



    </section>
  )
}
