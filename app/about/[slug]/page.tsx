import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

// This function receives params from the dynamic route and does not require awaiting
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params  // No need to await params

  // Find the author by slug
  const author = allAuthors.find((author) => author.slug === slug)

  if (!author) {
    // Handle case when author is not found (e.g., show 404 page)
    return <div>Author not found</div>
  }

  // Get content for the author
  const mainContent = coreContent(author)

  return (
    <AuthorLayout content={mainContent}>
      <MDXLayoutRenderer code={author.body.code} />
    </AuthorLayout>
  )
}
