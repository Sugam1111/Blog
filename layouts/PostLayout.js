import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import kebabCase from '@/lib/utils/kebabCase'
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
        <div className="">
          <header className="pt-6 xl:pb-2">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
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
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-6 xl:col-span-4 xl:pt-11 xl:border-gray-200 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-2">
                  {authorDetails.map((author) => (
                    <Link href={`/authors/${kebabCase(author)}`}>
                      <li
                        className="rounded-xl text-xs inline-flex items-center pl-1 pr-2 py-1 text-light-title dark:text-primary hover:bg-light-bg dark:hover:bg-primary dark:hover:text-dark-bg flex items-center space-x-2"
                        key={author}
                      >
                        <Image
                          src={author.avatar}
                          width="38px"
                          height="38px"
                          alt="avatar"
                          className="w-10 h-10 rounded-lg"
                        />
                        <dl className="text-sm font-medium leading-5">
                          <dt className="sr-only">Name</dt>
                          <dd className="">{author.name}</dd>
                          <dt className="sr-only">Twitter</dt>
                          <dd>
                            {author.twitter && (
                              <Link
                                href={author.twitter}
                                className="text-primary hover:text-primary-dark dark:text-secondary dark:hover:text-secondary-hover"
                              >
                                {author.twitter.replace('https://twitter.com/', '@')}
                              </Link>
                            )}
                          </dd>
                        </dl>
                      </li>
                    </Link>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="xl:pb-0 xl:col-span-4 xl:row-span-2">
              <div className="xl:mt-10 rounded-xl p-5 xl:p-8 bg-light-card dark:bg-dark-card pb-8 prose text-gray-700 dark:prose-dark dark:text-gray-300 max-w-none">
                {children}
              </div>
              <div className="px-5 xl:px-8 pt-6 pb-6 space-x-1 text-sm text-gray-700 dark:text-gray-300">
                <Link
                  href={discussUrl(slug)}
                  rel="nofollow"
                  className="hover:text-black dark:hover:text-gray-100"
                >
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div>
              <Comments frontMatter={frontMatter} />
            </div>
            <footer className="xl:col-span-4">
              <div className="text-sm font-medium">
                {tags && (
                  <div className="rounded-xl p-5 bg-light-card dark:bg-dark-card">
                    <h2 className="text-xs tracking-wide text-gray-700 uppercase dark:text-gray-300 mb-1.5">
                      Tags
                    </h2>
                    <div className="flex flex-wrap gap-y-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between space-x-4 xl:space-x-5 py-4">
                    {prev && (
                      <div className="rounded-xl p-5 bg-light-card dark:bg-dark-card">
                        <h2 className="text-xs tracking-wide text-gray-700 uppercase dark:text-gray-300">
                          Previous Article
                        </h2>
                        <div className="text-primary hover:text-primary-dark dark:text-secondary-400 dark:hover:text-secondary-300">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div className="rounded-xl p-5 bg-light-card dark:bg-dark-card">
                        <h2 className="text-xs tracking-wide text-gray-700 uppercase dark:text-gray-300">
                          Next Article
                        </h2>
                        <div className="text-primary hover:text-primary-dark dark:text-secondary-400 dark:hover:text-secondary-300">
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
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
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
