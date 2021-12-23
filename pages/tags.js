import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="shadow-md dark:shadow-md rounded-xl border border-white border-opacity-10 pt-5 pb-5 pl-10 pr-10 backdrop-filter backdrop-blur-xl bg-white bg-opacity-10 dark:border-dark-card dark:border-opacity-10 dark:bg-dark-card dark:bg-opacity-50 flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="drop-shadow-lg dark:drop-shadow-wt-lg text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-ct dark:to-blue-dimon sm:text-4xl sm:leading-10 md:text-6xl md:leading-snug md:px-6">
            Tags
          </h1>
        </div>
        <div className="shadow-lg dark:shadow-lg rounded-xl border border-white border-opacity-10 p-5 backdrop-filter backdrop-blur-xl bg-white bg-opacity-20 dark:border-dark-card-light dark:border-opacity-10 dark:bg-dark-card-light dark:bg-opacity-10 flex flex-wrap max-w-lg">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                <Tag text={t} />
                <Link
                  href={`/tags/${kebabCase(t)}`}
                  className="-ml-2 text-sm font-semibold text-gray-900 uppercase dark:text-gray-200"
                >
                  {` (${tags[t]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
