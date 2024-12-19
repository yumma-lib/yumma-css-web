import { autocompletion } from "@codemirror/autocomplete";
import { completionSource } from "../completions";
import { customCmTheme } from "../themes/cmTheme";
import { app, styles } from "../constants/content";
import { Sandpack } from "@codesandbox/sandpack-react";
import customSpTheme from "../themes/spTheme";

const Playground: React.FC = () => {
  return (
    <Sandpack
      customSetup={{
        
        dependencies: {
          yummacss: "latest",
        },
      }}
      files={{
        "App.js": app,
        "styles.css": styles,
      }}
      options={{
        codeEditor: {
          extensions: [autocompletion({ override: [completionSource] }), customCmTheme],
        },
        bundlerURL: "https://sandpack-bundler.codesandbox.io",
        closableTabs: true,
        editorHeight: "90dvh",
        showInlineErrors: true,
        showLineNumbers: true,
        showRefreshButton: false,
        wrapContent: true,
      }}
      template="react"
      theme={customSpTheme}
    />
  );
};

export default Playground;
