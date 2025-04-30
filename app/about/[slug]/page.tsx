import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

// 1. Tell Next.js which slugs to pre-render
export async function generateStaticParams() {
  return allAuthors.map((author) => ({
    slug: author.slug,
  }))
}

// 2. The page component itself
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  const author = allAuthors.find((a) => a.slug === slug) as Authors
  if (!author) {
    // You can replace this with your 404 component if you have one
    return <div>Author not found</div>
  }

  const mainContent = coreContent(author)

  return (
    <AuthorLayout content={mainContent}>
      <MDXLayoutRenderer code={author.body.code} />
    </AuthorLayout>
  )
}
