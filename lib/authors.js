import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles } from './mdx'
import kebabCase from './utils/kebabCase'
import siteMetadata from '@/data/siteMetadata'

const root = process.cwd()

export async function getAllAuthors(type) {
  const files = await getFiles(type)

  let authorCount = {}
  // Iterate through each post, putting all found authors into `authors`
  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, 'data', type, file), 'utf8')
    const { data } = matter(source)
    data.authors = data.authors || [siteMetadata.author]
    if (data.authors && data.draft !== true) {
      data.authors.forEach((author) => {
        const formattedAuthor = kebabCase(author)
        if (formattedAuthor in authorCount) {
          authorCount[formattedAuthor] += 1
        } else {
          authorCount[formattedAuthor] = 1
        }
      })
    }
  })

  return authorCount
}
