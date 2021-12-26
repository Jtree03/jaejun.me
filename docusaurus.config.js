// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "JaeJun.me",
  tagline: "JaeJun's blog site.",
  url: "http://jaejun.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "jtree03", // Usually your GitHub org/user name.
  projectName: "jaejun.me", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          // blogSidebarTitle: "All posts",
          // blogSidebarCount: "ALL",
          editUrl: "https://github.com/jtree03/jaejun.me/",
          routeBasePath: "/",
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
        title: "JaeJun.me",
        logo: {
          alt: "JaeJun.me Logo",
          src: "img/favicon.ico",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Tutorial",
          // },
          // { to: "/", label: "Blog", position: "left" },
          { to: "/about", label: "About", position: "right" },
          // {
          //   href: "https://github.com/Jtree03",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Site",
            items: [
              {
                label: "Blog",
                to: "/",
              },
              {
                label: "About",
                to: "/about",
              },
            ],
          },
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Tutorial",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          {
            title: "Email",
            items: [
              {
                label: "Gmail",
                href: "mailto:wowns0903@gmail.com",
              },
              {
                label: "Naver",
                href: "mailto:wowns0903@naver.com",
              },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/docusaurus",
              // },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Jtree03",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JaeJun Jo, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
