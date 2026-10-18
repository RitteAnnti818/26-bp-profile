# P01–P10: build and automated deployment

| ID | Implementation evidence | Final public check |
| --- | --- | --- |
| P01 | HTTPS project URL is recorded in `site/hugo.yaml`. | Open it in a signed-out window. |
| P02 | Workflow trigger and repository branch are both `main`. | Match the submitted full SHA. |
| P03 | `.github/workflows/deploy.yml` listens to `push` on `main`. | Link a push-triggered run. |
| P04 | The course helper runs Hugo and requires `public/index.html`. | Confirm the build job succeeds. |
| P05 | The deploy job uses the uploaded Pages artifact. | Confirm the deploy job succeeds. |
| P06 | A later content push must be visible on the public page. | Record before/after text and run URL. |
| P07 | The new repository must be public. | Open source and history signed out. |
| P08 | Hugo Extended 0.167.0 is pinned in the workflow. | Check the Actions log version line. |
| P09 | Theme source and license are vendored under `site/themes/`. | Build from a fresh clone. |
| P10 | Production base URL targets the new project repository. | Inspect canonical and asset URLs. |

