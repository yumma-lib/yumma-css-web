import Editor from "@monaco-editor/react";
import { useActiveCode, SandpackStack, FileTabs, useSandpack } from "@codesandbox/sandpack-react";

function MonacoEditor() {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();

  return (
    <SandpackStack style={{ height: "100vh", margin: 0 }}>
      <FileTabs />
      <div style={{ flex: 1, paddingTop: 8, background: "#1e1e1e" }}>
        <Editor
          defaultValue={code}
          key={sandpack.activeFile}
          onChange={(value) => updateCode(value || "")}
          options={{ minimap: { enabled: false } }}
          theme="vs-dark"
        />
      </div>
    </SandpackStack>
  );
}

export default MonacoEditor;
