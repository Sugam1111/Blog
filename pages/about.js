import { MDXLayoutRenderer } from '@/components/MDXComponents'
import AboutLayout from '@/layouts/AboutLayout'
import { getFilesBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFilesBySlug('authors', ['sugam-budhraja', 'gurleen-singh'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {

  return (
    <AboutLayout>
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
    </AboutLayout>
    // <AuthorLayout authorDetails={authorDetails} />
  )
}
