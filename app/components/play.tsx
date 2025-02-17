import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { autocompletion } from "@codemirror/autocomplete";
import { completionSource } from "../completions";
import { customCmTheme } from "../themes/cmTheme";
import { defaultCode, defaultStyles } from "../constants/content";
import { keymap } from "@codemirror/view";
import { searchKeymap } from "@codemirror/search";
import customSpTheme from "../themes/spTheme";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";

const Playground: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [showPreview, setShowPreview] = useState<boolean>(false);

  return (
    <SandpackProvider
      files={{ "index.html": defaultCode, "styles.css": defaultStyles }}
      template="static"
      theme={customSpTheme}
      options={{ externalResources: ["/styles.css"], visibleFiles: ["index.html"] }}>
      {isMobile ? (
        <>
          <div className="d-f jc-c p-2">
            <button className="tc-white" onClick={() => setShowPreview((prev) => !prev)}>
              {showPreview ? "Show Editor" : "Show Preview"}
            </button>
          </div>
          <SandpackLayout>
            {showPreview ? (
              <SandpackPreview
                showOpenInCodeSandbox={false}
                showRefreshButton={false}
                style={{ height: "calc(100dvh - 6rem)" }}
                title="Preview"
              />
            ) : (
              <SandpackCodeEditor
                closableTabs
                extensions={[autocompletion({ override: [completionSource] }), customCmTheme, keymap.of(searchKeymap)]}
                showInlineErrors
                showLineNumbers
                showTabs
                wrapContent
                style={{ height: "calc(100dvh - 6rem)" }}
              />
            )}
          </SandpackLayout>
        </>
      ) : (
        <SandpackLayout>
          <SandpackFileExplorer />
          <SandpackCodeEditor
            closableTabs
            extensions={[autocompletion({ override: [completionSource] }), customCmTheme, keymap.of(searchKeymap)]}
            showInlineErrors
            showLineNumbers
            showTabs
            wrapContent
            style={{ height: "calc(100dvh - 4rem)" }}
          />
          <SandpackPreview
            showOpenInCodeSandbox={false}
            showRefreshButton={false}
            style={{ height: "calc(100dvh - 4rem)" }}
            title="Preview"
          />
        </SandpackLayout>
      )}
    </SandpackProvider>
  );
};

export default Playground;
