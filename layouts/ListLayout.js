import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
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
      <div className="shadow-md dark:shadow-md rounded-xl border border-white border-opacity-10 pt-5 pb-5 pl-10 pr-10 backdrop-filter backdrop-blur-xl bg-white bg-opacity-10 dark:border-dark-card dark:border-opacity-10 dark:bg-dark-card dark:bg-opacity-50">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="inline-block drop-shadow-lg text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-red-ct dark:to-orange-ct sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-900 dark:text-gray-100 dark:focus:ring-red-ct dark:focus:border-orange-ct"
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
            const { slug, date, title, summary, tags, image } = frontMatter
            return (
              <li key={slug} className="py-4">
                <article className="shadow-lg rounded-xl border border-white border-opacity-10 p-5 backdrop-filter backdrop-blur-xl bg-white bg-opacity-30 dark:border-dark-card-light dark:border-opacity-10 dark:bg-dark-card-light dark:bg-opacity-10 space-y-2 xl:grid xl:grid-cols-9 xl:space-y-0 xl:items-start">
                  <dl className="xl:col-span-2">
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-700 dark:text-gray-300 mb-3 mt-1">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                    <div className="gap-y-1">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </dl>
                  <div className="space-y-3 xl:col-start-3 xl:col-span-4">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      {/* <div className="text-l font-medium">
                        {authors}
                      </div> */}
                    </div>
                    <div className="prose text-gray-700 max-w-none dark:prose-dark dark:text-gray-300">
                      {summary}
                    </div>
                  </div>
                  <div className="xl:col-start-7 xl:col-span-3">
                    <div className="justify-center py-2 xl:py-0 xl:px-4">
                      <img src={image} alt="..." className="max-w-full h-auto rounded-md xl:ml-2" />
                      {/* <Image
                        src={image}
                        alt="..."
                        layout="fill"
                        objectFit="container"
                      /> */}
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
