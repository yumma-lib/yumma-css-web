import { SandpackTheme } from "@codesandbox/sandpack-react";

const customSpTheme: SandpackTheme = {
  colors: {
    accent: "#FFFFFF",
    base: "#85B1E0",
    clickable: "#65737F",
    disabled: "#CCCCCC",
    error: "#FFCDCA",
    errorSurface: "#1F212A",
    hover: "#FFFFFF",
    surface1: "#1F212A",
    surface2: "#1F212A",
    surface3: "#1A1C22",
  },
  syntax: {
    plain: "#B9BED5",
    comment: {
      color: "#B9BED5",
      fontStyle: "italic",
    },
    definition: "#85B1E0",
    keyword: "#85B1E0",
    property: "#DDA2F6",
    punctuation: "#939293",
    static: "#AB9DF2",
    string: "#BEC6F2",
    tag: "#85B1E0",
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    lineHeight: "20px",
    mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: "15px",
  },
};

export default customSpTheme;
