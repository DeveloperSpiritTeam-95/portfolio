import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ProfilePic from "@/public/profile.png";

import { SynycsLogo } from "../SVG";
import Link from "next/link";
import TextRotate from "../TextRotate";

const HeroSection = () => {
  return (
    <section className="py-16 grid">
      <div>
        <figure className="px-2 pt-2 pb-3 md:px-3 md:pt-3 bg-white w-max rounded-lg mb-8 -rotate-3 shadow-md">
          <Image
            src={ProfilePic}
            placeholder="blur"
            height={400}
            width={400}
            alt="prabhakar profile pic"
            className="size-28 md:size-36 mb-4 rounded-sm"
          />
        </figure>

        <h1 className="text-2xl md:text-6xl font-semibold font-display text-balance">
          Hi<span className="wiggle">👋</span>, I&apos;m Prabhakar{" "}
          <TextRotate
            splitBy="words"
            staggerDuration={0.25}
            mainClassName="overflow-hidden text-brandPrimary"
            rotationInterval={3000}
            animatePresenceInitial
            texts={[
              "a Java Developer",
              "i build Scalable App's",
              "i Manage Databases",
            ]}
          />
        </h1>

        <p className="text-balance max-w-3xl md:text-xl mt-2">
          Currently working as backend developer at{" "}
          <Link
            href="https://www.synycs.com/"
            target="_blank"
            className="inline-flex gap-1 h-max leading-none translate-y-0.5 md:-translate-y-0.5 underline"
          >
            <SynycsLogo />
            Syncs
          </Link>{" "}
          & delivering quality solutions.
        </p>

        <div className="flex gap-3 mt-4">
          <Button>
            <Link href="/#projects">See my work</Link>
          </Button>
          <Button variant="secondary">Resume</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
