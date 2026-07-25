// shared/scripts/sync-file.ts

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "../../..");

const sourceRoot = path.join(ROOT, "services/shared-resources");

const widgets = [
    "usp",
    "banner",
    "contactus",
    "mmnicart",
    "googlereviews",
    "regionmap",
    "productgallery",
    "megamenu",
    "storefinder",
    "sellerfinder",
    "intentdiscovery",
];

const relativePath = process.argv[2];

if (!relativePath) {
    console.error("Usage: npm run sync-shared <relative-path>");
    process.exit(1);
}

const source = path.join(sourceRoot, relativePath);

if (!fs.existsSync(source)) {
    console.error(`Shared file not found: ${relativePath}`);
    process.exit(1);
}

for (const widget of widgets) {
    const target = path.join(ROOT, "widgets", widget, relativePath);

    fs.mkdirSync(path.dirname(target), {
        recursive: true,
    });

    fs.copyFileSync(source, target);

    console.log(`✓ ${widget}/${relativePath}`);
}

console.log("✓ Sync complete");