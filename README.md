# CMS v13 — Admin chỉnh trực tiếp trên trang Public thật

Sửa 2 lỗi của v12:
- Preview không còn là HTML/CSS mô phỏng. Admin iframe mở trực tiếp `../` — chính trang Public thật.
- Sau khi Public tải xong, Admin tìm đúng `section_id`, chèn nội dung bài hiện tại và bật `contenteditable`.
- Vì là cùng origin GitHub Pages, toolbar Admin thao tác trực tiếp vào DOM của trang Public.
- Toolbar được `position: sticky` riêng, không trôi xuống theo iframe/nội dung.

PAT, GitHub API, HTML mode, upload ảnh, Lưu & Commit vẫn giữ nguyên.

Cập nhật:
copy đè repo -> Commit -> Push -> chờ Actions xanh -> Ctrl+F5 /admin/.
