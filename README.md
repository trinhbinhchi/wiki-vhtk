# CMS v43 — Fix Login + Preserve Layout

- Sửa đăng nhập: `async function login()` được khôi phục.
- Structured renderer không tự dựng lại layout.
- Mỗi bài có `structured_template_html` lấy từ HTML gốc 1:1.
- Renderer chỉ thay đúng nội dung bên trong `.intro-panel` hoặc `.article-content`.
- Hero/header/article-content/wrapper cũ được giữ nguyên.
- `legacy_section_html` vẫn giữ để rollback.
