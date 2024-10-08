import { format } from "date-fns";
import { type Post } from "types/Post";

export default function ArticleCard({ post }: { post: Partial<Post> }) {
  console.log(post);
  return (
    <article className="w-full">
      <a href="#">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
          className="mb-5 rounded-lg"
          alt="Image 1"
        />
      </a>
      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
        <a href={`/blog/${post.slug}`}>{post.title}</a>
      </h2>
      <p className="mb-4 text-gray-500 dark:text-gray-400">
       {post.description}
      </p>
      <a
        href={`/blog/${post.slug}`}
        className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium underline underline-offset-4 hover:no-underline"
      >
        Read in 2 minutes
      </a>
    </article>
  );
}
