# CMS v18 — sửa bung/thu Phần thưởng Dã Tẩu

Nguyên nhân:
- Nội dung các bài được tải động từ `content/site.json`.
- Script Dã Tẩu cũ chạy khi DOMContentLoaded, lúc đó nút Dã Tẩu chưa tồn tại.
- Sau khi CMS inject bài, nút xuất hiện nhưng không có click listener.

V18:
- Dùng event delegation trên `document`.
- Nút `.da-tau-toggle` hoạt động dù được tạo sau khi trang đã load.
- Đồng bộ `aria-expanded`, thuộc tính `hidden` và dòng Nhấn để xem / thu gọn.
- Hoạt động cả Public lẫn Public iframe trong Admin.
