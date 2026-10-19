# Two implemented feature changes

## Accessible landing navigation

- Before: the blog-oriented home page exposed posts but did not provide a direct path to every assignment evidence page.
- After: `site/layouts/home.html` adds a main landmark, skip link, labelled sections, and direct links to introduction, activities, experience, learning plan, and verification.
- Verification: navigation and keyboard procedures in `docs/verification/03-navigation-and-links.md` and `05-keyboard-access.md`.

## Project-path deployment

- Before: root-relative configuration would point assets at the user-site root.
- After: `site/hugo.yaml`, `.github-pages.json`, Hugo-generated links, and the build helper target `/26-bp-profile/`.
- Verification: build and asset checks in `docs/verification/01-build.md` and `02-paths-and-assets.md`.

