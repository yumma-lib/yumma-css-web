import { content } from "../../public/content";
import { Sandpack } from "@codesandbox/sandpack-react";
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
      "/page.html": {
        code: "",
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
          "https://cdn.jsdelivr.net/gh/yumma-lib/yumma-css@release/dist/yumma.min.css",
        ],
        showInlineErrors: true,
        showRefreshButton: false,
        showTabs: true,
      }}
      theme={customTheme}
    />
  );
};

export default Playground;
