# CMS v39 — Custom Block Editor chuyên dụng

Bỏ GrapesJS làm editor chính. Editor mới được viết riêng cho cấu trúc cẩm nang.

## Sửa trực tiếp
- Double-click/click text và gõ trực tiếp.
- Public CSS được nhúng vào iframe nên giao diện gần Public 1:1.

## Semantic blocks
Editor nhận các block thường dùng:
- Văn bản
- Tiêu đề
- Danh sách
- Guide callout / box
- Ảnh
- Video
- Bảng
- Accordion Dã Tẩu

## Giữa block
- Có nút `+ Thêm block` giữa các top-level block trong article-content/intro-panel.

## Block toolbar
Thanh trên:
- Undo / Redo
- Nhân bản
- Xóa
- Lên / Xuống
- HTML

## Panel phải
- Thêm block
- Class / Style / Text / href / src
- Chọn cha / chọn con
- Copy style / Paste style
- Nhân bản / Xóa

## HTML
Có modal HTML Source riêng, không cần rời editor.

## Giữ nguyên
- GitHub PAT/API
- Safe JSON
- Search / video / Dã Tẩu
- Public site / copyright
