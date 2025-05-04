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

// (Optional) generate metadata per author page
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

// 1️⃣ Emit all author slugs for static export
export async function generateStaticParams() {
  return allAuthors.map((author) => ({
    slug: author.slug,
  }))
}

// 2️⃣ Page component awaits `props.params` and renders the author
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
