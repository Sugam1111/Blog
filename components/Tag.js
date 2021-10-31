import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="rounded mr-2 text-xs uppercase inline-flex items-center px-2 py-0.5 text-black dark:text-primary hover:bg-light-bg dark:hover:bg-primary dark:hover:text-black">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
