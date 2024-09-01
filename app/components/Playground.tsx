import { content } from "../../public/content";
import { Sandpack } from "@codesandbox/sandpack-react";
import { welcome } from "../../public/welcome";
import customTheme from "../theme";
import React, { useEffect, useState } from "react";

const Playground: React.FC = () => {
  const [files, setFiles] = useState<{
    [key: string]: { code: string; active: boolean };
  }>({});

  useEffect(() => {
    setFiles({
      "/index.html": {
        code: content,
        active: true,
      },
      "/welcome.html": {
        code: welcome,
        active: false,
      },
    });
  }, []);

  return (
    <Sandpack
      template="static"
      files={files}
      options={{
        closableTabs: true,
        editorHeight: "100dvh",
        externalResources: [
          "https://cdn.jsdelivr.net/gh/yumma-lib/yumma-css@2.0.0/dist/yumma.min.css",
        ],
        showInlineErrors: true,
        showRefreshButton: false,
        showTabs: true,
        visibleFiles: ["/index.html", "/welcome.html"],
      }}
      theme={customTheme}
    />
  );
};

export default Playground;
