import { autocompletion } from "@codemirror/autocomplete";
import { pageContent } from "../constants/content";
import { Sandpack } from "@codesandbox/sandpack-react";
import customTheme from "../theme";
import { completionSource } from "../completions";

const Playground: React.FC = () => {
  return (
    <Sandpack
      template="static"
      options={{
        codeEditor: {
          extensions: [autocompletion({ override: [completionSource] })],
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
      theme={customTheme}
    />
  );
};

export default Playground;
