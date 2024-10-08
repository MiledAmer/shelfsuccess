import Link from "next/link";
import ArticleHeader from "./_components/ArticleHeader";
import ArticleContent from "./_components/ArticleContent";
import ArticleSideBar from "./_components/ArticleSideBar";
import RelatedArticles from "./_components/RelatedArticles";
import NewsLetterSection from "./_components/NewsLetterSection";
import { getPost } from "~/sanity/sanity-utils";

type propType = {
  article: string;
};

export default async function HomePage({ params }: { params: propType }) {
  const slug = params.article;
  const data = await getPost(slug);
  return (
    <>
      <main className="bg-white pb-16 antialiased dark:bg-gray-900 lg:pb-24">
        <ArticleHeader />
        <div className="relative z-20 -m-36 mx-4 flex max-w-screen-xl justify-between rounded bg-white p-6 dark:bg-gray-800 xl:-m-32 xl:mx-auto xl:p-9">
          <ArticleContent data={data} />
          <ArticleSideBar />
        </div>
      </main>

      <RelatedArticles />

      <NewsLetterSection />
    </>
  );
}
