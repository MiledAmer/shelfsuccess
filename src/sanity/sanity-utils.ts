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
        description,
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

export async function getRelatedPosts(
  categoryIds: string[],
  currentPostId: string,
): Promise<Partial<Post>[]> {
  return await client.fetch(
    groq`*[_type == "post" && _id != $currentPostId && count(categories[@._ref in $categoryIds]) > 0] | order(_createdAt desc)[0...3]{
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      publishedAt
    }`,
    { categoryIds, currentPostId },
  );
}

export async function getLatestPosts(limit = 3): Promise<Partial<Post>[]> {
  return await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      publishedAt
    }`,
    { limit },
  );
}

const builder: ImageUrlBuilder = imageUrlBuilder(client);

export function urlFor(source: any): ImageUrlBuilder {
  return imageUrlBuilder(client).image(source);
}

export interface ImageValue {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}
