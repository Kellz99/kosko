"use strict";

const globby = require("globby");
const { dirname } = require("path");

const organizationName = "tommy351";
const projectName = "kosko";
const githubUrl = `https://github.com/${organizationName}/${projectName}`;

module.exports = {
  title: "Kosko",
  tagline: "Organize Kubernetes manifests in JavaScript.",
  url: "https://kosko.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName,
  projectName,
  themeConfig: {
    image: "img/logo.png",
    metadata: [{ name: "twitter:card", content: "summary" }],
    navbar: {
      title: "Kosko",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      items: [
        {
          type: "doc",
          label: "Docs",
          position: "left",
          docId: "getting-started"
        },
        {
          type: "doc",
          label: "API",
          position: "left",
          docId: "api/index"
        },
        { to: "blog", label: "Blog", position: "left" },
        { to: "play", label: "Playground", position: "left" },
        {
          href: githubUrl,
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Tommy Chen. Built with Docusaurus.`
    },
    prism: {
      additionalLanguages: ["toml"],
      theme: require("prism-react-renderer/themes/oceanicNext")
    },
    algolia: {
      appId: "DAH00NTYY8",
      apiKey: "7e5f9782393bd0e6a947b2de73f4f1de",
      indexName: "kosko"
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `${githubUrl}/edit/master/website/`
        },
        blog: {
          showReadingTime: true,
          editUrl: `${githubUrl}/edit/master/website/blog/`
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss")
        },
        gtag: {
          trackingID: "G-2CPELJ4990",
          anonymizeIP: true
        }
      }
    ]
  ],
  plugins: [
    "docusaurus-plugin-sass",
    require.resolve("./plugins/lodash-webpack-plugin"),
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: globby
          .sync("packages/*/tsconfig.json", {
            cwd: dirname(__dirname),
            absolute: true
          })
          .map((path) => dirname(path)),
        entryPointStrategy: "packages",
        sidebar: {
          fullNames: true
        },
        readme: "none",
        excludePrivate: true
      }
    ]
  ]
};
