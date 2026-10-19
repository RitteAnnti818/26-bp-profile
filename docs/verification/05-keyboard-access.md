# Keyboard access verification

- Rubric area: P41–P50
- Procedure: start at the address bar, press Tab through the skip link, menu, hero actions, activity links, theme toggle, and footer; activate links with Enter and the mobile menu checkbox with its labelled control.
- Expected: visible focus, no focus trap, working skip link, descriptive image alternatives, accessible icon names, and no uncontrolled motion.
- Local keyboard result on 2026-10-19 KST: Pass.
  - The first Tab focuses `본문으로 바로가기` with a solid 3 px focus ring; Enter moves to `#main-content`.
  - On a 390 px viewport, the third focus stop is the 44 × 44 px `메뉴 열기 또는 닫기` checkbox. Space opens the menu, Tab reaches `소개`, and Space closes it again after returning to the control.
  - The opened menu settles at full opacity on an opaque white background, all five page links remain visible, and no focus trap occurs.
  - Home and mode icons have Korean accessible names. The representative activity diagram has the alternative text `설정부터 배포 검증까지의 작업 흐름`.
- Public browser result: Pending deployment.

