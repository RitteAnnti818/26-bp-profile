# Heeyeon Kim — 2026 초급프로젝트 포트폴리오

`hugo-blog-awesome` 테마를 기반으로 만든 개인 포트폴리오입니다. 기존 개인 홈페이지와 분리된 새 저장소이며, `main`에 push하면 GitHub Actions가 Hugo 사이트를 빌드해 GitHub Pages로 배포합니다.

- 공개 사이트(배포 후): <https://ritteannti818.github.io/2026-beginner-project-portfolio/>
- 새 과제 저장소(생성 후): <https://github.com/RitteAnnti818/2026-beginner-project-portfolio>
- 기존 `RitteAnnti818.github.io` 저장소는 이 과제에서 수정하지 않습니다.

## 사용 환경

- Hugo Extended 0.167.0
- Python 3.12(수업 제공 스크립트는 Python 3.9 이상 지원)
- 수업 제공 `pages_build.py` 3.1
- Hugo blog awesome 2.1.1, MIT License
- GitHub Actions / GitHub Pages

Actions에서는 Hugo·Python·Node·Go 버전을 워크플로에 고정합니다. 테마 소스도 `site/themes/hugo-blog-awesome/`에 포함하므로 별도 submodule 초기화가 필요하지 않습니다.

## 로컬 빌드

1. 저장소를 clone하고 루트 폴더로 이동합니다.
2. Hugo Extended 0.167.0과 Python을 PATH에서 실행할 수 있게 준비합니다.
3. 아래 명령으로 production 결과를 생성합니다.

```powershell
python .github/pages_build.py --dependencies
python .github/pages_build.py --build
```

성공하면 `public/index.html`이 생성됩니다. 로컬 개발 중에는 다음 명령으로 미리 볼 수 있습니다.

```powershell
hugo server --source site --config hugo.yaml,pages.json --baseURL http://localhost:1313/ --disableFastRender
```

## 콘텐츠 수정 위치

- 기본 정보·메뉴·운영 URL: `site/hugo.yaml`
- 소개와 기술 적용 사례: `site/content/about.md`
- 연구실·발표·수상: `site/content/experience.md`
- 학습 목표와 다음 행동: `site/content/learning.md`
- 대표 활동: `site/content/projects/portfolio-site/index.md`
- 연구 기록: `site/content/projects/depth-estimation/index.md`
- 홈 화면 구성: `site/layouts/home.html`
- 색상·반응형·초점 스타일: `site/assets/sass/_custom.scss`

개인 정보를 수정한 뒤 production 빌드와 세 화면 폭을 다시 확인합니다.

## 커밋과 재배포

기능 하나가 완성되고 확인될 때마다 실제 변경 파일을 커밋합니다.

```powershell
git add site/content/about.md
git commit -m "content(about): update research interests"
git push origin main
```

`main` push는 `.github/workflows/deploy.yml`을 자동 실행합니다. GitHub의 **Actions**에서 build와 deploy가 모두 성공했는지 확인하고, **Settings → Pages → Build and deployment → Source**가 **GitHub Actions**인지 확인합니다. 마지막으로 로그인하지 않은 창에서 공개 URL을 다시 엽니다.

## 검증과 보고서 근거

- `docs/criteria/`: 공개 평가 P01–P80 구현 위치
- `docs/qa/`: 빌드·자산·링크·반응형·키보드 수동 절차
- `docs/verification/`: 실제 결과와 화면 증빙 표
- `docs/report/`: 제출 정보, 기능 변경, 오류 수정, AI 활용, 커밋 집계 초안

최종 제출 전에는 1440px·768px·390px, 200% 확대, 연속 Tab 조작, 내부 URL 새로고침, 캐시 없는 자산 요청을 공개 사이트에서 검사합니다. 원격 배포 결과가 없을 때는 로컬 성공을 공개 성공으로 기록하지 않습니다.

## 출처와 라이선스

테마는 [hugo-sid/hugo-blog-awesome](https://github.com/hugo-sid/hugo-blog-awesome)의 MIT 라이선스 버전 2.1.1을 사용하며, 원본 라이선스는 `site/themes/hugo-blog-awesome/LICENSE`에 유지합니다. 루트 `LICENSE`는 이 저장소에서 작성한 콘텐츠와 커스텀 소스에 적용됩니다. 세부 자산·AI 활용 구분은 `docs/report/06-sources-and-license.md`에 기록합니다.

