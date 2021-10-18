import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children }) {
  return (
    <>
      <PageSEO title={`About - ${siteMetadata.author}`} description={`About me - ${siteMetadata.author}`} />
      <div className="shadow-md dark:shadow-wt-md rounded-xl border border-white border-opacity-10 pt-5 pb-10 pl-10 pr-10 backdrop-filter backdrop-blur-xl bg-white bg-opacity-10 dark:border-gray-900 dark:border-opacity-10 dark:bg-gray-900 dark:bg-opacity-10 ">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="drop-shadow-lg dark:drop-shadow-wt-lg text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
          <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
            {siteMetadata.summary}
          </p>
          <h1 className="pt-6 drop-shadow-lg dark:drop-shadow-wt-lg text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Authors
          </h1>
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}
