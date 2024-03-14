NowInject Scripts
=================

Scripts for [NowInject][1], a feather-light browser injection kit for developers.

This repository is meant as an example `inject` directory for [NowInject][1]. Each subdirectory contains a single spec, in which three files are immediately meaningful:

- `matches.json`, a file containing patterns to match URLs
- optional `inject.css`, the styles to inject into pages matching the patterns
- optional `inject.js`, the code to inject into pages matching the patterns

The format of `matches.json` is described on [MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

Two files, `base.css` and `base.js`, serve as common code for all your styles and scripts.

It is probably easy to guess that readability and dark mode motivate almost every one of these examples:

- [68k News](http://68k.news/)
- [Text-only CNN](https://lite.cnn.com/)
- [NWS Forecast](https://forecast.weather.gov/MapClick.php?CityName=New+Orleans&state=LA&site=LIX&textField1=30.0658&textField2=-89.9314&e=0)
- [MDN](https://developer.mozilla.org/en-US/docs/Web)
- [Wikipedia](https://en.wikipedia.org/wiki/World_Wide_Web)

Note
----

The build leaves files named `built-path.js` in your inject subdirectories, which is unfortunate but makes for a convenient way to load CSS. The solution adopted here is adding `built-path.js` to `.gitignore`, and refraining from adding files with that name.

[1]: https://github.com/now-is/nowinject
