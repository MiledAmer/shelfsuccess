import Link from "next/link";
import ArticleHeader from "./_components/ArticleHeader";
import ArticleContent from "./_components/ArticleContent";
import ArticleSideBar from "./_components/ArticleSideBar";
import RelatedArticles from "./_components/RelatedArticles";
import NewsLetterSection from "./_components/NewsLetterSection";

export default function HomePage() {
  return (
    <>
      <main className="bg-white pb-16 antialiased lg:pb-24 dark:bg-gray-900">
        <ArticleHeader />
        <div className="relative z-20 -m-36 mx-4 flex max-w-screen-xl justify-between rounded bg-white p-6 xl:-m-32 xl:mx-auto xl:p-9 dark:bg-gray-800">
          <ArticleContent />
          <ArticleSideBar />
        </div>
      </main>

      <RelatedArticles />

      <NewsLetterSection />
    </>
  );
}
