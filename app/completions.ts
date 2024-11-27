import { Completion, CompletionContext } from "@codemirror/autocomplete";

export const utilityCompletions: Completion[] = [
  // { label: "d-f", type: "keyword", info: "display: flex" },
];

export function completionSource(context: CompletionContext) {
  let word = context.matchBefore(/\w*/);

  if (word?.from === word?.to && !context.explicit) return null;

  return {
    from: word ? word.from : 0,
    options: utilityCompletions,
  };
}
