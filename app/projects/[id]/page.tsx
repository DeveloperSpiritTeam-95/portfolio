import React from "react";
import { allProjects } from "@/.content-collections/generated";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const slug = decodeURIComponent(id);

  const blogData = allProjects.find(({ _meta }) => _meta.path === slug);

  if (!blogData) {
    return notFound();
  }

  const { mdx, imageURL, name } = blogData;

  return (
    <section className="mt-8 max-w-[65ch]">
      <Link href="/projects" className="text-sm inline-flex gap-1 items-center">
        <ArrowLeft size={20} />
        Back to projects
      </Link>

      <figure className="relative aspect-video rounded-md overflow-hidden mt-6">
        <Image
          src={imageURL}
          alt={`${name} cover pic`}
          className="object-cover"
          fill
        />
      </figure>

      <h1 className="text-2xl md:text-5xl md:mt-4 font-semibold font-display mt-2">
        {name}
      </h1>

      <article className="prose prose-blue w-full mt-8 marker:text-brandPrimary prose-headings:font-display prose-headings:font-semibold prose-a:text-brandPrimary prose-a:after:content-['↗'] prose-blockquote:border-brandPrimary prose-blockquote:bg-brandPrimary/10 prose-blockquote:py-1 prose-img:aspect-video prose-img:w-full prose-img:rounded-md prose-img:bg-gray-500 prose-img:object-cover">
        <MDXContent code={mdx} />
      </article>
    </section>
  );
};

export default page;
