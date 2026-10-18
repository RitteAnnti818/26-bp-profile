# Manual QA: URLs and assets

Use a production build with the project base URL, then serve the parent directory so the repository prefix remains in the request path. In browser developer tools, disable cache and reload the home page and representative activity page.

Require HTTP 200 for the fingerprinted stylesheet, main JavaScript, local font files, processed avatar variants, favicon, and workflow SVG. Inspect generated HTML for local-machine URLs and mixed HTTP content. Record the request URL and status for one CSS, one script, and each meaningful image.

