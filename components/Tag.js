import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a 
        className="mr-2 text-xs font-small uppercase inline-flex items-center justify-center px-2 py-0.5 leading-none border text-primary-500 border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-600 dark:hover:border-primary-400 rounded"
      >
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
