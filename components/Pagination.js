import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="pt-6 pb-8 lg:pt-8 lg:px-4 space-y-2 md:space-y-5">
      <nav className="flex drop-shadow-sm text-sm md:text lg:text-md text-gray-900 dark:text-gray-200 justify-between">
        {!prevPage && (
          <button rel="previous" className="cursor-auto disabled:opacity-40" disabled={!prevPage}>
            &larr; Previous
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
            <button rel="previous">&larr; Previous</button>
          </Link>
        )}
        <span className="">
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button rel="next" className="cursor-auto disabled:opacity-40" disabled={!nextPage}>
            Next &rarr;
          </button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <button rel="next">Next &rarr;</button>
          </Link>
        )}
      </nav>
    </div>
  )
}
