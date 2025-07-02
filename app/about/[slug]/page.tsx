// app/about/[slug]/page.tsx

import 'css/prism.css'
import 'katex/dist/katex.css'

import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

/**
 * Generates dynamic metadata for an author page based on the provided slug.
 *
 * If the author is not found, returns an empty metadata object.
 *
 * @returns Metadata object containing the author's name as the title and a description referencing the author, or an empty object if no author matches the slug.
 */
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params
  const author = allAuthors.find((a) => a.slug === slug) as Authors
  if (!author) return {}


  return genPageMetadata({
    title: author.name,
    description: `Read more about ${author.name}`,
  })
}

/**
 * Generates a list of route parameters for all authors to enable static generation of author pages.
 *
 * @returns An array of objects, each containing a `slug` property for an author.
 */
export async function generateStaticParams() {
  return allAuthors.map((author) => ({
    slug: author.slug,
  }))
}

/**
 * Renders an author page based on the provided slug parameter.
 *
 * Retrieves the author data corresponding to the slug, triggers a 404 page if not found, and displays the author's content using the appropriate layout and MDX renderer.
 */
export default async function Page(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params

  const author = allAuthors.find((a) => a.slug === slug) as Authors
  if (!author) {
    notFound()
  }

  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
