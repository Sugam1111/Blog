import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children }) {
  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
      />
      <div className="shadow-md dark:shadow-lg rounded-xl border border-white border-opacity-10 pt-5 pb-10 pl-10 pr-10 backdrop-filter backdrop-blur-xl bg-white bg-opacity-10 dark:border-dark-card dark:border-opacity-10 dark:bg-dark-card dark:bg-opacity-50 ">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="inline-block drop-shadow-lg text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-purple-ct dark:to-fuchsia-500 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
          <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
            {siteMetadata.summary}
          </p>
          <h1 className="inline-block pt-6 drop-shadow-lg text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-yellow-dimon dark:to-orange-dimon sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Authors
          </h1>
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}
