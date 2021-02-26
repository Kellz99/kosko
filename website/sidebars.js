"use strict";

const globby = require("globby");
const { groupBy, startCase } = require("lodash");
const { extname } = require("path");

const apiDocIds = globby
  .sync(["docs/api/**/*.md", "!docs/api/*.md"], {
    cwd: __dirname
  })
  .map((path) => path.split("/").slice(1).join("/"))
  .map((path) => path.substring(0, path.length - extname(path).length));

const apiDocGroups = groupBy(apiDocIds, (path) => path.split("/")[1]);

module.exports = {
  docs: {
    Introduction: [
      "getting-started",
      "overview",
      "components",
      "environments",
      "templates"
    ],
    Guides: [
      "loading-kubernetes-yaml",
      "typescript-support",
      "programmatic-usage",
      "troubleshooting"
    ],
    References: ["commands", "configuration"]
  },
  api: [
    "api/modules",
    ...Object.entries(apiDocGroups).map(([key, values]) => ({
      type: "category",
      label: startCase(key),
      items: values
    }))
  ]
};
