import { groq } from "next-sanity";
import { Post } from "types/Post";
import { client } from "~/lib/sanity";

export async function getPostsWithoutDetails(): Promise<Partial<Post>[]> {
  return await client.fetch(
    groq`*[_type =="post"]{
        _id, 
        _createdAt, 
        title,
        "slug": slug.current,
        "mainImage": mainImage.asset->url
    }`,
  );
}
