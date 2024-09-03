import { pageContent, welcomeComment } from "../../public/content";
import { Sandpack } from "@codesandbox/sandpack-react";
import customTheme from "../theme";

const Playground: React.FC = () => {
  return (
    <Sandpack
      template="static"
      options={{
        closableTabs: true,
        editorHeight: "92.9dvh",
        externalResources: [
          "https://cdn.jsdelivr.net/gh/yumma-lib/yumma-css@2.0.0/dist/yumma.min.css",
        ],
        showInlineErrors: true,
        showRefreshButton: false,
        showTabs: true,
        visibleFiles: ["/index.html", "/welcome.html"],
      }}
      files={{
        "/index.html": pageContent,
        "/welcome.html": welcomeComment,
      }}
      theme={customTheme}
    />
  );
};

export default Playground;
