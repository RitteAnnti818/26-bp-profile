# Problem, fix, and retest record

- Observation: Hugo 0.167.0 completed the first build but warned that `languageName` and `languageCode` were deprecated.
- Cause and judgment: the theme example still used older multilingual keys. Keeping warnings would make future Hugo upgrades less predictable.
- Fix: replace `languageName` with `label`, retain `locale: ko-KR`, and remove the redundant deprecated `languageCode` key in `site/hugo.yaml`.
- Local retest: the production build completed with 17 pages and no language-key deprecation warning.
- Public retest: pending the first deployment; confirm the final Actions log uses Hugo Extended 0.167.0 and completes without this warning.

## Mobile menu keyboard access

- Observation: the original theme hid its menu checkbox with `display: none`, so a keyboard user at mobile width could not open the collapsed navigation.
- Cause and judgment: the visible label responded to pointer input, but its associated native control was removed from the focus order. This made the five primary pages unreachable through the collapsed menu without a pointer.
- Fix: add a local header override with Korean accessible names, keep the checkbox as an invisible 44 × 44 px focusable control, draw a 3 px focus ring on the menu icon, and give the opened light-mode panel an opaque background.
- Local retest on 2026-10-19 KST: at 390 × 844 px, Tab focuses the labelled checkbox, Space opens it, Tab enters the five navigation links, and Space closes it. The menu reaches full opacity, remains within the 390 px viewport, and the same links remain visible after resizing to 1440 px.
- Public retest: pending deployment; repeat the keyboard sequence in a signed-out browser.

