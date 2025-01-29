"use client";
import { Database, Layers, LayoutDashboard, Workflow } from "lucide-react";
import React, { useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useInView } from "motion/react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <section className="space-y-4">
      <h3 className="font-display text-lg md:text-xl font-semibold">
        About Me
      </h3>

      <RoughNotationGroup show={isInView}>
        <p className="text-xl text-balance md:text-2xl md:leading-10" ref={ref}>
          I build good app’s by focusing on{" "}
          <RoughNotation
            multiline
            color="#1d4ed830"
            iterations={1}
            order={1}
            type="highlight"
            animationDelay={1000}
          >
            <span className="inline-flex items-center gap-1">
              <LayoutDashboard className="size-5" />
              System Design
            </span>
          </RoughNotation>{" "}
          and implementing{" "}
          <RoughNotation
            multiline
            color="#FFD65A70"
            iterations={1}
            order={2}
            animationDelay={1000}
            type="highlight"
          >
            <span className="inline-flex items-center gap-1">
              <Layers className="size-5" />
              Scalable Architecture
            </span>
          </RoughNotation>{" "}
          with Java. With expertise in{" "}
          <RoughNotation
            multiline
            color="#5B913B70"
            iterations={1}
            order={4}
            animationDelay={1000}
            type="highlight"
          >
            <span className="inline-flex items-center gap-1">
              <Database className="size-5" />
              Database Management
            </span>
          </RoughNotation>{" "}
          and{" "}
          <RoughNotation
            multiline
            color="#EB5A3C70"
            iterations={1}
            order={5}
            animationDelay={1000}
            type="highlight"
          >
            <span className="inline-flex items-center gap-1">
              <Workflow className="size-5" />
              Seamless Integration
            </span>
          </RoughNotation>{" "}
          with external systems
        </p>
      </RoughNotationGroup>
    </section>
  );
};

export default AboutSection;
