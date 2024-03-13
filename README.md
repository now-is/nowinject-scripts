NowInject Scripts
=================

Scripts for [NowInject][1], a feather-light browser injection kit for developers.

Each subdirectory contains a single spec, in which three files are immediately meaningful:

- `matches.json`, a file containing patterns to match URLs
- optional `inject.css`, the styles to inject into pages matching the patterns
- optional `inject.js`, the code to inject into pages matching the patterns

The format of `matches.json` is described on [MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

Two files, `base.css` and `base.js`, serve as common code for all your styles and scripts.

This repository is meant as an example `inject` directory for [NowInject][1].

Note
----

The build leaves files named `built-path.js` in your inject subdirectories, which is unfortunate but makes for a convenient way to load CSS. The solution adopted here is adding `built-path.js` to `.gitignore`, and refraining from adding files with that name.

[1]: https://github.com/now-is/nowinject
