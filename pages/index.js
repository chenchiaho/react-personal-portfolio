import Head from "next/head";

import {
  BsFillMoonStarsFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { useState } from "react";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Kevin La Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section >
          <nav className="pt-10 pb-5 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl whitespace-nowrap">Personal Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li >
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 whitespace-nowrap"
                  href="https://www.cakeresume.com/kevinla"
                >
                  中文履歷
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Kevin La
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Frontend Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am a frontend developer with expertise in HTML, CSS, and JavaScript. I bring a strong foundation in web development and a passion for creating user-friendly, interactive websites and applications to every project.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              
              
              <a href="https://github.com/chenchiaho">
                <BsGithub />
              </a>
              
              <a href="https://www.linkedin.com/in/chenchiaho">
                <BsLinkedin />
              </a>
              <a href="chenchiaho@gmail.com">
                <TfiEmail />
              </a>
            </div>

          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Template
              <span className="text-teal-500"> Template </span>

            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Template
              <span className="text-teal-500"> Template </span>

            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt='' />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Quick Currency App
              </h3>
              <p className="py-2">
                Quick Currency App Description
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt='' />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Three Kindoms Chess
              </h3>
              <p className="py-2">
                Three Kindoms Chess Description
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt='' />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Template</h3>
              <p className="py-2">
                Template
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
