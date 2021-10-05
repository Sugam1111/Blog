import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      {/* <a className="mr-2 text-xs uppercase inline-flex items-center justify-center px-2 py-0.5 leading-none border text-primary-500 border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-600 dark:hover:border-primary-400 rounded"> */}
      <a className="shadow rounded mr-2 text-xs uppercase inline-flex items-center px-2 py-0.5 bg-white bg-opacity-30 border border-white border-opacity-10 text-primary-600 hover:text-primary-800 hover:bg-opacity-50 dark:text-yellow-500 dark:border-black dark:border-opacity-5 dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:hover:text-primary-400">
      {/* <a className="mr-4 text-sm uppercase inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-yellow-500 dark:hover:text-primary-400"> */}
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
