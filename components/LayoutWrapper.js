import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo className="w-20 h-20" />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) =>
                link.href === router.pathname ? (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="rounded-lg p-1 font-bold text-gray-900 sm:py-2 sm:px-4 transition delay-100 hover:bg-light-hover dark:text-white dark:hover:bg-primary dark:hover:text-dark-bg"
                  >
                    {link.title}
                  </Link>
                ) : (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="rounded-lg p-1 font-medium text-gray-700 sm:py-2 sm:px-4 transition delay-100 hover:bg-light-hover dark:text-gray-300 dark:hover:bg-primary dark:hover:text-dark-bg"
                  >
                    {link.title}
                  </Link>
                )
              )}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
