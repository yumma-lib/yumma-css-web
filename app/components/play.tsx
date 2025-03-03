import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { autocompletion } from "@codemirror/autocomplete";
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
  const isLarge = useMediaQuery({ maxWidth: 1024 });
  const [showPreview, setShowPreview] = useState<boolean>(false);

  return (
    <SandpackProvider
      files={{ "index.html": defaultCode, "styles.css": defaultStyles }}
      template="static"
      theme={customSpTheme}
      options={{ externalResources: ["/styles.css"] }}>
      {isLarge ? (
        <>
          <div className="d-f jc-c py-3">
            <button className="tc-white" onClick={() => setShowPreview((prev) => !prev)}>
              {showPreview ? "Show Editor" : "Show Preview"}
            </button>
          </div>
          <SandpackLayout>
            {showPreview ? (
              <SandpackPreview
                showOpenInCodeSandbox={false}
                showRefreshButton={false}
                style={{ height: "calc(100dvh - 6.5rem)" }}
                title="Preview"
              />
            ) : (
              <SandpackCodeEditor
                closableTabs
                extensions={[customCmTheme, keymap.of(searchKeymap)]}
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
            extensions={[customCmTheme, keymap.of(searchKeymap)]}
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
