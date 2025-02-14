import { Completion, CompletionContext } from "@codemirror/autocomplete";
import utilities from "./completions.json";

export const utilityCompletions: Completion[] = utilities;

export function completionSource(context: CompletionContext) {
  const classMatch = context.matchBefore(/class="([^"]*)$/);
  if (!classMatch) return null;

  const attributeValue = classMatch.text;
  const tokenMatch = /(\w*)$/.exec(attributeValue);
  const tokenPrefix = tokenMatch ? tokenMatch[1] : "";

  const from = classMatch.from + (attributeValue.length - tokenPrefix.length);

  const options = utilityCompletions.filter((c) => c.label.startsWith(tokenPrefix));

  return {
    from,
    options,
  };
}
