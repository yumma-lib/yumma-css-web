import { pageContent } from "./constants/content";
import { Sandpack } from "@codesandbox/sandpack-react";
import customTheme from "../theme";

const Playground: React.FC = () => {
  return (
    <Sandpack
      template="static"
      options={{
        externalResources: [
          "https://cdn.jsdelivr.net/gh/yumma-lib/yumma-css@2.0.0/dist/yumma.min.css",
        ],
        editorHeight: "90dvh",
        showInlineErrors: true,
        showTabs: true,
      }}
      files={{
        "/index.html": pageContent
      }}
      theme={customTheme}
    />
  );
};

export default Playground;
