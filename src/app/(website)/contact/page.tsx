/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { EnvelopeIcon } from "@sanity/icons";
import { BuildingIcon, PhoneIcon } from "lucide-react";

export default function Example() {
  return (
    <div className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
           
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              For any questions or concerns, please reach out to us using the contact information below.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-700">
             
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-600" />
                </dt>
                <dd>
                  <a href="tel:+21697531730" className="hover:text-gray-900">
                    +216 97 531 730
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-600" />
                </dt>
                <dd>
                  <a href="mailto:soumaya@shelfsuccess.net" className="hover:text-gray-900">
                    soumaya@shelfsuccess.net
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        
      </div>
    </div>
  )
}
