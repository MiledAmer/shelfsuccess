export default function ArticleSideBar() {
  return (
    <aside className="hidden xl:block" aria-labelledby="sidebar-label">
      <div className="sticky top-6 xl:w-[336px]">
        <h3 id="sidebar-label" className="sr-only">
          Sidebar
        </h3>
        <div className="mb-8">
          <h4 className="mb-2 text-sm font-bold uppercase text-gray-900 dark:text-white">
            Flowbite News morning headlines
          </h4>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            Get all the stories you need-to-know from the most powerful name in
            news delivered first thing every morning to your inbox
          </p>
          <button
            type="button"
            data-modal-target="newsletter-modal"
            data-modal-toggle="newsletter-modal"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mb-2 mr-2 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
          >
            Subscribe
          </button>
        </div>
        <div className="mb-12">
          <h4 className="mb-4 text-sm font-bold uppercase text-gray-900 dark:text-white">
            Latest news
          </h4>
          <div className="mb-6 flex items-center">
            <a href="#" className="shrink-0">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                className="mr-4 h-24 w-24 max-w-full rounded-lg"
                alt="Image 1"
              />
            </a>
            <div>
              <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                Our first office
              </h5>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone changes.
              </p>
              <a
                href="#"
                className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium underline underline-offset-4 hover:no-underline"
              >
                Read in 9 minutes
              </a>
            </div>
          </div>
          <div className="mb-6 flex items-center">
            <a href="#" className="shrink-0">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                className="mr-4 h-24 w-24 max-w-full rounded-lg"
                alt="Image 2"
              />
            </a>
            <div>
              <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                Enterprise Design tips
              </h5>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone changes.
              </p>
              <a
                href="#"
                className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium underline underline-offset-4 hover:no-underline"
              >
                Read in 14 minutes
              </a>
            </div>
          </div>
          <div className="mb-6 flex items-center">
            <a href="#" className="shrink-0">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png"
                className="mr-4 h-24 w-24 max-w-full rounded-lg"
                alt="Image 3"
              />
            </a>
            <div>
              <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                Partnered up with Google
              </h5>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone changes.
              </p>
              <a
                href="#"
                className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium underline underline-offset-4 hover:no-underline"
              >
                Read in 9 minutes
              </a>
            </div>
          </div>
        </div>
        <div>
          <a
            href="#"
            className="mb-3 flex h-48 w-full items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              className="h-8 w-8 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            Students and Teachers, save up to 60% on Flowbite Creative Cloud.
          </p>
          <p className="text-xs uppercase text-gray-400 dark:text-gray-500">
            Ads placeholder
          </p>
        </div>
      </div>
    </aside>
  );
}
