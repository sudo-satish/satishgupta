import React from 'react'

const Hamburger = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

const scrollTo = (id) => document.getElementById(id).scrollIntoView({behavior: "smooth"});
export default function NavBar() {
  return (
    <nav className="flex hover:tracking-wider antialiased font-bold w-full justify-between items-center p-5 px-10 md:px-20 text-2xl text-white z-40 absolute bg-transparent">
      <div>
        Satish Gupta
      </div>

      <div className="group menu md:hidden">
        <Hamburger />
        <ul className="w-48 dropdown-menu hidden absolute text-gray-700 text-sm pt-1 z-50 top-16 right-10">
          <li className=""><a className="rounded-t text-center bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => scrollTo("header-section")}>Home</a></li>
          <li className=""><a className="text-center bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => scrollTo("hero-section")}>About</a></li>
          <li className=""><a className="text-center bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => scrollTo("skill-section")}>Portfolio</a></li>
          <li className=""><a className="text-center rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => scrollTo("get-in-touch-section")}>Contact</a></li>
        </ul>
      </div>

      <div className="hidden flex-row w-1/3 font-serif text-sm justify-end md:flex">
        <a className="lg:mx-3 block p-2 cursor-pointer"  onClick={() => scrollTo("header-section")}>Home</a>
        <a className="lg:mx-3 block p-2 cursor-pointer" onClick={() => scrollTo("hero-section")}>About</a>
        <a className="lg:mx-3 block p-2 cursor-pointer" onClick={() => scrollTo("skill-section")}>Portfolio</a>
        <a className="lg:mx-3 block p-2 cursor-pointer" onClick={() => scrollTo("get-in-touch-section")}>Contact</a>
      </div>
    </nav>
  )
}
