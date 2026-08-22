# CMS v20 — Safe JSON

Sửa lỗi build:
`SyntaxError: Expected ',' or '}' after property value in JSON`

Nguyên nhân:
- `content/articles/ky-nang-90-rework.json` bị hỏng cú pháp JSON sau khi lưu HTML/video phức tạp.

V20:
- Sửa lại `ky-nang-90-rework.json` thành JSON hợp lệ.
- Canonicalize toàn bộ `content/articles/*.json`.
- Admin dùng `safeJSONStringify()` = `JSON.stringify(obj, null, 2)` cho:
  - lưu bài
  - tạo bài
  - lưu settings
- Tự `JSON.parse()` kiểm tra lại payload trước khi PUT lên GitHub.
- 409 hiển thị thông báo rõ: tải lại rồi lưu lại.

Sau khi copy đè repo và Push, GitHub Actions phải qua bước `Build CMS content`.
