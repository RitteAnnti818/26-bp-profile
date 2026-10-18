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

