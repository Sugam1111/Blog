import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import Hero from '@/components/Hero'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import kebabCase from '@/lib/utils/kebabCase'
import Image from '@/components/Image'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <div className="">
        <div className="pt-6 pb-6 grid-cols-8 space-y-2 md:space-y-5">
          <h1 className="w-auto inline-block drop-shadow-lg col-span-1 text-3xl font-extrabold leading-9 tracking-tight dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-red-ct dark:to-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-snug">
            Latest Posts
          </h1>
          {/* <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
            {siteMetadata.description}
          </p> */}
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            let { slug, date, title, authors, summary, image, tags } = frontMatter
            if (authors == null) {
              authors = ['sugam-budhraja']
            }
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="rounded-xl p-5 bg-light-card dark:bg-dark-card space-y-2 xl:grid xl:grid-cols-8 xl:space-y-0 ">
                    <dl className="space-y-5 xl:col-span-3">
                      {/* <dt className="sr-only">Published on</dt> */}
                      <dd className="text-base font-medium px-2 text-gray-700 dark:text-gray-300">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                      <div className="flex flex-wrap gap-y-2 xl:grid-cols-2">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </dl>
                    <div className="space-y-5 xl:col-span-4">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-5 tracking-tight text-light-title dark:text-dark-title">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                        </div>
                        <dl className="">
                          <dt className="sr-only">Authors</dt>
                          <dd>
                            <ul className="flex space-x-2">
                              {authors.map((author) => (
                                <Link href={`/authors/${kebabCase(author)}`}>
                                  <li
                                    className="rounded-xl text-xs inline-flex items-center pl-1 pr-2 py-1 text-light-title dark:text-primary hover:bg-light-bg dark:hover:bg-primary dark:hover:text-dark-bg flex items-center space-x-2"
                                    key={author}
                                  >
                                    <Image
                                      src={`/static/avatars/${author}.jpg`}
                                      width="38px"
                                      height="38px"
                                      alt="avatar"
                                      className="w-10 h-10 rounded-lg"
                                    />
                                    <dl className="text-sm font-medium leading-5">
                                      <dt className="sr-only">Name</dt>
                                      <dd className="">
                                        {author
                                          .split('-')
                                          .join(' ')
                                          .replace(/\w\S*/g, function (txt) {
                                            return (
                                              txt.charAt(0).toUpperCase() +
                                              txt.substr(1).toLowerCase()
                                            )
                                          })}
                                      </dd>
                                    </dl>
                                  </li>
                                </Link>
                              ))}
                            </ul>
                          </dd>
                        </dl>
                        <div className="prose max-w-none text-gray-700 dark:text-gray-300">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary hover:text-primary-dark dark:hover:text-primary-dark"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                    <div className="xl:col-span-3">
                      <div className="justify-center py-2 xl:py-0 xl:px-4">
                        <img src={image} alt="..." className="max-w-full h-auto" />
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary hover:text-primary-dark dark:hover:text-primary-dark"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
