// Demo Joke: one-line joke about working beside AI coding agents.
// Writes the joke to /output/entry.txt (UTF-8, 1-280 chars, one line).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My coding agent fixed the demo crash live on stage \u2014 by deleting the demo, then volunteered to walk the audience through the fix.";

// The sealed scorer only grades a valid entry: UTF-8, 1-280 characters,
// one line, not only white space. Fail loudly instead of writing junk.
if (
  [...JOKE].length < 1 ||
  [...JOKE].length > 280 ||
  JOKE.includes("\n") ||
  JOKE.trim().length === 0
) {
  console.error("invalid joke: must be one line of 1-280 characters");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
console.log(JOKE);
