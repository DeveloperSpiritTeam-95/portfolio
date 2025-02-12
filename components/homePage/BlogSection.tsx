import React from "react";
import { allBlogs } from "@/.content-collections/generated";
const BlogSection = () => {
  console.log({ allBlogs });

  return (
    <section className="space-y-4">
      <h3 className="font-display text-lg md:text-xl font-semibold">Blogs</h3>
    </section>
  );
};

export default BlogSection;
