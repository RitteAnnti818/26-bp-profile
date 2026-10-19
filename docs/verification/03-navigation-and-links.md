# Navigation and link verification

- Rubric area: P21–P30
- Checks: page menu, direct page URLs, back-to-top, GitHub, email, and Hugo theme links.
- Expected: each label reaches its named target; no empty or placeholder `#` link exists.
- Local browser result on 2026-10-19 KST: Pass. The home menu exposes `about`, `experience`, `projects`, `learning`, and `verification`; the representative activity opens directly at `/projects/portfolio-site/`, and its seven in-page links point to the matching section IDs.
- Generated-output review: Pass. The home, GitHub, email, theme-credit, feed, icon, stylesheet, script, and page links use either the configured project path or an intentional external URL. The theme-mode control's `href="#"` is handled by its local script and is not a placeholder navigation link.
- Public result: Pending deployment and signed-out browser verification.

