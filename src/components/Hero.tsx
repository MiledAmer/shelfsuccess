import Image from 'next/image'

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 relative">
        <Image
          src="/heroImage.png?height=800&width=600"
          alt="Person sitting on a couch"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="md:w-1/2 bg-white p-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-serif mb-8">Oh hey there.</h1>
        <div className="mb-6">
          <Image
            src="/avatar.png?height=100&width=100"
            alt="Profile picture"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <p className="text-gray-600 max-w-md">
          I&apos;m Jane Doe, a writer who helps other writers find the best way and place to share their story.
        </p>
      </div>
    </div>
  )
}