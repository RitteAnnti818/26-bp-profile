# Valid commit count record

- Counting rule: include only actual assignment settings, content, code, verification, and documentation in the submitted `main` history.
- Exclude: the vendored theme-only commit, empty commits, generated `public/`, unchanged merges, and number-only padding.
- Start SHA and inclusion: `[enter the first valid assignment commit and whether included]`
- Final full SHA: `[enter after final push]`
- Candidate count: `[N]`
- Excluded count: `[E]`
- Valid count: `[N-E]`
- Commit list URL: `https://github.com/RitteAnnti818/2026-beginner-project-portfolio/commits/main/`

```powershell
git log --reverse --format="%H`t%an`t%ad`t%s" --date=iso-strict START_SHA^..FINAL_SHA
git rev-list --count START_SHA^..FINAL_SHA
```

