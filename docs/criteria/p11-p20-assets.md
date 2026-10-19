# P11–P20: assets and project paths

The production build must be inspected beneath `/2026-beginner-project-portfolio/`, not only at a local domain root.

- P11–P12: verify fingerprinted theme CSS and JavaScript return HTTP 200 and the theme toggle/back-to-top interactions work.
- P13: verify the avatar generated from `site/assets/avatar.jpg` is visible and has the author name as alt text.
- P14: verify removed project images are no longer requested and the remaining profile asset loads correctly.
- P15: verify local Roboto fonts and inline SVG icons render, while text remains usable if they do not.
- P16–P17: open both the project home and `/experience/` directly beneath the repository prefix.
- P18: compare URL casing with tracked file names on Git.
- P19: search generated HTML for `localhost`, `127.0.0.1`, `file:`, and Windows absolute paths.
- P20: confirm every required public asset uses HTTPS or a same-origin relative URL.

