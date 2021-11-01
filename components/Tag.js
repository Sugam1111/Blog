import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="rounded mr-2 text-xs uppercase inline-flex items-center px-2 py-1 text-black dark:text-primary transition delay-100 hover:bg-light-hover dark:hover:bg-primary dark:hover:text-black">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
