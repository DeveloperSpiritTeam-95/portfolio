import React from "react";
import { allProjects } from "@/.content-collections/generated";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export async function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project._meta.path }));
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = await params;
  const project = allProjects.find((project) => project._meta.path === id);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    authors: [{ name: "Prabhakar Kimavath" }],
    openGraph: {
      title: project.title,
      url: "https://prabhakar.com",
      siteName: "Prabhakar Kimavath",
      images: [
        {
          url: project.imageURL,
          height: 630,
          width: 1200,
          alt: `${project.title} og image`,
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

  const blogData = allProjects.find(({ _meta }) => _meta.path === slug);

  if (!blogData) {
    return notFound();
  }

  const { mdx, imageURL, title } = blogData;

  return (
    <section className="mt-8 max-w-[65ch] mx-auto">
      <Link href="/projects" className="text-sm inline-flex gap-1 items-center">
        <ArrowLeft size={20} />
        Back to projects
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

        <article className="prose prose-headings:text-brandText prose-blue w-full mt-8 marker:text-brandPrimary prose-headings:font-display prose-headings:font-semibold prose-a:text-brandPrimary prose-a:after:content-['↗'] prose-blockquote:border-brandPrimary prose-blockquote:bg-brandPrimary/10 prose-blockquote:py-1 prose-img:aspect-video prose-img:w-full prose-img:rounded-md prose-img:bg-gray-500 prose-img:object-cover">
          <MDXContent code={mdx} />
        </article>
      </div>
    </section>
  );
};

export default page;
