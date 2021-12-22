// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const githubOrgUrl = "https://github.com/alifcommunity";
const githubRepoUrl = "https://github.com/alifcommunity/next-website";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "لغة البرمجة العربية ألف - Arabic Programming Language",
  tagline: "لغة ألف",

  organizationName: "alifcommunity",
  projectName: "alifcommunity.github.io",
  url: "https://alifcommunity.github.io/",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "images/favicon.png",

  i18n: { defaultLocale: "ar", locales: ["ar"] },

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
        // title: "ألف",
        logo: {
          alt: "شعار ألف",
          src: "images/alif-group.jpg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "التوثيقات",
          },
          {
            href: "https://alifcommunity.github.io/alif-editor",
            position: "left",
            label: "محرر ألف",
          },
          {
            href: githubOrgUrl,
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
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
              {
                label: "تيليجرام",
                href: "https://t.me/aliflang",
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
        copyright: `الحقوق محفوطة © ${new Date().getFullYear()} - مجتمع ألف`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "R2IYF7ETH7",
        apiKey: "599cec31baffa4868cae4e79f180729b",
        indexName: "docsearch",
        contextualSearch: true,
      },
    }),
};

module.exports = config;
