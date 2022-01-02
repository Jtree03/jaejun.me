import React, { useEffect, useRef } from "react";
import OriginalBlogPostItem from "@theme-original/BlogPostItem";
import useThemeContext from "@theme/hooks/useThemeContext";

function BlogPostItem(props) {
  const { isDarkTheme } = useThemeContext();
  const utterancesTheme = isDarkTheme ? "github-dark" : "github-light";
  const containerRef = useRef(null);

  useEffect(() => {
    if (!props.isBlogPostPage) return;

    const utterancesEl = containerRef.current.querySelector(
      "iframe.utterances-frame"
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
  }, [utterancesTheme]);

  return (
    <>
      <OriginalBlogPostItem {...props} />
      {props.isBlogPostPage && <div ref={containerRef} />}
    </>
  );
}

export default BlogPostItem;
