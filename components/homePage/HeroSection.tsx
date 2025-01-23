import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ProfilePic from "@/public/profile.webp";

const HeroSection = () => {
  return (
    <section className="py-28 md:pt-32 grid">
      <div>
        <Image
          src={ProfilePic}
          placeholder="blur"
          height={400}
          width={400}
          alt="prabhakar profile pic"
          className="size-20 mb-4 rounded-full"
        />

        <h1 className="text-2xl md:text-4xl font-semibold font-display">
          Hi👋, I&apos;m Prabhakar
        </h1>
        <p className="text-balance max-w-lg">
          A Java Developer from 🇮🇳 India. I enjoy building good backend
          architecture & deliver quality solutions.
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
