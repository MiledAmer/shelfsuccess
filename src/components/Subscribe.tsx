"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";
import { subscribeToNewsletter } from "~/server/subscribe-to-newsletter.server";
import { toast } from "sonner";

const PUBLICATION_ID = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID;

const Subscribe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    const email = formData.get("email");
    try {
      const response = await subscribeToNewsletter(email as string);
      console.log(response);
      if (response.ok) {
        toast.success("You have been subscribed to the newsletter");
      } else {
        toast.error("Failed to subscribe");
      }
    } catch (error) {
      toast.error("Failed to subscribe");
      console.error(error);
    }
    setIsSubmitting(false);
  };
  return (
    <form action={handleSubmit} className="">
      <div className="mb-3 flex items-center">
        <div className="relative mr-3 w-auto">
          <label
            htmlFor="email"
            className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email address
          </label>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
          <Input
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 md:w-96"
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <Button variant="outline" className="bg-primary text-white">
            {isSubmitting ? "Submitting..." : "Try for free"}
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
  );
};

export default Subscribe;
