import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { getPostsWithoutDetails } from '~/sanity/sanity-utils'
import { postType } from '~/sanity/schemaTypes/postType'
import { Post } from 'types/Post'

export default async function ResponsiveBlogCards() {
  const posts = await getPostsWithoutDetails() as Post[];
  // console.log(posts);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Latest Blog Posts</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Post) => (
          <Card key={post._id} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="relative w-full pt-[56.25%]">
                <Image
                  src={post.mainImage as string}
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
                <Link href={`/blog/${post.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}