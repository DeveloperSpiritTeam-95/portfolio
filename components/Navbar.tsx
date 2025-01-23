"use client";
import { useState } from "react";
import { Folder, House, Rss, User, Moon, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Toggle } from "@/components/ui/toggle";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("light");

  return (
    <header className="container py-2 flex justify-between items-center md:py-4">
      <Link href="/" className="text-xl font-semibold">
        PN
      </Link>

      {/* Mobile navigation */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            className="group md:hidden"
            variant="secondary"
            size="icon"
            onClick={() => setOpen((prevState) => !prevState)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg
              className="pointer-events-none"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation</SheetTitle>
          </SheetHeader>

          <nav className="list-none grid gap-4 mt-8">
            <li>
              <Link href="/" className="flex flex-row items-center gap-2">
                <House size={20} />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="flex flex-row items-center gap-2"
              >
                <Folder size={20} />
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="flex flex-row items-center gap-2">
                <Rss size={20} />
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex flex-row items-center gap-2">
                <User size={20} />
                About
              </Link>
            </li>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Laptop navigation */}
      <nav className="list-none gap-8 flex text-xs bg-brandForeground px-6 py-3 rounded-full">
        <li>
          <Link href="/" className="flex flex-row items-center gap-2">
            <House size={20} />
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" className="flex flex-row items-center gap-2">
            <Folder size={20} />
            Projects
          </Link>
        </li>
        <li>
          <Link href="/blog" className="flex flex-row items-center gap-2">
            <Rss size={20} />
            Blog
          </Link>
        </li>
        <li>
          <Link href="/about" className="flex flex-row items-center gap-2">
            <User size={20} />
            About
          </Link>
        </li>
      </nav>

      <Toggle
        variant="outline"
        className="group size-9 data-[state=on]:bg-transparent data-[state=on]:hover:bg-muted"
        pressed={theme === "dark"}
        onPressedChange={() =>
          setTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {/* Note: After dark mode implementation, rely on dark: prefix rather than group-data-[state=on]: */}
        <Moon
          size={16}
          strokeWidth={2}
          className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
          aria-hidden="true"
        />
        <Sun
          size={16}
          strokeWidth={2}
          className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
          aria-hidden="true"
        />
      </Toggle>
    </header>
  );
};

export default Navbar;
