# 초급프로젝트 포트폴리오

`hugo-blog-awesome` 테마를 기반으로 만든 개인 포트폴리오입니다. 기존 개인 홈페이지와 분리된 새 저장소이며, `main`에 push하면 GitHub Actions가 Hugo 사이트를 빌드해 GitHub Pages로 배포합니다.

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
- 소개와 연구 배경: `site/content/about.md`
- 연구실·논문·개발·수상: `site/content/experience.md`
- 향후 연구 방향: `site/content/learning.md`
- 홈 화면 구성: `site/layouts/home.html`
- 색상·반응형·초점 스타일: `site/assets/sass/_custom.scss`

개인 정보를 수정한 뒤 production 빌드와 세 화면 폭을 다시 확인합니다.

## 커밋과 재배포

기능 하나가 완성되고 확인될 때마다 실제 변경 파일을 커밋합니다.

```powershell
git add site/content/about.md
git commit -m "Update research interests"
git push origin main
```

`main` push는 `.github/workflows/deploy.yml`을 자동 실행합니다. GitHub의 **Actions**에서 build와 deploy가 모두 성공했는지 확인하고, **Settings → Pages → Build and deployment → Source**가 **GitHub Actions**인지 확인합니다. 마지막으로 로그인하지 않은 창에서 공개 URL을 다시 엽니다.

## 출처와 라이선스

테마는 [hugo-sid/hugo-blog-awesome](https://github.com/hugo-sid/hugo-blog-awesome)의 MIT 라이선스 버전 2.1.1을 사용하며, 원본 라이선스는 `site/themes/hugo-blog-awesome/LICENSE`에 유지합니다. 루트 `LICENSE`는 이 저장소에서 작성한 콘텐츠와 커스텀 소스에 적용됩니다. 세부 자산·AI 활용 구분은 `docs/report/06-sources-and-license.md`에 기록합니다.

