import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "./Code";
import { BundledLanguage } from "shiki";
import CopyCode from "./CopyCode";

type CodeBlockType = {
  props: {
    className: string;
    children: string;
  };
};

export const components: MDXComponents = {
  pre: ({ children }: { children: CodeBlockType }) => {
    const lang = (children.props.className?.split("-")?.[1] ??
      "java") as BundledLanguage;

    return (
      <>
        <div className="relative">
          <CopyCode code={children.props.children} />
        </div>
        <CodeBlock children={children.props.children} lang={lang} />
      </>
    );
  },
};
