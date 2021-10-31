import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function Hero() {
  return (
    <>
      {/* <PageSEO title={`About - ${name}`} description={`About me - ${name}`} /> */}
      <div className="items-start h-auto py-10 space-y-2 xl:grid xl:grid-cols-6 xl:grid-rows-6 xl:gap-x-8">
        <div className="w-auto inline-block drop-shadow-lg col-span-4 row-span-3 text-7xl font-extrabold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-ct dark:to-purple-ct">
          ML meets Theoretical Neuro
        </div>
        <div className="col-span-2 row-span-6 items-center">
          <Image
            src="/static/images/hero.png"
            alt="avatar"
            width="450px"
            height="300px"
            className="absolute rounded-lg shadow-md"
          />
        </div>
        <div className="dark:text-white xl:pt-5 text-xl xl:col-span-4 xl:row-span-3">
          <div>A space where the two fields learn from each other.</div>
        </div>
      </div>
    </>
  )
}
