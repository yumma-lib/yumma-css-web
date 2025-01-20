import { autocompletion } from "@codemirror/autocomplete";
import { completionSource } from "../completions";
import { customCmTheme } from "../themes/cmTheme";
import { index } from "../constants/content";
import { Sandpack } from "@codesandbox/sandpack-react";
import customSpTheme from "../themes/spTheme";

const Playground: React.FC = () => {
  return (
    <Sandpack
      files={{ "index.html": index }}
      options={{
        codeEditor: { extensions: [autocompletion({ override: [completionSource] }), customCmTheme] },
        editorHeight: "90dvh",
        externalResources: ["https://cdn.jsdelivr.net/gh/yumma-lib/yumma-css@latest/dist/yumma.css"],
        showInlineErrors: true,
        showLineNumbers: true,
        showRefreshButton: false,
        wrapContent: true,
      }}
      template="static"
      theme={customSpTheme}
    />
  );
};

export default Playground;
