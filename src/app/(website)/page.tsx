import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { getPostsWithoutDetails } from '~/sanity/sanity-utils'
import { Post } from 'types/Post'
import Hero from '~/components/home/hero'
import ArticleCard from './blog/[article]/_components/ArticleCard'

export default async function ResponsiveBlogCards() {
  const posts = await getPostsWithoutDetails() as Post[];
  // console.log(posts);
  
  return (
    <div className="container mx-auto ">
      <Hero />
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Latest Blog Posts</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post: Post) => (
          <ArticleCard post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}