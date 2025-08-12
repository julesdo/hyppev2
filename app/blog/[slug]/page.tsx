import { allPosts } from '.contentlayer/generated';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ShareBar from '../ShareBar';
import FromDetailFlag from '../FromDetailFlag';

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: Params) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <section className="z-10 invert flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 pb-24">
      <FromDetailFlag />
      <article className="w-[90%] max-w-[900px] text-[#e4ded7]">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/" aria-label="Back to Home" className="underline underline-offset-2 hover:no-underline text-[#e4ded7]">
            ← Back
          </Link>
          <ShareBar title={post.title} />
        </div>
        <h1 className="mb-3 text-3xl md:text-5xl font-bold leading-tight">{post.title}</h1>
        <p className="text-[#95979D] mb-6">{new Date(post.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
        {post.image ? (
          <div className="mb-8">
            <Image src={post.image} alt={post.title} width={1600} height={840} className="w-full rounded-lg object-cover" />
          </div>
        ) : null}
        <div className="prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </div>
        <div className="mt-10 flex items-center justify-between">
          <Link href="/" aria-label="Back to Home" className="underline underline-offset-2 hover:no-underline text-[#e4ded7]">
            ← Back
          </Link>
          <ShareBar title={post.title} />
        </div>
      </article>
    </section>
  );
}


