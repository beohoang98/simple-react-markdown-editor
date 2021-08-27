(this["webpackJsonpreact-markdown-editor"]=this["webpackJsonpreact-markdown-editor"]||[]).push([[0],{17:function(n,e,t){},2:function(n,e,t){n.exports={app:"App_app__1kX79",split:"App_split__3Sasx",editor:"App_editor__28Gqx",preview:"App_preview__hvNF4"}},230:function(n,e,t){"use strict";t.r(e);var i=t(1),o=t.n(i),a=t(10),r=t.n(a),s=(t(17),t(2)),c=t.n(s),l=t(12),u=t(232),d={TextChange$:new u.a(""),ScrollChange$:new u.a(0)},h=t(4),p=t.n(h),m=t(0),b=function(){var n=Object(i.useState)('---\n__Advertisement :)__\n\n- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image\n  resize in browser.\n- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly\n  i18n with plurals support and easy syntax.\n\nYou will like those projects!\n\n---\n\n# h1 Heading 8-)\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n\n\n## Horizontal Rules\n\n___\n\n---\n\n***\n\n\n## Typographic replacements\n\nEnable typographer option to see result.\n\n(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n\ntest.. test... test..... test?..... test!....\n\n!!!!!! ???? ,,  -- ---\n\n"Smartypants, double quotes" and \'single quotes\'\n\n\n## Emphasis\n\n**This is bold text**\n\n__This is bold text__\n\n*This is italic text*\n\n_This is italic text_\n\n~~Strikethrough~~\n\n\n## Blockquotes\n\n\n> Blockquotes can also be nested...\n>> ...by using additional greater-than signs right next to each other...\n> > > ...or with spaces between arrows.\n\n\n## Lists\n\nUnordered\n\n+ Create a list by starting a line with `+`, `-`, or `*`\n+ Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\nOrdered\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. Integer molestie lorem at massa\n\n\n1. You can use sequential numbers...\n1. ...or keep all the numbers as `1.`\n\nStart numbering with offset:\n\n57. foo\n1. bar\n\n\n## Code\n\nInline `code`\n\nIndented code\n\n    // Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\n\nBlock code "fences"\n\n```\nSample text here...\n```\n\nSyntax highlighting\n\n``` js\nvar foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n```\n\n## Tables\n\n| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option | Description |\n| ------:| -----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\n\n## Links\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n\n\n## Images\n\n![Minion](https://octodex.github.com/images/minion.png)\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\n\nLike links, Images also have a footnote style syntax\n\n![Alt text][id]\n\nWith a reference later in the document defining the URL location:\n\n[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"\n\n\n## Plugins\n\nThe killer feature of `markdown-it` is very effective support of\n[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).\n\n\n### [Emojies](https://github.com/markdown-it/markdown-it-emoji)\n\n> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:\n>\n> Shortcuts (emoticons): :-) :-( 8-) ;)\n\nsee [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.\n\n\n### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)\n\n- 19^th^\n- H~2~O\n\n\n### [\\<ins>](https://github.com/markdown-it/markdown-it-ins)\n\n++Inserted text++\n\n\n### [\\<mark>](https://github.com/markdown-it/markdown-it-mark)\n\n==Marked text==\n\n\n### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)\n\nFootnote 1 link[^first].\n\nFootnote 2 link[^second].\n\nInline footnote^[Text of inline footnote] definition.\n\nDuplicated footnote reference[^second].\n\n[^first]: Footnote **can have markup**\n\n    and multiple paragraphs.\n\n[^second]: Footnote text.\n\n\n### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)\n\nTerm 1\n\n:   Definition 1\nwith lazy continuation.\n\nTerm 2 with *inline markup*\n\n:   Definition 2\n\n        { some code, part of Definition 2 }\n\n    Third paragraph of definition 2.\n\n_Compact style:_\n\nTerm 1\n  ~ Definition 1\n\nTerm 2\n  ~ Definition 2a\n  ~ Definition 2b\n\n\n### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)\n\nThis is HTML abbreviation example.\n\nIt converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.\n\n*[HTML]: Hyper Text Markup Language\n\n### [Custom containers](https://github.com/markdown-it/markdown-it-container)\n\n::: warning\n*here be dragons*\n:::\n'),e=Object(l.a)(n,2),t=e[0],o=e[1],a=Object(i.useRef)(null),r=Object(i.useCallback)((function(n){o(n.target.value)}),[]),s=Object(i.useCallback)((function(n){d.ScrollChange$.next(n.currentTarget.scrollTop)}),[]);return Object(i.useEffect)((function(){d.TextChange$.next(t)}),[t]),Object(i.useEffect)((function(){var n=d.ScrollChange$.subscribe((function(n){a.current&&(a.current.scrollTop=n)}));return function(){return n.unsubscribe()}}),[]),Object(m.jsxs)("div",{className:p.a.editor,children:[Object(m.jsx)("h3",{className:p.a.header,children:"Editor"}),Object(m.jsx)("textarea",{ref:a,onScroll:s,className:p.a.input,onInput:r,value:t})]})},g=t(11),f=t.n(g),w=t(8),k=t.n(w);t(229);k.a.setOptions({gfm:!0,highlight:function(n,e){return f.a.highlightAuto(n).value},langPrefix:"hljs language-",sanitize:!0,smartLists:!0,baseUrl:"#"});var x=t(5),_=t.n(x),j=function(){var n=Object(i.useRef)(null),e=Object(i.useCallback)((function(n){d.ScrollChange$.next(n.currentTarget.scrollTop)}),[]);return function(n){Object(i.useEffect)((function(){var e=d.TextChange$.subscribe((function(e){n.current&&(n.current.innerHTML=k()(e))}));return function(){e.unsubscribe()}}),[n])}(n),function(n){Object(i.useEffect)((function(){var e=d.ScrollChange$.subscribe((function(e){n.current&&(n.current.scrollTop=e)}));return function(){return e.unsubscribe()}}),[n])}(n),Object(m.jsxs)("div",{className:_.a.preview,children:[Object(m.jsx)("h3",{className:_.a.header,children:"Preview"}),Object(m.jsx)("div",{ref:n,onWheel:e,className:_.a.content})]})};var v=function(){return Object(m.jsxs)("div",{className:c.a.app,children:[Object(m.jsx)("div",{className:c.a.editor,children:Object(m.jsx)(b,{})}),Object(m.jsx)("div",{className:c.a.split}),Object(m.jsx)("div",{className:c.a.preview,children:Object(m.jsx)(j,{})})]})},T=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,233)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),o(n),a(n),r(n)}))};r.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),T()},4:function(n,e,t){n.exports={editor:"Editor_editor__2aEyo",header:"Editor_header__1Focb",input:"Editor_input__2T5CN"}},5:function(n,e,t){n.exports={preview:"Preview_preview__1B3xD",header:"Preview_header__1Oba4",content:"Preview_content__2bnu2"}}},[[230,1,2]]]);
//# sourceMappingURL=main.547e7fa0.chunk.js.map