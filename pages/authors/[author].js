import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllAuthors } from '@/lib/authors'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export async function getStaticPaths() {
  const authors = await getAllAuthors('blog')
  console.log(Object.keys(authors))
  return {
    paths: Object.keys(authors).map((author) => ({
      params: {
        author,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const filteredPosts = allPosts.filter( function (post) {
    post.authors = (post.authors || [siteMetadata.author])
    return post.draft !== true && post.authors.map((t) => kebabCase(t)).includes(params.author)
  })

  // rss
  const rss = generateRss(filteredPosts, `authors/${params.author}/feed.xml`)
  const rssPath = path.join(root, 'public', 'authors', params.author)
  fs.mkdirSync(rssPath, { recursive: true })
  fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)

  return { props: { posts: filteredPosts, author: params.author } }
}

export default function Author({ posts, author }) {
  // Capitalize first letter and convert space to dash
  const title = author.replace('-', ' ').replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
  return (
    <>
      <TagSEO
        title={`${author} - ${siteMetadata.author}`}
        description={`${author} author - ${siteMetadata.author}`}
      />
      <ListLayout posts={posts} title={title} />
    </>
  )
}
