import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children }) {
  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
      />
      <div className="">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="w-auto inline-block drop-shadow-lg dark:drop-shadow-wt-lg text-3xl font-extrabold leading-9 tracking-tight dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-primary dark:to-red-ct sm:text-4xl sm:leading-10 md:text-6xl md:leading-snug">
            About
          </h1>
          <p className="text-lg leading-7 text-gray-900 dark:text-gray-100">
            {siteMetadata.summary}
          </p>
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}
