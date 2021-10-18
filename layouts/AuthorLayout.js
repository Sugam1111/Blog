import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import kebabCase from '@/lib/utils/kebabCase'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      {/* <PageSEO title={`About - ${name}`} description={`About me - ${name}`} /> */}
      <div className="shadow-lg rounded-xl border border-white border-opacity-10 backdrop-filter backdrop-blur-xl bg-white bg-opacity-20 dark:border-gray-600 dark:border-opacity-10 dark:bg-gray-600 dark:bg-opacity-30 items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8">
        <div className="flex flex-col items-center py-8 pl-5 space-x-2">
          <Image
            src={avatar}
            alt="avatar"
            width="192px"
            height="192px"
            className="w-48 h-48 rounded-lg shadow-md"
          />
          <div className="flex pt-4 space-x-3">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            <SocialIcon kind="github" href={github} />
            <SocialIcon kind="linkedin" href={linkedin} />
            <SocialIcon kind="twitter" href={twitter} />
          </div>
        </div>
        <div className=" xl:col-span-2">
          <Link  href={`/authors/${kebabCase(name)}`} >
            <h2 className="drop-shadow-lg dark:drop-shadow-wt-lg pt-6 pb-4 text-3xl font-bold leading-8 tracking-tight">{name}</h2>
          </Link>
          <div className="pb-4 text-lg text-primary-700 dark:text-secondary-400">{occupation}, {company}</div>
          <div className="prose dark:prose-dark max-w-none">{children}</div>
        </div>
      </div>
    </>
  )
}
