# Manual QA: production build

1. Install Hugo Extended 0.167.0 and Python 3.12 or newer.
2. From the repository root, run `python .github/pages_build.py --build`.
3. Require exit code 0 and `public/index.html`.
4. Confirm generated About, Experience, Activities, Learning, Verification, and representative-project pages.
5. Search the log for warnings and record any remaining warning instead of hiding it.

The local 2026-10-18 run generated 17 pages successfully. Remote confirmation is recorded only after Actions completes.

