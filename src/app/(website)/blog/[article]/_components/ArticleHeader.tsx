export default function ArticleHeader() {
  return (
    <header className="relative h-[460px] w-full bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/background.png')] bg-cover bg-center bg-no-repeat bg-blend-darken xl:h-[537px]">
      <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50"></div>
      <div className="absolute left-1/2 top-20 mx-auto w-full max-w-screen-xl -translate-x-1/2 px-4 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
        <span className="mb-4 block text-gray-300">
          Published in{" "}
          <a href="#" className="font-semibold text-white hover:underline">
            World News
          </a>
        </span>
        <h1 className="mb-4 max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl">
          Flowbite Blocks Tutorial - Learn how to get started with custom
          sections using the Flowbite Blocks
        </h1>
        <p className="text-lg font-normal text-gray-300">
          Before going digital, you might scribbling down some ideas in a
          sketchbook.
        </p>
      </div>
    </header>
  );
}
