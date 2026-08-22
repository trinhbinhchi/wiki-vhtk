# CMS v9.1 — GitHub Pages

Cấu hình chính xác cho repository mới:

- Repository: `trinhbinhchi/wiki-vhtk`
- Website: `https://trinhbinhchi.github.io/wiki-vhtk/`
- Admin: `https://trinhbinhchi.github.io/wiki-vhtk/admin/`
- Branch: `main`
- GitHub Pages: deploy bằng GitHub Actions
- Netlify `vhtk.netlify.app`: chỉ giữ làm OAuth broker, không dùng production deploy.

## Cài đặt lần đầu
1. Giải nén package này.
2. Upload/copy TOÀN BỘ nội dung bên trong vào repository `wiki-vhtk`.
3. Commit và Push lên branch `main`.
4. Vào repository -> Settings -> Pages.
5. Build and deployment -> Source -> `GitHub Actions`.
6. Vào tab Actions, chờ workflow `Deploy GitHub Pages` hoàn tất màu xanh.
7. Mở `https://trinhbinhchi.github.io/wiki-vhtk/`
8. Admin: `https://trinhbinhchi.github.io/wiki-vhtk/admin/`

## OAuth
GitHub OAuth callback giữ:
`https://api.netlify.com/auth/done`

Decap backend dùng:
- repo: `trinhbinhchi/wiki-vhtk`
- site_domain: `vhtk.netlify.app`
- base_url: `https://api.netlify.com`
- auth_endpoint: `auth`

## Lưu ý
Không upload file ZIP nguyên khối vào repo. Phải giải nén và đưa các file/thư mục bên trong lên root của repo.
