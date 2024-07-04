"use client";

import QuizSettings from "@/components/quiz-settings";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative bg-white p-3 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-lg">
      <div className="absolute top-0 left-0 p-2">
        <div
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Link
            role="button"
            href="https://sohel-datta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://media.licdn.com/dms/image/D4E03AQFHPk7bC9ZC5Q/profile-displayphoto-shrink_200_200/0/1692881348340?e=2147483647&v=beta&t=h7VOH_d_jnS5ICwAARY9iAylcrHWKMHEgaNfEij7q8g"
              alt="circular-image"
              width={50}
              height={50}
              className="rounded-full ml-4"
            />
          </Link>
          {hovered && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-200 text-gray-900 p-2 rounded z-50 whitespace-nowrap">
              Sohel Datta (MEET THE DEVELOPER)
            </div>
          )}
        </div>
      </div>
      <h1 className="text-2xl lg:text-4xl font-extrabold text-primary tracking-wider uppercase text-center py-2">
        Welcome to <strong className="text-red-500 font-black">Quiz Me</strong>{" "}
        by SOHEL
      </h1>

      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:px-6 py-3 gap-4">
        <div className="relative h-full">
          <Image
            src="/hero.webp"
            alt="hero-image"
            priority
            width={450}
            height={450}
            className="object-cover object-center"
          />
        </div>
        <QuizSettings />
      </div>
    </div>
  );
};

export default Home;
