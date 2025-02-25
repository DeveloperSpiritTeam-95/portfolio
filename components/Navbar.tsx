"use client";
import { useState } from "react";
import { Folder, House, Phone, Rss } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="container py-2 flex justify-between items-center md:py-4">
      <Link href="/" className="text-xl font-semibold">
        PK
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
            <SheetTitle className="sr-only">Navbar</SheetTitle>
          </SheetHeader>

          <SheetDescription className="sr-only">Navbar</SheetDescription>

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
              <Link href="/blogs" className="flex flex-row items-center gap-2">
                <Rss size={20} />
                Blogs
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="flex flex-row items-center gap-2"
              >
                <Phone size={20} />
                Contact
              </Link>
            </li>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Laptop navigation */}
      <nav className="list-none gap-8 md:flex text-xs hidden">
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
          <Link href="/blogs" className="flex flex-row items-center gap-2">
            <Rss size={20} />
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/contact" className="flex flex-row items-center gap-2">
            <Phone size={20} />
            Contact
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
