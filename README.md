# CMS v22 — Khôi phục nội dung + bỏ ghi chú thừa an toàn

Sửa lỗi v21:
- V21 xóa nhầm thẻ đóng của wrapper khi dùng regex, làm phần nội dung chính bên phải biến mất.
- V22 quay lại nền v20 và xóa 2 ghi chú bằng DOM parser, chỉ xóa đúng element.
- Giữ nguyên sidebar, main content, sections, editor, PAT, GitHub API, search, video, Dã Tẩu và Safe JSON.
- Bỏ 2 trường Ghi chú nguồn / Ghi chú hoạt động khỏi Admin vì không còn dùng.
