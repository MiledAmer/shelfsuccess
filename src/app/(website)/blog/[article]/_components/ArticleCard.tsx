import { format } from "date-fns";
import { Post } from "types/Post";

export default function ArticleCard({ post }: { post: Partial<Post> }) {
  return (
    <article className="flex flex-col xl:flex-row">
      <a href="#" className="mb-2 xl:mb-0">
        <img src={post.mainImage} className="mr-5 max-w-sm" alt="Image 1" />
      </a>
      <div className="flex flex-col justify-center">
        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
          <a href="#">{post.title}</a>
        </h2>
        <p className="mb-4 max-w-sm text-gray-500 dark:text-gray-400">
          published at: <br />
          {format(post.publishedAt as string, "MMMM dd, yyyy")}
        </p>
        <a
          href="#"
          className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium underline underline-offset-4 hover:no-underline"
        >
          Read in 2 minutes
        </a>
      </div>
    </article>
  );
}
