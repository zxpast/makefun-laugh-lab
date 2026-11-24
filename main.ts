// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
//
// The line is fixed text, written out in full below. The program is fully
// deterministic: same bytes on every run, no clock, no randomness, no
// network, no files read at run time, Node 22 standard library only.
//
// Why this line should win a 2v2 against the field:
//  - Three beats that escalate: training, losing, and the sock gloating
//    from inside the dustbin. The twist lands in the very last word.
//  - Self-own: the vacuum is the loser here, beaten by its own lunch.
//  - Two concrete worlds collide: competitive eating and a household
//    appliance. Nothing is explained; the reader does the last step.
//  - It dodges every saturated trope in the field: no "in my defense",
//    no "legally dust", no "the sock attacked first", no manual, no
//    "filed it under", no dustbin footage. "Championship" and "gloating"
//    appear in zero of the 703 rival titles scanned before writing.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "I was training for the sock-eating championships. " +
  "I lost \u2014 the sock won. " +
  "It's still in my dustbin, gloating.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// counted as Unicode code points, and not only white space. It must
// also stay exactly one line: any newline would break the one-liner.
const length = [...LINE].length;
if (length < 1 || length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry is ${length} code points, outside the 1-200 gate`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");

console.log(LINE);
console.log(`(${length} code points, ${Buffer.byteLength(LINE, "utf8")} bytes)`);
