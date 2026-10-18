# Problem, fix, and retest record

- Observation: Hugo 0.167.0 completed the first build but warned that `languageName` and `languageCode` were deprecated.
- Cause and judgment: the theme example still used older multilingual keys. Keeping warnings would make future Hugo upgrades less predictable.
- Fix: replace `languageName` with `label`, retain `locale: ko-KR`, and remove the redundant deprecated `languageCode` key in `site/hugo.yaml`.
- Local retest: the production build completed with 17 pages and no language-key deprecation warning.
- Public retest: pending the first deployment; confirm the final Actions log uses Hugo Extended 0.167.0 and completes without this warning.

