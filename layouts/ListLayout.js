import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import kebabCase from '@/lib/utils/kebabCase'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="w-auto inline-block drop-shadow-lg text-3xl font-extrabold leading-9 tracking-tight dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-red-ct dark:to-orange-ct sm:text-4xl sm:leading-10 md:text-6xl md:leading-snug">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-light-title focus:border-light-title dark:bg-gray-900 dark:text-gray-100 dark:focus:ring-red-ct dark:focus:border-orange-ct"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            let { slug, date, title, authors, summary, tags, image } = frontMatter
            authors = authors || ['sugam-budhraja']
            return (
              <li key={slug} className="py-4">
                <article>
                  <div className="rounded-xl p-5 bg-light-card dark:bg-dark-card space-y-2 xl:grid xl:grid-cols-8 xl:space-y-0 ">
                    <dl className="space-y-5 xl:col-span-3">
                      {/* <dt className="sr-only">Published on</dt> */}
                      <dd className="text-base font-medium px-2 text-gray-700 dark:text-gray-300">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                      <div className="justify-center">
                        <img
                          src={image}
                          alt="..."
                          className="w-full xl:w-4/5 h-auto rounded-md border border-white border-opacity-10 dark:border-gray-600 dark:border-opacity-10"
                        />
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
                          <h2 className="text-2xl font-bold leading-5 tracking-tight text-light-title dark:text-dark-title">
                            <Link href={`/blog/${slug}`} className="">
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
                                    className="rounded-xl text-xs inline-flex items-center pl-1 pr-2 py-1 text-light-title dark:text-primary transition delay-100 hover:bg-light-hover dark:hover:bg-primary dark:hover:text-dark-bg flex items-center space-x-2"
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
                      {/* <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary hover:text-primary-dark dark:hover:text-primary-dark"
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
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
