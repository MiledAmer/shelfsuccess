import Subscribe from "~/components/Subscribe";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function NewsLetterSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400 sm:text-xl md:mb-12">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <div className="mx-auto  max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
            <Subscribe />
          </div>
          {/* >
            <div className="relative w-full">
                <label className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email address
                </label>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <Input
                  className="block w-full rounded-lg border border-gray-300 bg-white p-3 pl-9 text-sm sm:rounded-none sm:rounded-l-lg"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                />
              </div>
              <div>
                <Button
                  type="submit"
                   className=" rounded-lg sm:rounded-none sm:rounded-r-lg"
                >
                  Subscribe
                </Button>
              </div>
            </div> */}
            <div className="newsletter-form-footer mx-auto max-w-screen-sm text-left text-sm text-gray-500 dark:text-gray-300">
              We care about the protection of your data.{" "}
              <a
                href="#"
                className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          
        </div>
      </div>
    </section>
  );
}
