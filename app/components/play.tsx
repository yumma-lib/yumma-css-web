import { pageContent } from "../constants/content";
import { Sandpack } from "@codesandbox/sandpack-react";
import customTheme from "../theme";
import { autocompletion } from "@codemirror/autocomplete";

const Playground: React.FC = () => {
  return (
    <Sandpack
      template="static"
      options={{
        codeEditor: {
          extensions: [autocompletion()],
        },
        externalResources: [
          "https://cdn.jsdelivr.net/gh/yumma-lib/yumma-css@latest/dist/yumma.min.css",
        ],
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
