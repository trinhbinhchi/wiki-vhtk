# CMS v51 — Public 1:1 Editor

Khắc phục khác biệt giữa Public và Admin:

- Editor không render block bằng wrapper `.v42-block/.v42-render` nữa.
- Iframe chứa chính `section_html` do renderer tạo.
- Nạp đúng CSS Public vào iframe.
- `.article-head` và `.article-content` giữ đúng quan hệ DOM như Public.
- Các selector `>`, `:first-child`, `:last-child`, grid/flex, margin-collapse... hoạt động như Public.
- Editor chỉ thêm data attribute + handle vào DOM tạm trong iframe.
- Khi sync/save, toàn bộ handle/data/contenteditable bị loại bỏ.
- Mini toolbar v50 được sửa để làm việc với selection trong iframe.
- Fast Commit + autosave local của v50 vẫn giữ nguyên.
