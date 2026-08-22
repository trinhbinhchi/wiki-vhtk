# CMS v15 — Không trùng tiêu đề Public

Sửa lỗi v14:
- `section_html` có cả hero/header và body.
- Admin trước đây chèn toàn bộ `section_html` vào body của trang Public -> header bị lặp.
- V15 chỉ lấy nội dung của `.article-content/.page-body/...` để chỉnh.
- Khi Lưu & Commit, V15 ghép body đã sửa ngược trở lại `section_html` gốc.
- Hero/header/icon/layout Public được giữ nguyên đúng một lần.

PAT, GitHub API, toolbar, HTML mode, upload ảnh và GitHub Pages giữ nguyên.
