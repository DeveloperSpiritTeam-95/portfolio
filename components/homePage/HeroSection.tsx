import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ProfilePic from "@/public/profile.webp";
import { RoughNotation } from "react-rough-notation";
import { SynycsLogo } from "../SVG";

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
          Hi<span className="wiggle">👋</span>, I&apos;m{" "}
          <RoughNotation color="#1d4ed830" iterations={1} show type="highlight">
            <span className="text-brandPrimary">Prabhakar</span>
          </RoughNotation>
        </h1>

        <p className="text-balance max-w-lg mt-2">
          A Java Developer from 🇮🇳 India. Currently working as backend developer
          at{" "}
          <a
            href="https://www.synycs.com/"
            target="_blank"
            className="inline-flex gap-1 h-max leading-none translate-y-0.5 underline"
          >
            <SynycsLogo />
            Syncs
          </a>{" "}
          & delivering quality solutions.
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
