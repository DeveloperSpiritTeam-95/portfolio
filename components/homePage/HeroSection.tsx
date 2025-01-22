import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div>
        <Image
          src="/profile.webp"
          height={400}
          width={400}
          alt="prabhakar profile pic"
          className="size-20 md:size-32 mb-4"
        />
        <h1 className="text-4xl font-semibold font-display">
          Hi👋, I&apos;m Prabhakar
        </h1>
        <p className="text-balance">
          A Java Developer in India. I enjoy building good backend architecture
          & deliver quality solutions.
        </p>

        <div className="flex gap-3 mt-4">
          <Button>See my work</Button>
          <Button variant="secondary">Resume</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
