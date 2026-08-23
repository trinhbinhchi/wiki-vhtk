# CMS v30 — Đặt con trỏ mọi nơi trong WYSIWYG

Sửa hạn chế của v29:
- Có điểm chèn ở đầu section.
- Có điểm chèn giữa các top-level block.
- Có điểm chèn ở cuối section.
- Click vào khoảng trống và gõ trực tiếp.
- Khi bắt đầu gõ, anchor biến thành paragraph thật.
- Anchor trống là editor-only và bị loại bỏ trước khi Save/Commit.
- Không làm bẩn section_html bằng các helper của editor.

Vẫn giữ:
- Selection-preserving toolbar
- B/I/U, màu, cỡ chữ, căn lề, list, link
- Thuộc tính trực quan
- Block tools
- HTML Source hai chiều
- PAT/GitHub API/Safe JSON
