import React, { ComponentPropsWithoutRef } from "react";
import { FadeIn, FadeInStagger } from "../FadeIn";
import { useId } from "react";

const skills = {
  programmingLanguages: [
    {
      label: "Java",
      icon: (props: ComponentPropsWithoutRef<"svg">) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 256 346"
          {...props}
        >
          <path
            d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17"
            fill="#5382A1"
          />
          <path
            d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95"
            fill="#E76F00"
          />
          <path
            d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2"
            fill="#5382A1"
          />
          <path
            d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110"
            fill="#E76F00"
          />
          <path
            d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10"
            fill="#5382A1"
          />
        </svg>
      ),
    },
    {
      label: "Kotlin",
      icon: (props: ComponentPropsWithoutRef<"svg">) => (
        <svg
          viewBox="0 0 256 256"
          width="1em"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          {...props}
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="99.991%"
              y1="-.011%"
              x2=".01%"
              y2="100.01%"
            >
              <stop stopColor="#E44857" offset=".344%" />
              <stop stopColor="#C711E1" offset="46.89%" />
              <stop stopColor="#7F52FF" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ fill: "url(#linear-gradient)" }}
            d="M256 256H0V0h256L128 127.949z"
          />
        </svg>
      ),
    },
    {
      label: "Python",
      icon: (props: ComponentPropsWithoutRef<"svg">) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="16 16 32 32"
          {...props}
        >
          <path
            fill="url(#a)"
            d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
          />
          <path
            fill="url(#b)"
            d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"
          />
          <defs>
            <linearGradient
              id="a"
              x1="19.075"
              x2="34.898"
              y1="18.782"
              y2="34.658"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#387EB8" />
              <stop offset="1" stopColor="#366994" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="28.809"
              x2="45.803"
              y1="28.882"
              y2="45.163"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE052" />
              <stop offset="1" stopColor="#FFC331" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      label: "HTML",
      icon: (props: ComponentPropsWithoutRef<"svg">) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 452 520"
          width="1em"
          height="1em"
          {...props}
        >
          <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
          <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
          <path
            fill="#ecedee"
            d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
          />
          <path
            fill="#fff"
            d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
          />
        </svg>
      ),
    },
    {
      label: "CSS",
      icon: (props: ComponentPropsWithoutRef<"svg">) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 512 512"
          {...props}
        >
          <path
            fill="#264de4"
            d="M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z"
          />
          <path
            fill="#2965f1"
            d="m405.388 431.408 35.148-393.73H256v435.146z"
          />
          <path
            fill="#ebebeb"
            d="m124.46 208.59 5.065 56.517H256V208.59zm-5.041-57.875H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
          />
          <path
            fill="#fff"
            d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
          />
        </svg>
      ),
    },
    {
      label: "Javascript",
      icon: (props: ComponentPropsWithoutRef<"svg">) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 1052 1052"
          {...props}
        >
          <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
          <path
            d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
            fill="#323330"
          />
        </svg>
      ),
    },
  ],
};

const SkillsSection = () => {
  return (
    <section className="space-y-4" id="projects">
      <h3 className="font-display text-lg md:text-xl font-semibold">Skills</h3>

      <div>
        <p>Programming Languages</p>

        <FadeInStagger className="mt-4 flex w-full gap-2">
          {skills.programmingLanguages.map(({ icon, label }) => {
            const Component = icon;

            return (
              <FadeIn
                className="border w-max p-2 rounded shadow-md bg-white"
                key={label}
              >
                <Component className="size-6" />
              </FadeIn>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
};

export default SkillsSection;
