// Five Seconds to Explain the Glass — make.fun entry.
// Writes the one sentence a house cat would say in its own defence
// in the five seconds after sweeping a glass off the table.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
import { mkdir, writeFile } from "node:fs/promises";

const ENTRY =
  "The glass had been squatting in my sunbeam for hours without paying rent, so I evicted it.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1-200`);
}
// The judge compares single sentences: exactly one sentence-ending mark.
if (ENTRY.split(/[.!?]/).filter((part) => part.trim().length > 0).length !== 1) {
  throw new Error("entry must be exactly one sentence");
}

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", ENTRY, "utf8");
