import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import kebabCase from '@/lib/utils/kebabCase'
import Hero from '@/components/Hero'

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
      <div className="shadow-md dark:shadow-lg rounded-xl border border-white border-opacity-10 py-4 md:py-5 px-4 md:px-10 backdrop-filter backdrop-blur-xl bg-white bg-opacity-10 dark:border-dark-card dark:border-opacity-10 dark:bg-dark-card dark:bg-opacity-50 ">
        <div className="pt-2 pb-3 sm:pt-6 sm:pb-8 space-y-3 md:space-y-5">
          <h1 className="inline-block drop-shadow-lg text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-yellow-500 dark:to-primary-ct">
            Latest Posts
          </h1>
          {/* <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
            {siteMetadata.description}
          </p> */}
        </div>
        <ul className="">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            let { slug, date, title, authors, summary, image, tags } = frontMatter
            if (authors == null) {
              authors = ['sugam-budhraja']
            }
            return (
              <li key={slug} className="py-5">
                <article>
                  <Link href={`/blog/${slug}`} className="" aria-label={`Read "${title}"`}>
                    <div className="shadow-lg dark:shadow-xl rounded-xl p-3 md:p-5 border border-white border-opacity-10 backdrop-filter backdrop-blur-xl bg-white bg-opacity-30 dark:border-gray-600 dark:border-opacity-10 dark:bg-dark-card-light dark:bg-opacity-10 space-y-2 xl:grid xl:grid-cols-8 xl:space-y-0 px-4 pt-3 pb-4 sm:p-0">
                      <dl className="space-y-3 md:space-y-5 xl:col-span-3">
                        {/* <dt className="sr-only">Published on</dt> */}
                        <dd className="text-xsm sm:text-sm md:text-base font-medium px-1 sm:px-2 text-gray-700 dark:text-gray-300">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                        <div className="content-center">
                          <img
                            src={image}
                            alt="..."
                            className="w-full xl:w-4/5 h-auto rounded-md border border-white border-opacity-10 dark:border-gray-600 dark:border-opacity-10"
                          />
                        </div>
                      </dl>
                      <div className="space-y-3 md:space-y-5 xl:col-span-5">
                        <div className="flex flex-wrap gap-y-1">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                        <div>
                          <h2 className="drop-shadow-md text-gray-800 dark:text-gray-100 text-xl sm:text-2xl font-bold leading-5 tracking-tight">
                            {title}
                          </h2>
                        </div>
                        <dl className="">
                          <dt className="sr-only">Authors</dt>
                          <dd>
                            <ul className="inline-flex sm:flex space-x-2">
                              {authors.map((author) => (
                                <Link href={`/authors/${kebabCase(author)}`} >
                                  <li className="shadow dark:shadow-md rounded-full text-xs items-center pl-0.5 pr-1 sm:pl-1 sm:pr-2 py-0.5 bg-white bg-opacity-30 border border-white border-opacity-10 text-primary-600 hover:text-primary-800 hover:bg-opacity-50 dark:text-primary-400 dark:border-dark-card-light dark:border-opacity-5 dark:bg-dark-card-light dark:bg-opacity-20 dark:hover:bg-opacity-25 dark:hover:text-primary-300 flex items-center space-x-1 sm:space-x-2" key={author}>
                                    <img
                                      src={`/static/avatars/${author}.jpg`}
                                      alt="avatar"
                                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                                    />
                                    <dl className="text-xsm sm:text-sm font-medium leading-5">
                                      <dt className="sr-only">Name</dt>
                                      <dd className="">{author.split('-').join(" ").replace(
                                        /\w\S*/g,
                                        function(txt) {
                                          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                                        }
                                      )}
                                      </dd>
                                    </dl>
                                  </li>
                                </Link>
                              ))}
                            </ul>
                          </dd>
                        </dl>
                        <div className="prose-p text-sm sm:prose sm:text max-w-none text-gray-700 dark:text-gray-300">
                          {summary}
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end drop-shadow-sm pt-6 px-2 text-base lg:text-md leading-6">
          <Link
            href="/blog"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
