import React, { useEffect, useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { content } from "../content";

const Playground: React.FC = () => {
  const [files, setFiles] = useState<{
    [key: string]: { code: string; active: boolean };
  }>({});

  useEffect(() => {
    setFiles({
      "/index.html": {
        code: content,
        active: true,
      },
    });
  }, []);

  return (
    <Sandpack
      template="static"
      files={files}
      options={{
        showInlineErrors: true,
        editorHeight: "93.4dvh",
        externalResources: [
          "https://cdn.jsdelivr.net/gh/yumma-lib/yumma-css@release/dist/yumma.min.css",
        ],
      }}
      theme={{
        colors: {
          surface1: "#1f212a",
          surface2: "#ffffff",
          surface3: "#1a1c22",
          clickable: "#e5e7e9",
          base: "#dd67a1",
          disabled: "#cccccc",
          hover: "#ffffff",
          accent: "#ffffff",
          error: "#ffcdca",
          errorSurface: "#c24038",
        },
        syntax: {
          plain: "rgb(252, 252, 250)",
          comment: {
            color: "#757575",
            fontStyle: "italic",
          },
          keyword: "#dd67a1",
          tag: "#e3e3e3",
          punctuation: "rgb(147, 146, 147)",
          definition: "#dd67a1",
          property: "#e3e3e3",
          static: "rgb(171, 157, 242)",
          string: "#50bfd2",
        },
        font: {
          body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
          size: "13px",
          lineHeight: "20px",
        },
      }}
    />
  );
};

export default Playground;
