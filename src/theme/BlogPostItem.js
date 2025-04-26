import React, { useEffect, useRef } from "react";
import OriginalBlogPostItem from "@theme-original/BlogPostItem";
import { useThemeConfig } from "@docusaurus/theme-common";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";

function BlogPostItem(props) {
	const { isDarkTheme } = useThemeConfig();
	const { isBlogPostPage } = useBlogPost();
	const utterancesTheme = isDarkTheme ? "github-dark" : "github-light";
	const containerRef = useRef(null);

	useEffect(() => {
		if (!isBlogPostPage) return;

		const utterancesEl = containerRef.current.querySelector(
			"iframe.utterances-frame",
		);

		const createUtterancesEl = () => {
			const script = document.createElement("script");

			script.src = "https://utteranc.es/client.js";
			script.setAttribute("repo", "jtree03/jaejun.me");
			script.setAttribute("issue-term", "pathname");
			script.setAttribute("label", "blog_comment");
			script.setAttribute("theme", utterancesTheme);
			script.crossOrigin = "anonymous";
			script.async = true;

			containerRef.current.appendChild(script);
		};

		const postThemeMessage = () => {
			const message = {
				type: "set-theme",
				theme: utterancesTheme,
			};

			utterancesEl.contentWindow.postMessage(message, "https://utteranc.es");
		};

		utterancesEl ? postThemeMessage() : createUtterancesEl();
	}, [isBlogPostPage, utterancesTheme]);

	return (
		<>
			<OriginalBlogPostItem {...props} />
			{isBlogPostPage && <div ref={containerRef} />}
		</>
	);
}

export default BlogPostItem;
