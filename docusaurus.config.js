// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "조재준",
  tagline: "JaeJun's blog site.",
  url: "https://jaejun.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Jtree03",
  projectName: "jaejun.me",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/Jtree03/jaejun.me/blob/main",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: { trackingID: "UA-201234083-1" },
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
      googleAdsense: {
        dataAdClient: 'ca-pub-4869276592827991',
      },
    }),

    plugins: ['docusaurus-plugin-google-adsense'],
};

module.exports = config;
