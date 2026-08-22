# CMS v10 — GitHub Pages + GitHub API + Fine-grained PAT

Không dùng Decap, Netlify hay Cloudflare.

## Luồng
1. Mở `/admin/`
2. Nhập GitHub Fine-grained PAT
3. Admin đọc/sửa `content/articles/*.json` bằng GitHub REST API
4. Bấm `Lưu & Commit`
5. GitHub commit trực tiếp vào `main`
6. Workflow GitHub Pages tự build/deploy

## Token
Tạo Fine-grained PAT chỉ cho repository `wiki-vhtk`.
Quyền tối thiểu:
- Repository access: Only selected repositories -> `wiki-vhtk`
- Contents: Read and write
- Metadata: Read-only (GitHub cấp mặc định)

Không bao giờ ghi token vào source code hoặc commit lên repo.

## Admin
https://trinhbinhchi.github.io/wiki-vhtk/admin/

## Website
https://trinhbinhchi.github.io/wiki-vhtk/
