import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"

const blogPosts = [
  { id: 1, title: "Getting Started with Next.js", image: "/placeholder.svg?height=200&width=300" },
  { id: 2, title: "The Power of Server-Side Rendering", image: "/placeholder.svg?height=200&width=300" },
  { id: 3, title: "Mastering Tailwind CSS", image: "/placeholder.svg?height=200&width=300" },
  { id: 4, title: "Building Accessible Web Applications", image: "/placeholder.svg?height=200&width=300" },
  { id: 5, title: "Advanced React Patterns", image: "/placeholder.svg?height=200&width=300" },
  { id: 6, title: "Optimizing Next.js Performance", image: "/placeholder.svg?height=200&width=300" },
]

export default function ResponsiveBlogCards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Latest Blog Posts</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="relative w-full pt-[56.25%]">
                <Image
                  src={post.image}
                  alt={`Cover image for ${post.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <CardTitle className="text-lg sm:text-xl mb-2 line-clamp-2">{post.title}</CardTitle>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button asChild className="w-full">
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}