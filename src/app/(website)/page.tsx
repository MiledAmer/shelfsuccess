import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { getCategories, getPostsWithoutDetails } from '~/sanity/sanity-utils'
import { Post } from 'types/Post'
import { Category } from 'types/Category'
import Hero from '~/components/home/Hero'
import TabsContainer from '~/components/home/TabsContainer'

export const metadata = {
  title: "Shelf Success | Where Success Meets Shelf",
  description: "Shelf Success is a blog about success and how to achieve it."
}

export default async function ResponsiveBlogCards({ searchParams}: { searchParams: {category: string}}) {
  const category = searchParams.category || ""
  const posts = await getPostsWithoutDetails(category) as Post[];
  const categories = await getCategories() 

  
  return (
    <div className="container mx-auto ">
      <Hero />
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Latest Blog Posts</h2>
      <TabsContainer posts={posts} categories={categories} currentCategory={category}  />
    </div>
  )
}