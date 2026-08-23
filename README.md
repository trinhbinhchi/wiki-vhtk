# CMS v29 — WYSIWYG thật

Mục tiêu: gần như không cần dùng HTML Source.

## Trực quan
- Click đặt con trỏ ở bất kỳ text nào và gõ sửa.
- Bôi đen text rồi bấm toolbar:
  - Bold / Italic / Underline / Strike
  - H2/H3/H4/Paragraph
  - Cỡ chữ
  - Màu chữ
  - Màu nền
  - Căn trái / giữa / phải
  - Bullet list / numbered list
  - Link
  - Xóa format

## Selection
Toolbar không còn làm mất selection trong iframe.
Editor lưu Range trước khi click toolbar và restore trước khi áp lệnh.

## Thuộc tính trực quan
Nút `⚙ Thuộc tính`:
- ảnh: sửa src/alt
- link: sửa href/target
- iframe/video: sửa src
- phần tử khác: sửa class/style

## Phím tắt
- Ctrl+B
- Ctrl+I
- Ctrl+U
- Ctrl+K
- Ctrl+S

Block tools và HTML Source vẫn giữ làm công cụ nâng cao, nhưng thao tác thông thường không cần chuyển sang HTML.
