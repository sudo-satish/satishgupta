import React from 'react';
import Image from 'next/image';

const skillsIcons = [
  "/img/icons/javascript.svg",
  "/img/icons/nodejs.svg",
  "/img/icons/reactjs.svg",
  "/img/icons/postgresql.svg",
  "/img/icons/android.svg",
  "/img/icons/ios.svg",
  "/img/icons/nginx.svg",
  "/img/icons/firebase.svg",
  "/img/icons/mongodb.svg",
  "/img/icons/docker.svg",
  "/img/icons/angular.svg"
];

export default function Skills() {
  return (
    <section className="bg-gray-600 py-12" data-scroll-index="2" id="skill-section">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
        {
          skillsIcons.map((src, index) => (
            <div className="m-2 mx-3 flex justify-center items-center max-w-2xl bg-gray-200 shadow-xl ring-2 overflow-hidden p-2 rounded-full" key={index}>
              <Image src={src} alt="me" width="30" height="30" />
            </div>
          ))
        }
      </div>
    </section>
  )
}
