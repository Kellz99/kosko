import { Template } from "@kosko/template";
import { join } from "path";

/**
 * @public
 */
export interface Options {
  name: string;
}

export const INDEX_SCRIPT = `"use strict";

module.exports = {};
`;

/**
 * @public
 */
export const template: Template<Options> = {
  description: "Create a new environment",
  options: {
    name: {
      type: "string",
      description: "Environment name",
      required: true
    }
  },
  async generate({ name }) {
    return {
      files: [
        {
          path: join("environments", name, "index.js"),
          content: INDEX_SCRIPT
        }
      ]
    };
  }
};
