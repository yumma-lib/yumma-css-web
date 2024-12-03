import { autocompletion } from "@codemirror/autocomplete";
import { completionSource } from "../completions";
import { customCmTheme } from "../themes/cmTheme";
import { pageContent } from "../constants/content";
import { Sandpack } from "@codesandbox/sandpack-react";
import customSpTheme from "../themes/spTheme";

const Playground: React.FC = () => {
  return (
    <Sandpack
      template="static"
      options={{
        codeEditor: {
          extensions: [autocompletion({ override: [completionSource] }), customCmTheme],
        },
        externalResources: ["https://cdn.jsdelivr.net/gh/yumma-lib/yumma-css@latest/dist/yumma.css"],
        editorHeight: "90dvh",
        showInlineErrors: true,
        showLineNumbers: true,
        showRefreshButton: false,
        wrapContent: true,
      }}
      files={{
        "index.html": pageContent,
      }}
      theme={customSpTheme}
    />
  );
};

export default Playground;
