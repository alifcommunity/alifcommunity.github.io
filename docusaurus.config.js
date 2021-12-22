// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const githubOrgUrl = "https://github.com/alifcommunity";
const githubRepoUrl = "https://github.com/alifcommunity/next-website";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "لغة البرمجة العربية ألف - Arabic Programming Language",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `${githubRepoUrl}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          editUrl: `${githubRepoUrl}/tree/main/`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "ألف",
        logo: {
          alt: "شعار ألف",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "التوثيقات",
          },
          {
            href: githubOrgUrl,
            label: "GitHub",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "تعلّم",
            items: [
              {
                label: "التوثيقات",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "كن على صِلة",
            items: [
              {
                label: "تويتر",
                href: "https://twitter.com/aliflanguage",
              },
            ],
          },
          {
            title: "المزيد",
            items: [
              {
                label: "المدونة",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: githubOrgUrl,
              },
            ],
          },
        ],
        copyright: `مجتمع ألف - ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      i18n: { defaultLocale: "ar" },
    }),
};

module.exports = config;
