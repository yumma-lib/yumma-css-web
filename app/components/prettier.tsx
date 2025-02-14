import { useEffect, useState, useCallback } from "react";
import debounce from "lodash/debounce";

import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import parserHTML from "prettier/parser-html";
import parserSCSS from "prettier/parser-postcss";
import parserTS from "prettier/parser-typescript";
import { completionSource } from "../completions";
import { customCmTheme } from "../themes/cmTheme";
import { SandpackCodeEditor, useSandpack } from "@codesandbox/sandpack-react";

// Custom Editor Component
function EditorWithPrettier() {
  const { prettier } = useIsPrettier();

    function autocompletion(arg0: { override: any[]; }) {
        throw new Error("Function not implemented.");
    }

  return (
    <>
      {prettier && <PrettierPlugin />}
      <SandpackCodeEditor
        closableTabs
        extensions={[autocompletion({ override: [completionSource] }), customCmTheme]}
        showInlineErrors
        showLineNumbers
        showTabs
        wrapContent
        style={{ height: "calc(100dvh - 4rem)" }}
      />
    </>
  );
}

// Prettier Plugin Button
function PrettierPlugin() {
  const { error, success, prettifyCode } = usePrettier();

  return (
    <button
      style={{
        color: error ? "#ef4444" : success ? "#22c55e" : "#808080",
      }}
      className="prettier"
      onClick={prettifyCode}>
      {error ? <DangerIcon size={12} /> : <CheckIcon size={12} />}
      Prettier
    </button>
  );
}

// Check Icon Component
function CheckIcon({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

// Danger Icon Component
function DangerIcon({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
      />
    </svg>
  );
}

// Hook to check if Prettier is supported
const useIsPrettier = () => {
  const [prettier, setPrettier] = useState(false);
  const { sandpack } = useSandpack();

  useEffect(() => {
    const activeFile = sandpack.files[sandpack.activeFile];
    if (!activeFile) return;

    const fileExtension = sandpack.activeFile.split(".").pop()?.toLowerCase();
    if (!fileExtension) return;

    const prettierExtensions = ["js", "ts", "jsx", "tsx", "scss", "css", "html"];
    const isPrettierSupported = !(activeFile.readOnly || !prettierExtensions.includes(fileExtension));

    setPrettier(isPrettierSupported);
  }, [sandpack.files, sandpack.activeFile]);

  return { prettier };
};

// Hook to handle Prettier formatting
const usePrettier = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { sandpack } = useSandpack();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        prettifyCode();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [sandpack.files, sandpack.activeFile]);

  const debouncedUpdate = useCallback(
    debounce((code) => {
      sandpack.updateCurrentFile(code, false);
    }, 150),
    [sandpack.activeFile, sandpack.files]
  );

  const prettifyCode = () => {
    const activeFile = sandpack.files[sandpack.activeFile];
    const currentCode = activeFile.code;

    try {
      const fileExtension = sandpack.activeFile.split(".").pop()?.toLowerCase();
      let formattedCode = currentCode;

      if (fileExtension === "scss" || fileExtension === "css") {
        formattedCode = prettier.format(currentCode, {
          parser: "scss",
          plugins: [parserSCSS],
        });
      } else {
        formattedCode = prettier.format(currentCode, {
          parser: fileExtension === "ts" || fileExtension === "tsx" ? "typescript" : "babel",
          plugins: [parserBabel, parserTS, parserHTML],
        });
      }

      setError(false);
      setSuccess(true);
      debouncedUpdate(formattedCode);
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setTimeout(() => {
        setSuccess(false);
      }, 500);
    }
  };

  return { error, success, prettifyCode };
};
