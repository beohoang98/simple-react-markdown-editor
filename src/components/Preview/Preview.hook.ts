import hljs from "highlight.js";
import marked from "marked";
import { RefObject, useEffect } from "react";
import { Events } from "../../core/Events";
import "highlight.js/styles/monokai.css";

marked.setOptions({
    gfm: true,
    highlight(code, language) {
        return hljs.highlightAuto(code).value;
    },
    langPrefix: "hljs language-",
    sanitize: true,
    smartLists: true,
    baseUrl: "#",
});

export function useWheelBehavior(contentRef: RefObject<HTMLElement>) {
    useEffect(() => {
        const scrollSub = Events.ScrollChange$.subscribe((delta) => {
            if (contentRef.current) {
                contentRef.current.scrollTop = delta;
            }
        });
        return () => scrollSub.unsubscribe();
    }, [contentRef]);
}

export function useTextChange(contentRef: RefObject<HTMLElement>) {
    useEffect(() => {
        const sub = Events.TextChange$.subscribe((rawMarkdown) => {
            if (contentRef.current) {
                contentRef.current.innerHTML = marked(rawMarkdown);
            }
        });
        return () => {
            sub.unsubscribe();
        };
    }, [contentRef]);
}
