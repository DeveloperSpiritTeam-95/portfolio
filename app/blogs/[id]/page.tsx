import React from "react";
import { allBlogs } from "@/.content-collections/generated";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import Image from "next/image";
import { components } from "@/components/MDXComponents";
import readingTime from "reading-time";
import { format } from "date-fns";
import { Metadata } from "next";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._meta.path }));
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = await params;
  const slug = decodeURIComponent(id);
  const blog = allBlogs.find(({ _meta }) => _meta.path === slug);

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,
    description: blog.description,
    authors: [{ name: "Prabhakar Kimavath" }],
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: "https://prabhakar.com",
      siteName: "Prabhakar Kimavath",
      images: [
        {
          url: blog.imageURL,
          height: 630,
          width: 1200,
          alt: `${blog.title} og image`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const slug = decodeURIComponent(id);

  const blogData = allBlogs.find(({ _meta }) => _meta.path === slug);

  if (!blogData) {
    return notFound();
  }

  const { mdx, imageURL, title, tags, date } = blogData;

  const time = readingTime(mdx);

  return (
    <section className="mt-8 max-w-[65ch] mx-auto">
      <Link href="/blogs" className="text-sm inline-flex gap-1 items-center">
        <ArrowLeft size={20} />
        Back to blogs
      </Link>

      <div className="animate-in slide-in-from-bottom-24 duration-500 fade-in">
        <figure className="relative aspect-video rounded-md overflow-hidden mt-6">
          <Image
            src={imageURL}
            alt={`${title} cover pic`}
            className="object-cover"
            fill
          />
        </figure>

        <h1 className="text-2xl md:text-5xl md:mt-4 font-semibold font-display mt-2">
          {title}
        </h1>

        <div className="mb-4 flex items-center justify-between h-max mt-2">
          <time className="shrink-0">
            {format(new Date(date), "dd, LLL uuuu")}
          </time>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Clock size={24} />

              {time.text}
            </span>
          </div>
        </div>

        <div className="flex w-full gap-3">
          {tags.map(({ color, name }) => (
            <span
              className={`${color}-tag px-3 py-1 text-sm shadow-md`}
              key={name}
            >{`# ${name}`}</span>
          ))}
        </div>

        <article className="prose prose-headings:text-brandText prose-blue w-full mt-8 marker:text-brandPrimary prose-headings:font-display prose-headings:font-semibold prose-a:text-brandPrimary prose-a:after:content-['↗'] prose-blockquote:border-brandPrimary prose-blockquote:bg-brandPrimary/10 prose-blockquote:py-1 prose-img:aspect-video prose-img:w-full prose-img:rounded-md prose-img:bg-gray-500 prose-img:object-cover">
          <MDXContent code={mdx} components={components} />
        </article>
      </div>
    </section>
  );
};

export default page;
