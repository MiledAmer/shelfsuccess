import { createClient, groq } from "next-sanity";
import {apiVersion, dataset, projectId} from '~/sanity/env'
import { Post } from "types/Post";



export async function getPostsWithoutDetails():Promise<Partial<Post>> {
  const client = createClient({
    projectId,
    apiVersion,
    dataset,
  });

  return await client.fetch(
    groq`*[_type =="post"]{
        _id, 
        _createdAt, 
        title,
        "slug": slug.current,
        "mainImage": mainImage.asset->url
    }`
  )
}
