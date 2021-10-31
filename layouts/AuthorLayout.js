import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import kebabCase from '@/lib/utils/kebabCase'
import Link from '@/lib/components/Link'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      {/* <PageSEO title={`About - ${name}`} description={`About me - ${name}`} /> */}
      <div className="rounded-xl bg-light-card dark:bg-dark-card items-start space-y-2 xl:grid xl:grid-cols-4">
        <div className="flex flex-col items-center py-8 space-x-2">
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
        <div className="xl:px-3 xl:col-span-3">
          <Link href={`/authors/${kebabCase(name)}`}>
            <h2 className="pt-6 pb-4 text-3xl font-bold leading-8 tracking-tight">{name}</h2>
          </Link>
          <div className="pb-4 text-lg font-medium text-gray-900 dark:text-primary">
            {occupation}, {company}
          </div>
          <div className="prose dark:prose-dark max-w-none">{children}</div>
        </div>
      </div>
    </>
  )
}
