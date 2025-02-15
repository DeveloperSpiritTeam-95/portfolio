import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";

export async function CodeBlock({
  children,
  lang,
}: {
  children: string;
  lang: BundledLanguage;
}) {
  const out = await codeToHtml(children, {
    lang: lang,
    theme: "dark-plus",
  });

  return (
    <div
      dangerouslySetInnerHTML={{ __html: out }}
      className="not-prose [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:overflow-x-scroll [&>pre]:overflow-y-hidden"
    />
  );
}
