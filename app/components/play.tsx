import { autocompletion } from "@codemirror/autocomplete";
import { completionSource } from "../completions";
import { customCmTheme } from "../themes/cmTheme";
import { defaultCode, defaultStyles } from "../constants/content";
import { keymap } from "@codemirror/view";
import { searchKeymap } from "@codemirror/search";
import customSpTheme from "../themes/spTheme";

import {
  Sandpack,
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";

const Playground: React.FC = () => {
  return (
    <SandpackProvider
      files={{ "index.html": defaultCode, "styles.css": defaultStyles }}
      template="static"
      theme={customSpTheme}
      options={{
        externalResources: ["/styles.css"],
      }}>
      <SandpackLayout>
        <SandpackFileExplorer />
        <SandpackCodeEditor
          closableTabs
          extensions={[
            autocompletion({ override: [completionSource] }),
            customCmTheme,
            keymap.of(searchKeymap),
          ]}
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
    </SandpackProvider>
  );
};

export default Playground;
