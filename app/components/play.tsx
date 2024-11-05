import { autocompletion } from "@codemirror/autocomplete";
import { pageContent } from "../constants/content";
import { Sandpack } from "@codesandbox/sandpack-react";
import customTheme from "../theme";

const Playground: React.FC = () => {
  return (
    <Sandpack
      template="static"
      options={{
        codeEditor: {
          extensions: [autocompletion()],
        },
        externalResources: [
          "../../node_modules/yummacss/dist/yumma-core.min.css",
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
