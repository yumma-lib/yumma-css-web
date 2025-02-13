import { autocompletion } from "@codemirror/autocomplete";
import { completionSource } from "../completions";
import { customCmTheme } from "../themes/cmTheme";
import { defaultCode } from "../constants/content";
import { Sandpack } from "@codesandbox/sandpack-react";
import customSpTheme from "../themes/spTheme";

const Playground: React.FC = () => {
  return (
    <Sandpack
      files={{ "index.html": defaultCode }}
      options={{
        closableTabs: true,
        codeEditor: { extensions: [autocompletion({ override: [completionSource] }), customCmTheme] },
        editorHeight: "94dvh",
        externalResources: ["https://cdn.jsdelivr.net/gh/yumma-lib/yumma-css@latest/dist/yumma.css"],
        showInlineErrors: true,
        showLineNumbers: true,
        showRefreshButton: false,
        showTabs: true,
        wrapContent: true,
      }}
      template="static"
      theme={customSpTheme}
    />
  );
};

export default Playground;
