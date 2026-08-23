# CMS v47 — Structured WYSIWYG

Nâng từ Structured CMS v46:

- Vẫn lưu dữ liệu chính bằng `blocks[]`.
- Vùng giữa dùng CSS Public thật.
- Heading: click trực tiếp và gõ.
- Paragraph: click trực tiếp và gõ.
- List: sửa từng `<li>` trực tiếp.
- Callout: sửa text bên trong trực tiếp.
- Raw HTML: giữ nguyên, có badge để báo chỉ chỉnh nâng cao.
- Mọi thay đổi WYSIWYG được sync ngược vào block JSON.
- `section_html` tiếp tục được renderer sinh tự động khi save/build.

Mục tiêu: giao diện chỉnh gần Public nhưng vẫn giữ kiến trúc Structured CMS an toàn.
