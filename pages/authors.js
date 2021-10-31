import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getFilesBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFilesBySlug('authors', ['sugam-budhraja', 'gurleen-singh'])
  return { props: { authorDetails } }
}

export default function Authors({ authorDetails }) {

  return (
  <>
    <PageSEO title={`Authors - ${siteMetadata.author}`} description="The blog authors" />
    <h1 className="w-auto inline-block pt-6 py-8 drop-shadow-lg text-3xl font-extrabold leading-9 tracking-tight dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-purple-400 dark:to-blue-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-snug">
      Authors
    </h1>
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
  </>
  )
}