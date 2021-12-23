import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <article>
        <div className="shadow-md dark:shadow-lg rounded-xl border border-white border-opacity-10 pt-5 pb-5 pl-10 pr-10 backdrop-filter backdrop-blur-xl bg-white bg-opacity-10 dark:border-dark-card dark:border-opacity-10 dark:bg-dark-card dark:bg-opacity-50">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-700 dark:text-gray-300">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-10 xl:pt-11 xl:border-gray-200 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="shadow-lg dark:shadow-xl rounded-xl border border-white border-opacity-10 p-5 backdrop-filter backdrop-blur-xl bg-white bg-opacity-30 dark:border-dark-card-light dark:border-opacity-10 dark:bg-dark-card-light dark:bg-opacity-10 flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="38px"
                          height="38px"
                          alt="avatar"
                          className="w-10 h-10 rounded-md"
                        />
                      )}
                      <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                          {/* {author.email && (
                            <SocialIcon kind="mail" href={`mailto:${author.email}`} size="5" />
                          )}
                          {author.github && (
                            <SocialIcon kind="github" href={`mailto:${author.github}`} size="5" />
                          )}
                          {author.linkedin && (
                            <SocialIcon kind="linkedin" href={`mailto:${author.linkedin}`} size="5" />
                          )}
                          {author.twitter && (
                            <SocialIcon kind="twitter" href={`mailto:${author.twitter}`} size="5" />
                          )} */}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="xl:mt-10 shadow-lg dark:shadow-xl rounded-xl border border-white border-opacity-10 p-5 backdrop-filter backdrop-blur-xl bg-white bg-opacity-30 dark:border-dark-card-light dark:border-opacity-10 dark:bg-dark-card-light dark:bg-opacity-10 pb-8 prose text-gray-700 dark:prose-dark dark:text-gray-300 max-w-none">
                {children}
              </div>
              <div className="px-5 pt-6 pb-6 space-x-1 text-sm text-gray-700 dark:text-gray-300">
                <Link
                  href={discussUrl(slug)}
                  rel="nofollow"
                  className="hover:text-black dark:hover:text-gray-100"
                >
                  {'Discuss on Twitter'}
                </Link>
                <Link>{` • `}</Link>
                <Link
                  href={editUrl(fileName)}
                  className="hover:text-black dark:hover:text-gray-100"
                >
                  {'View on GitHub'}
                </Link>
              </div>
              <Comments frontMatter={frontMatter} />
            </div>
            <footer>
              <div className="text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2">
                {tags && (
                  <div className="shadow-lg dark:shadow-xl rounded-xl border border-white border-opacity-10 p-5 backdrop-filter backdrop-blur-xl bg-white bg-opacity-30 dark:border-dark-card-light dark:border-opacity-10 dark:bg-dark-card-light dark:bg-opacity-10 ">
                    <h2 className="text-xs tracking-wide text-gray-700 uppercase dark:text-gray-300 mb-1.5">
                      Tags
                    </h2>
                    <div className="flex flex-wrap gap-y-1">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between space-x-4 xl:space-x-0 py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div className="shadow-lg dark:shadow-xl rounded-xl border border-white border-opacity-10 p-5 backdrop-filter backdrop-blur-xl bg-white bg-opacity-30 dark:border-dark-card-light dark:border-opacity-10 dark:bg-dark-card-light dark:bg-opacity-10 ">
                        <h2 className="text-xs tracking-wide text-gray-700 uppercase dark:text-gray-300">
                          Previous Article
                        </h2>
                        <div className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div className="shadow-lg dark:shadow-xl rounded-xl border border-white border-opacity-10 p-5 backdrop-filter backdrop-blur-xl bg-white bg-opacity-30 dark:border-dark-card-light dark:border-opacity-10 dark:bg-dark-card-light dark:bg-opacity-10 ">
                        <h2 className="text-xs tracking-wide text-gray-700 uppercase dark:text-gray-300">
                          Next Article
                        </h2>
                        <div className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
