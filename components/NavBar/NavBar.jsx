import React from 'react'

const Hamburger = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

export default function NavBar() {
  return (
    <nav className="flex hover:tracking-wider antialiased font-bold w-full justify-between items-center p-5 px-20 text-2xl text-white z-40 absolute bg-transparent">
      <div>
        Satish Gupta
      </div>
      <Hamburger />
    </nav>
  )
}
