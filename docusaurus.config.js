// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const packageJson = require("./package.json");

const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Chakra UI",
  tagline: "Dinosaurs are cool",
  url: "https://chakra-ui.com",
  baseUrl: "/Cartoon-Street",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "ishikawa-masashi", // Usually your GitHub org/user name.
  projectName: "Cartoon-Street", // Usually your repo name.
  deploymentBranch: "gh-pages",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        logo: {
          alt: "Chakra UI Logo",
          //   src: "img/logo.svg",
          src: "../img/タイトルロゴ.png",
          srcDark: "img/logo-dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            docsPluginId: "getting-started",
            position: "left",
            label: "Getting Started",
          },
          {
            to: "/docs/introduction",
            position: "left",
            label: "Reference",
            items: [
              {
                type: "doc",
                docId: "components/index",
                docsPluginId: "docs",
                label: "Components",
              },
              {
                type: "doc",
                docId: "hooks/use-boolean",
                docsPluginId: "docs",
                label: "Hooks",
              },
              {
                type: "doc",
                docId: "styled-system/style-props",
                docsPluginId: "docs",
                label: "Styled System",
              },
            ],
          },
          {
            type: "doc",
            docId: "index",
            docsPluginId: "community",
            position: "left",
            label: "Community",
          },
          { to: "/changelog", label: "Changelog", position: "left" },
          {
            position: "right",
            // @ts-ignore
            label: `v${packageJson.dependencies["@chakra-ui/react"]}`,
            items: [
              {
                label: "v1.8.8",
                href: "https://v1.chakra-ui.com",
              },
              {
                label: "v0.8.x",
                href: "https://v0.chakra-ui.com",
              },
            ],
          },
        ],
      },
      algolia: {
        indexName: "chakra-ui",
        apiKey: "df1dcc41f7b8e5d68e73dd56d1e19701",
        appId: "BH4D9OD16A",
        contextualSearch: true,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: [
    [
      "@docusaurus/theme-classic",
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    "@docusaurus/theme-search-algolia",
    "@docusaurus/theme-live-codeblock",
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        path: "./content/changelog",
        routeBasePath: "changelog",
        postsPerPage: 1,
        blogSidebarCount: "ALL",
        showReadingTime: false,
        blogSidebarTitle: "Changelogs",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "getting-started",
        routeBasePath: "/getting-started",
        path: "./content/getting-started",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        exclude: ["**/**.example.mdx"],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cartoons",
        routeBasePath: "/",
        path: "./content/cartoons",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        exclude: ["**/**.example.mdx"],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs",
        routeBasePath: "/docs",
        path: "./content/docs",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        exclude: ["**/**.example.mdx"],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "community",
        routeBasePath: "/community",
        path: "./content/community",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        exclude: ["**/**.example.mdx"],
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects(existingPath) {
          if (existingPath.includes("/frameworks")) {
            return [existingPath.replace("/frameworks", "")];
          }

          if (existingPath.includes("/integrations")) {
            return [existingPath.replace("/integrations", "")];
          }
          return undefined;
        },
      },
    ],
    "@docusaurus/plugin-sitemap",
  ],
};

module.exports = config;
