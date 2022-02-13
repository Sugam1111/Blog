import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

// export async function getStaticProps() {
//     const authorDetails = await getFilesBySlug('authors', ['sugam-budhraja', 'gurleen-singh'])
//     return { props: { authorDetails } }
// }

export default function Authors({ }) {
  return (
    <>
      <PageSEO title={`Authors - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="shadow-md dark:shadow-wt-md rounded-xl border border-white border-opacity-10 pt-5 pb-5 pl-10 pr-10 backdrop-filter backdrop-blur-xl bg-white bg-opacity-10 dark:border-gray-900 dark:border-opacity-10 dark:bg-gray-900 dark:bg-opacity-10 flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="drop-shadow-lg text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-purple-400 dark:to-blue-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:px-6">
            Authors
          </h1>
        </div>
        {/* <div className="shadow-lg rounded-xl border border-white border-opacity-10 p-5 backdrop-filter backdrop-blur-xl bg-white bg-opacity-20 dark:border-gray-600 dark:border-opacity-10 dark:bg-gray-600 dark:bg-opacity-30 flex flex-wrap max-w-lg">
        <ul className="space-y-8">
            {authorDetails.map((author) => { 
                return (
                <li>
                    <MDXLayoutRenderer
                    layout={author.frontMatter.layout || DEFAULT_LAYOUT}
                    mdxSource={author.mdxSource}
                    frontMatter={author.frontMatter}
                    />
                </li>
                )
            })}
            </ul>
        </div> */}
      </div>
    </>
  )
}