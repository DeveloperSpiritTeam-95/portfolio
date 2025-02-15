"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

const CopyCode = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <Button
      onClick={() => {
        handleCopyClick();
      }}
      className="absolute -top-4 right-4"
    >
      {copied ? "Copied" : "Copy"}
    </Button>
  );
};

export default CopyCode;
