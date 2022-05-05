import React from 'react'
const EducationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
  </svg>
)

const BriefCaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
  </svg>
)

const SkillsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const SkillSection = () => {
  return (
    <section className="bg-gray-600 py-12" data-scroll-index="2" id="skill-section">
      <div className="flex flex-col md:flex-row justify-center md:items-start">
        <div className="flex justify-center items-center flex-col md:flex-row">
          <div className="md:mr-2">
            <h1 className="text-2xl font-bold tracking-wider blue-600 text-gray-300">Experience</h1>
          </div>
          <div className="flex w-full flex-col self-center justify-center items-center text-blue-400 md:ml-2" >
            <div>Clik.ai</div>
            <div>Sr. Specialist Full Stack</div>
          </div>
        </div>
      </div>
    </section>
  )
};

// function SkillSection() {
//   return (
//     <section className="bg-gray-600 py-12" data-scroll-index="2" id="skill-section">
//       <div className="flex flex-col md:flex-row justify-center md:items-start">
//         <div className="flex flex-col md:w-1/3 md:min-h-full  justify-items-start items-center my-5">
//           <EducationIcon />
//           <h1 className="text-2xl font-bold tracking-wider blue-600 text-gray-300">Education</h1>
//           <div className="m-4 border w-1/3 border-blue-400"></div>
//           <h2 className="text-lg font-extrabold tracking-wider text-gray-400"> Bachelor of Technology</h2>
//           <h3 className="text-lg font-bold tracking-wider text-gray-400"> 2017</h3>
//           <h3 className="md:text-lg font-bold tracking-wider text-gray-400 font-mono">Computer Science and Engineering</h3>
//           <h3 className="tracking-wider text-gray-400 font-mono"> From</h3>
//           <h1 className="tracking-wider text-gray-400 font-mono">Maharishi Dayanand University</h1>
//         </div>
//         <div className="flex flex-col md:w-1/3 md:min-h-full justify-center items-center my-5 mt-10 md:mt-5">
//           <BriefCaseIcon />
//           <h1 className="text-2xl font-bold tracking-wider blue-600 text-gray-300">Experience</h1>
//           <div className="m-4 border w-1/3 border-blue-400"></div>
//           <h2 className="text-lg font-extrabold tracking-wider text-gray-400">Clik.ai</h2>
//           <h3 className="tracking-wider text-gray-400">2019 - current</h3>
//           <h2 className="text-lg font-extrabold tracking-wider text-gray-400 mt-5">Fluper Ltd.</h2>
//           <h3 className="tracking-wider text-gray-400">2018 - 2019</h3>
//           <h2 className="text-lg font-extrabold tracking-wider text-gray-400 mt-5">FlexiEle ERP Solutions</h2>
//           <h3 className="tracking-wider text-gray-400">2017 - 2018</h3>
//         </div>
//         <div className="flex flex-col md:w-1/3 md:min-h-full w-full justify-center items-center my-5 mt-10 md:mt-5">
//           <SkillsIcon />
//           <h1 className="text-2xl font-bold tracking-wider blue-600 text-gray-300">Skills</h1>
//           <div className="m-4 border w-20 border-blue-400"></div>

//           <div className="w-2/3">
//             <div className="text-xs text-white mb-2 flex justify-between">
//               <span>ReactJs</span><span>80%</span>
//             </div>
//             <div className="w-full h-2 bg-gray-400 rounded-full overflow-hidden mb-7">
//               <div className="w-3/4 h-2 bg-blue-400 rounded-md"></div>
//             </div>
//           </div>

//           <div className="w-2/3">
//             <div className="text-xs text-white mb-2 flex justify-between">
//               <span>NodeJs</span><span>85%</span>
//             </div>
//             <div className="w-full h-2 bg-gray-400 rounded-full overflow-hidden mb-7">
//               <div className="w-4/5 h-2 bg-blue-400 rounded-md"></div>
//             </div>
//           </div>

//           <div className="w-2/3">
//             <div className="text-xs text-white mb-2 flex justify-between">
//               <span>ExpressJs</span><span>90%</span>
//             </div>
//             <div className="w-full h-2 bg-gray-400 rounded-full overflow-hidden mb-7">
//               <div className="w-11/12 h-2 bg-blue-400 rounded-md"></div>
//             </div>
//           </div>

//           <div className="w-2/3">
//             <div className="text-xs text-white mb-2 flex justify-between">
//               <span>Postgres DB</span><span>75%</span>
//             </div>
//             <div className="w-full h-2 bg-gray-400 rounded-full overflow-hidden mb-7">
//               <div className="w-2/3 h-2 bg-blue-400 rounded-md"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

export default SkillSection;
