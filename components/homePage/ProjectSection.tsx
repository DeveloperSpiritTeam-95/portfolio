import React from "react";
import { allProjects, Project } from "content-collections";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="grid w-full bg-brandForeground p-4 rounded-xl gap-4 md:grid-cols-2 md:gap-8 h-max">
      <div className="w-full h-full min-h-72 relative rounded-md overflow-hidden">
        <Image
          src={project.imageURL}
          className="object-cover"
          fill
          alt="4paws project cover picture"
        />
      </div>

      <div className="space-y-4 md:mt-4">
        <p className="text-2xl font-display font-semibold">{project.name}</p>
        <div className="space-y-4">
          <div>
            <p className="font-display font-semibold">Overview</p>
            <p className="text-balance text-sm">{project.overview}</p>
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
          <Link href={project._meta.path}>Read more</Link>
        </Button>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  console.log({ allProjects });

  return (
    <section className="space-y-4">
      <h3 className="font-display text-lg md:text-xl font-semibold">
        Featured Projects
      </h3>

      <div className="space-y-24">
        {allProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
