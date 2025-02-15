"use client";

import React, { useRef } from "react";
import { allProjects, Project } from "content-collections";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { MotionValue, useScroll, useTransform, motion } from "motion/react";
import { useMediaQuery } from "usehooks-ts";

const ProjectCard = ({
  project,
  scrollYProgress,
  index,
}: {
  project: Project;
  scrollYProgress: MotionValue;
  index: number;
}) => {
  const targetScale = 1 - (allProjects.length - index) * 0.05;
  const range = [index * 0.25, 1];
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <motion.div
      style={{ scale, top: `${(index + 1) * 4}rem`, position: "sticky" }}
      className={`grid w-full shadow-lg bg-brandForeground p-4 rounded-xl gap-4 md:grid-cols-2 md:gap-8 h-max`}
    >
      <div className="w-full h-full min-h-72 relative rounded-md overflow-hidden">
        <Image
          src={project.imageURL}
          className="object-cover"
          fill
          alt="4paws project cover picture"
        />
      </div>

      <div className="space-y-4 md:mt-4">
        <p className="text-2xl font-display font-semibold">{project.title}</p>
        <div className="space-y-4">
          <div>
            <p className="font-display font-semibold">Overview</p>
            <p className="text-balance text-sm">{project.description}</p>
          </div>

          <div>
            <p className="font-display font-semibold">Built on</p>

            <div className="flex gap-2 flex-wrap">
              {project.stack.map((item) => (
                <Badge
                  className="bg-brandPrimary/10 border border-brandPrimary text-brandPrimary hover:bg-brandPrimary/20"
                  key={item}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Button size="sm" asChild>
          <Link href={`projects/${project._meta.path}`}>Read more</Link>
        </Button>
      </div>
    </motion.div>
  );
};

const ProjectSection = ({
  featured = false,
  title,
}: {
  featured?: boolean;
  title: string;
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const filteredProjects = featured
    ? allProjects.filter((project) => project.featured)
    : allProjects;

  return (
    <section ref={containerRef} className="space-y-4" id="projects">
      <h3 className="font-display text-lg md:text-xl font-semibold">{title}</h3>

      <div className="space-y-24">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            scrollYProgress={scrollYProgress}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
