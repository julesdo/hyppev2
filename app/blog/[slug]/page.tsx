import { allPosts } from '.contentlayer/generated';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ShareBar from '../ShareBar';
import FromDetailFlag from '../FromDetailFlag';
import MathContent from '../MathContent';

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: Params) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <section className="z-10 flex min-h-screen w-full flex-col items-center bg-[#0E1016] pt-20 pb-24">
      <FromDetailFlag />
      <article className="w-[90%] max-w-[720px]">
        {/* Navigation */}
        <div className="mb-10 flex items-center justify-between">
          <Link 
            href="/" 
            aria-label="Back to Home" 
            className="group flex items-center gap-2 text-sm text-[#95979D] transition-colors hover:text-[#e4ded7]"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Retour</span>
          </Link>
          <ShareBar title={post.title} />
        </div>

        {/* Header */}
        <header className="mb-10">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#95979D]">
            {new Date(post.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[#e4ded7] md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
        </header>

        {/* Cover Image */}
        {post.image && (
          <div className="mb-12 overflow-hidden rounded-xl">
            <Image 
              src={post.image} 
              alt={post.title} 
              width={1600} 
              height={840} 
              className="w-full object-cover" 
              priority
            />
          </div>
        )}

        {/* Content */}
        <div 
          className="
            prose prose-lg prose-invert max-w-none
            prose-headings:font-bold prose-headings:text-[#e4ded7] prose-headings:mt-12 prose-headings:mb-4
            prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:border-l-4 prose-h2:border-[#FC5757] prose-h2:pl-4
            prose-h3:text-xl prose-h3:md:text-2xl
            prose-p:text-[#b0b2b8] prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-[#e4ded7] prose-strong:font-semibold
            prose-em:text-[#d0d2d8]
            prose-a:text-[#FC5757] prose-a:no-underline hover:prose-a:underline
            prose-ul:my-6 prose-ul:space-y-3
            prose-li:text-[#b0b2b8] prose-li:pl-2
            prose-li:marker:text-[#FC5757]
            prose-blockquote:border-l-4 prose-blockquote:border-[#FC5757] prose-blockquote:bg-[#1a1d24] prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            prose-code:bg-[#1a1d24] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-[#FC5757] prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-[#1a1d24] prose-pre:rounded-xl prose-pre:p-6
            [&_hr]:my-12 [&_hr]:border-[#2a2d34]
            [&_.math-block]:flex [&_.math-block]:justify-center [&_.math-block]:text-[#e4ded7]
            [&_.katex]:text-[1.1em]
          "
        >
          <MathContent html={post.body.html} />
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-[#2a2d34] pt-8">
          <Link 
            href="/" 
            aria-label="Back to Home" 
            className="group flex items-center gap-2 text-sm text-[#95979D] transition-colors hover:text-[#e4ded7]"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Retour</span>
          </Link>
          <ShareBar title={post.title} />
        </div>
      </article>
    </section>
  );
}


