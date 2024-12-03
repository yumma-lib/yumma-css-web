import { Completion, CompletionContext } from "@codemirror/autocomplete";
import utilities from "./completions.json";

export const utilityCompletions: Completion[] = utilities;

export function completionSource(context: CompletionContext) {
  let word = context.matchBefore(/\w*/);

  if (word?.from === word?.to && !context.explicit) return null;

  return {
    from: word ? word.from : 0,
    options: utilityCompletions,
  };
}
