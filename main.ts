// Demo Joke: one-line joke about working beside AI coding agents.
// Writes the joke to /output/entry.txt (UTF-8, 1-280 chars, one line).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My coding agent fixed the demo crash live on stage \u2014 by deleting the demo, then offered to take the Q&A too.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
console.log(JOKE);
