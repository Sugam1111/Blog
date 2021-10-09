import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="shadow-md dark:shadow-wt-md rounded-xl border border-white border-opacity-10 pt-5 pb-5 pl-10 pr-10 backdrop-filter backdrop-blur-xl bg-white bg-opacity-10 dark:border-gray-900 dark:border-opacity-10 dark:bg-gray-900 dark:bg-opacity-10 ">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className=" drop-shadow-lg dark:drop-shadow-wt-lg text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            let { slug, date, title, authors, summary, image, tags } = frontMatter
            if (authors == null){
              authors = ['sugam-budhraja']
            }
            return (
              <li key={slug} className="py-5">
                <article>
                  <div className="shadow-lg rounded-xl border border-white border-opacity-10 p-5 backdrop-filter backdrop-blur-xl bg-white bg-opacity-30 dark:border-gray-600 dark:border-opacity-10 dark:bg-gray-600 dark:bg-opacity-30 space-y-2 xl:grid xl:grid-cols-8 xl:space-y-0 ">
                    <dl className="space-y-5 xl:col-span-3">
                      {/* <dt className="sr-only">Published on</dt> */}
                      <dd className="text-base font-medium px-2 text-gray-700 dark:text-gray-300">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                      <div className="justify-center">
                        <img src={image} alt="..." className="w-full xl:w-4/5 h-auto rounded-md border border-white border-opacity-10 dark:border-gray-600 dark:border-opacity-10" />
                      </div>
                    </dl>
                    <div className="space-y-5 xl:col-span-5">
                      <div className="space-y-6">
                        <div className="flex flex-wrap gap-y-1">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold leading-5 tracking-tight drop-shadow-lg">
                            <Link
                              href={`/blog/${slug}`}
                              className=""
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
                                <li className="shadow rounded-full text-xs inline-flex items-center pl-1 pr-2 py-0.5 bg-white bg-opacity-30 border border-white border-opacity-10 text-primary-600 hover:text-primary-800 hover:bg-opacity-50 dark:text-secondary-400 dark:border-gray-700 dark:border-opacity-5 dark:bg-gray-100 dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:hover:text-secondary-300 flex items-center space-x-2" key={author}>
                                  <Image
                                    src={`/static/avatars/${author}.jpg`}
                                    width="38px"
                                    height="38px"
                                    alt="avatar"
                                    className="w-10 h-10 rounded-full"
                                  />
                                  <dl className="text-sm font-medium leading-5">
                                    <dt className="sr-only">Name</dt>
                                    <dd className="">{author.split('-').join(" ").replace(
                                      /\w\S*/g,
                                      function(txt) {
                                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                                      }
                                    )}</dd>
                                  </dl>
                                </li>
                              ))}
                            </ul>
                          </dd>
                        </dl>
                        <div className="prose max-w-none text-gray-700 dark:text-gray-300">
                          {summary}
                        </div>
                      </div>
                      {/* <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div> */}
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
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
