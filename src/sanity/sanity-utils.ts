import { groq } from "next-sanity";
import { Post } from "types/Post";
import { client } from "~/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "sanity";

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



const builder: ImageUrlBuilder = imageUrlBuilder(client);

export function urlFor(source: any): ImageUrlBuilder{
  return imageUrlBuilder(client).image(source);
}

export interface ImageValue {
  asset: {
    _ref: string; 
    _type: string;
  };
  alt?: string;
}

