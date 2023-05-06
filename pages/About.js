import React from "react";
import image from "../public/1.gif";
import image2 from "../public/a.jpg";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div className=" overflow-auto h-screen max-h-full bg-[#040720] text-white pt-[100px] ">
      <div className="pl-5">
        <h1 className="text-4xl font-bold pl-5">Hey 👋 I m Noah</h1>
        <p className="pt-5 p-5 mix-w-[400px] text-xl text-gray-200">
          Hi there my name is Noah and I m a self-taught software engineer. I am
          a simple creative, enthusiastic and fun-loving person. I always like
          to create something on my own which is helpful for others. I
          specialize in a variety of programming languages, including HTML5 CSS3
          Javascript React and Node js. I have already completed many projects
          of different buyer throughout the world.
        </p>
      </div>
      <div className="pl-5 pt-10">
        <h1 className="text-3xl font-extrabold pl-5">Development Experience</h1>
        <div className="pl-5 pt-5">
          <h1 className="text-2xl font-bold ">Mobile</h1>
          <p className="pt-5 text-xl pr-5">
            I currently have published some apps on different platforms.I ve
            also developed several other smaller apps to give real examples.
          </p>
        </div>
        <div className="pl-5 pt-5">
          <h1 className="text-2xl font-bold ">Web</h1>
          <p className="pt-5 text-xl pr-5">
            I currently have two active websites and a few landing pages created
            for my apps.
          </p>
          <div className="pl-10 bg-[#525f72b7] pt-5 rounded-xl  mt-10 mr-5 h-[240px]">
            <div className="pt-5 p-5 mix-w-[400px] text-xl text-gray-200">
              <Image src={image} width={50} height={50} alt="" />
            </div>
            <h1 className="text-xl font-extrabold">እሳት Tech</h1>
            <p className="text-gray-300 w-[250px]">
              Digital studio that specializes in creating websites and mobile
              applications.
            </p>
            <a href="https://esat-tech.com" target="_blank">
              <h1 className=" text-xl text-blue-500 font-bold">View</h1>
            </a>
          </div>
          <div className="pl-10 bg-[#525f72b7] pt-5 rounded-xl  mt-10 mr-5 h-[240px]">
            <div className="pt-5 p-5 mix-w-[400px] text-xl text-gray-200">
              <Image src={image2} width={50} height={50} alt="" />
            </div>
            <h1 className="text-xl font-extrabold">Portfolio</h1>
            <p className="text-gray-300 w-[250px]">
              My personal portfolio with all projects i have built.
            </p>
            <a href="https://noah-beta.vercel.app" target="_blank">
              <h1 className=" text-xl text-blue-500 font-bold">View</h1>
            </a>
          </div>
          <a
            href="https://github.com/noahsploiter"
            target="_blank"
            className=""
          >
            <h1 className="mt-8 text-xl text-blue-500 font-bold">Gihub</h1>
          </a>
        </div>
        <div className="mt-10"></div>
      </div>
    </div>
  );
}

export default About;
