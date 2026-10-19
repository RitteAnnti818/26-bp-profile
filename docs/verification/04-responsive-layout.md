# Responsive layout verification

- Rubric area: P31–P40
- Viewports: 1440 × 900, 768 × 900, and 390 × 844 CSS pixels.
- Expected: no horizontal overflow, overlap, clipped text, or distorted images; mobile menu remains operable after resizing.
- Local browser result on 2026-10-19 KST: Pass.
  - 390 × 844: document width equals viewport width (390 px); the cards use one column; both primary actions are 308 × 64 px; the opened menu remains fully visible.
  - 720 × 900: document width equals viewport width (720 px), used as the narrow-layout approximation for a desktop page viewed at 200% zoom.
  - 768 × 900: one-column cards and a 70 × 70 px profile image render without overlap.
  - 1440 × 900: document width equals viewport width (1440 px); the portfolio grid uses three equal columns.
  - Representative activity: no horizontal overflow at 390 px or 1440 px; its diagram loads at both sizes without distortion.
- Public browser result: Pending deployment.
- Remaining public check: repeat desktop 200% zoom after deployment because browser zoom cannot be reproduced exactly by viewport emulation.

