import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

let color = 'secondary';
let intensity = 500;
const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a 
        // className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        className={`mr-2 text-xs font-small uppercase inline-flex items-center justify-center px-2 py-0.5 leading-none border text-${color}-${intensity} border-${color}-${intensity} hover:text-${color}-${intensity+100} dark:hover:text-${color}-${intensity-100} hover:border-${color}-${intensity+100} dark:hover:border-${color}-${intensity-100} rounded`}
      >
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
