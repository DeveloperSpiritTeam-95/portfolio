import React from "react";
import { allBlogs, Blog } from "@/.content-collections/generated";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "../FadeIn";

const BlogCard = ({ blog }: { blog: Blog }) => {
  const { title, tags, imageURL, _meta, description } = blog;

  return (
    <div>
      <Link
        href={`blogs/${_meta.path}`}
        className="block px-2 pt-2 pb-7 md:px-3 md:pt-3 bg-white shadow-md rounded-lg"
      >
        <figure className="relative aspect-video rounded-md overflow-hidden">
          <Image
            src={imageURL}
            alt={`${title} cover image`}
            fill
            className="object-cover"
          />
        </figure>
      </Link>

      <Link
        href={`blogs/${_meta.path}`}
        className="font-display mt-4 block font-semibold hover:text-brandPrimary transition-colors"
      >
        {title}
      </Link>

      <p className="text-br">{description}</p>

      <div className="mt-1 flex w-full gap-3">
        {tags.map(({ color, name }) => (
          <span
            className={`${color}-tag px-3 py-1 text-sm shadow-md`}
            key={name}
          >{`# ${name}`}</span>
        ))}
      </div>
    </div>
  );
};

const BlogSection = ({
  featured = false,
  title = "",
}: {
  featured?: boolean;
  title: string;
}) => {
  const filteredBlogs = featured
    ? allBlogs.filter((blog) => blog.featured)
    : allBlogs;

  return (
    <section className="space-y-4">
      <h3 className="font-display text-lg md:text-xl font-semibold">{title}</h3>

      <FadeInStagger className="grid md:grid-cols-2 gap-6">
        {filteredBlogs.length
          ? filteredBlogs.map((blog) => {
              return (
                <FadeIn key={blog.title}>
                  <BlogCard blog={blog} />
                </FadeIn>
              );
            })
          : null}
      </FadeInStagger>
    </section>
  );
};

export default BlogSection;
