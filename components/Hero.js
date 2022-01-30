import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import kebabCase from '@/lib/utils/kebabCase'
// import heroImg from '@/public/static/images/hero.png'

export default function Hero({}) {
  return (
    <>
      {/* <PageSEO title={`About - ${name}`} description={`About me - ${name}`} /> */}
      <div className="items-start h-auto pt-5 pb-10 sm:py-10 space-y-2 xl:grid xl:grid-cols-6 xl:grid-rows-6 xl:gap-x-8">
        <div className="drop-shadow-lg col-span-4 row-span-3 pl-3 sm:pl-5 text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-ct dark:to-purple-ct">
          ML meets Theoretical Neuro
        </div>
        <div className="hidden xl:block col-span-2 row-span-6 items-center">
          <Image
            src="/static/images/hero.png"
            alt="avatar"
            width="400px"
            height="400px"
            className="drop-shadow-lg dark:invert w-48 h-48 rounded-lg"
          />
        </div>
        <div className="text-gray-900 dark:text-gray-100 px-4 sm:px-7 text-sm md:text-lg xl:text-xl xl:col-span-4 xl:row-span-3">
          <div>A space where the two fields learn from each other.</div>
          {/* <Link  href={`/authors/${kebabCase(name)}`} >
            <h2 className="drop-shadow-lg dark:drop-shadow-wt-lg pt-6 pb-4 text-3xl font-bold leading-8 tracking-tight">{name}</h2>
          </Link>
          <div className="pb-4 text-lg text-primary-700 dark:text-secondary-400">{occupation}, {company}</div>
          <div className="prose dark:prose-dark max-w-none">{children}</div> */}
        </div>
      </div>
    </>
  )
}
