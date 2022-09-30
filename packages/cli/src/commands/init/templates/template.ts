import fs from "fs/promises";
import { join } from "path";
import { File } from "./base";

const TEMPLATE_DIR = join(__dirname, "../../../../templates");

export async function generateFromTemplateFile(
  path: string,
  template = path
): Promise<File> {
  return {
    path,
    content: await fs.readFile(join(TEMPLATE_DIR, template), "utf8")
  };
}

export function generateReadme() {
  return generateFromTemplateFile("README.md");
}
