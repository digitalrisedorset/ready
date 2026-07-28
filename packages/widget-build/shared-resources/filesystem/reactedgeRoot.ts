import { execSync } from "node:child_process";

export class ReactEdgeRoot {
    private static readonly root = execSync(
        "git rev-parse --show-toplevel",
        { encoding: "utf8" }
    ).trim();

    static get(): string {
        return this.root;
    }
}