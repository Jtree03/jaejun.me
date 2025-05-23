// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

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
				gtag: { trackingID: "G-H34WTT5JJB" },
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
					//     to: "https://handsomely-boater-32d.notion.site/bd1205fe4362494193019279f33500f1",
					//     label: "About",
					//     position: "right",
					// },
					{
						href: "https://github.com/Jtree03",
						label: "GitHub",
						position: "right",
					},
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
							// {
							//     label: "About",
							//     to: "https://handsomely-boater-32d.notion.site/bd1205fe4362494193019279f33500f1",
							// },
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
			image: "img/og-image.png",
		}),

	plugins: [
		async function googleAdsensePlugin() {
			const dataAdClient = "ca-pub-4869276592827991";

			const isProd = process.env.NODE_ENV === "production";
			return {
				name: "google-adsense-plugin",
				injectHtmlTags() {
					if (!isProd) {
						return {};
					}
					return {
						headTags: [
							{
								tagName: "link",
								attributes: {
									rel: "preconnect",
									href: "https://pagead2.googlesyndication.com",
								},
							},
							{
								tagName: "script",
								attributes: {
									async: true,
									src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${dataAdClient}`,
									crossorigin: "anonymous",
								},
							},
						],
					};
				},
			};
		},
	],
};

module.exports = config;
