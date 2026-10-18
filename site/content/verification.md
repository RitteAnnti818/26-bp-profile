---
title: "사이트 검증"
description: "빌드·경로·메뉴·반응형·키보드 점검 요약"
date: 2026-10-18
draft: false
---

이 페이지는 과제 사이트의 공개 검증 범위를 설명합니다. 상세 로그와 화면 근거는 저장소의 `docs/verification`에 기록합니다.

## 점검 영역

- **배포**: Hugo production 빌드와 GitHub Pages Actions 결과
- **경로와 자산**: 저장소 하위 경로에서 CSS·JavaScript·이미지 요청 성공 여부
- **메뉴와 링크**: 소개·경험·활동·학습 계획 페이지의 직접 URL과 뒤로 가기
- **반응형**: 1440px, 768px, 390px 화면에서 넘침과 겹침 여부
- **키보드**: Tab 초점, Enter 실행, 메뉴에서 빠져나오기

## 재현 명령

저장소 루트에서 아래 명령을 실행합니다.

```powershell
python .github/pages_build.py --check
python .github/pages_build.py --build
```

