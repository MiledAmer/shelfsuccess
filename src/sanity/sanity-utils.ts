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

export async function getPost(slug: string): Promise<Post> {
  return await client.fetch(
    groq`*[_type =="post"  && slug.current == $slug][0]{
      _id, 
      _createdAt, 
      title,
      "author": {
        "name": author->name, 
        "image": author->image.asset->url
      },
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      categories[]->{_id, title},
      publishedAt,
      body
    }`,
    { slug },
  );
}
