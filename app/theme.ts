import { SandpackTheme } from "@codesandbox/sandpack-react";

const customTheme: SandpackTheme = {
  colors: {
    accent: "#ffffff",
    base: "#85b1e0",
    clickable: "#65737f",
    disabled: "#cccccc",
    error: "#ffcdca",
    errorSurface: "#c24038",
    hover: "#ffffff",
    surface1: "#1f212a",
    surface2: "transparent",
    surface3: "#1a1c22",
  },
  syntax: {
    plain: "#b9bed5",
    comment: {
      color: "#b9bed5",
      fontStyle: "italic",
    },
    definition: "#85b1e0",
    keyword: "#85b1e0",
    property: "#dda2f6",
    punctuation: "#939293",
    static: "rgb(171, 157, 242)",
    string: "#9aefea",
    tag: "#85b1e0",
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    lineHeight: "20px",
    mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: "15px",
  },
};

export default customTheme;
