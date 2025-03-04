export const midnightTheme = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "attribute.name", foreground: "#dda2f6" },
    { token: "attribute.value", foreground: "#bec6f2" },
    { token: "comment", foreground: "#979cac" },
    { token: "delimiter.angle", foreground: "#dbbcd6" },
    { token: "delimiter.curly", foreground: "#dbbcd6" },
    { token: "delimiter.square", foreground: "#dbbcd6" },
    { token: "keyword", foreground: "#b9bed5" },
    { token: "meta.tag.custom", foreground: "#b9bed5" },
    { token: "meta.tag.doctype", foreground: "#b9bed5" },
    { token: "meta.tag.inline", foreground: "#b9bed5" },
    { token: "meta.tag.script", foreground: "#b9bed5" },
    { token: "meta.tag.style", foreground: "#b9bed5" },
    { token: "meta.tag.xml", foreground: "#b9bed5" },
    { token: "meta.tag", foreground: "#b9bed5" },
    { token: "number", foreground: "#b9bed5" },
    { token: "string", foreground: "#bec6f2" },
    { token: "tag", foreground: "#85b1e0" },
  ],
  colors: {
    "dropdown.background": "#2d3151",
    "editor.background": "#21243f",
    "editor.cursorColor": "#f4ebf3",
    "editor.foreground": "#b9bed5",
    "editor.lineHighlightBackground": "#1e2039",
    "editor.selectionBackground": "#3e3f4a",
    "editorFindWidget.background": "#21243f",
    "editorFindWidget.input.background": "#21243f",
    "editorHoverWidget.background": "#21243f",
    "editorSuggestWidget.background": "#21243f",
    "editorWidget.background": "#2d3151",
    "input.background": "#21243f",
  },
};

export const handleMount = (editor: any, monaco: any) => {
  monaco.editor.defineTheme("midnight", midnightTheme);
  monaco.editor.setTheme("midnight");
};
