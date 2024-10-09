import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import HomeIllustration from "./HomeIllustration";
import { CheckCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-12 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7 xl:col-span-8">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Helping you achieve success and tick more boxes
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Here at flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <form action="#" className="">
            <div className="mb-3 flex items-center">
              <div className="relative mr-3 w-auto">
                <label
                  htmlFor="member_email"
                  className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <Input
                  className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 md:w-96"
                  placeholder="Enter your email"
                  type="email"
                  name="member[email]"
                  id="member_email"
                />
              </div>
              <div>
                <Button variant="outline" className="bg-primary text-white">
                  Try for free
                </Button>
              </div>
            </div>
            <div className="text-left text-sm text-gray-500 dark:text-gray-300">
              Instant signup. No credit card required.{" "}
              <a
                href="#"
                className="text-primary-600 dark:text-primary-500 hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="text-primary-600 dark:text-primary-500 hover:underline"
                href="#"
              >
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
        <HomeIllustration />
      </div>
    </section>
  );
};

export default Hero;
