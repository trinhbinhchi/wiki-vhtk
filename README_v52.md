# CMS v52 — HTML Mini Admin

## Kiến trúc
- `section_html` là nguồn nội dung chính.
- `blocks[]` cũ được giữ trong `legacy_blocks` để rollback, nhưng không còn dùng để edit/render.
- `build.js` dùng trực tiếp `section_html`.

## Mini Admin
- Iframe hiển thị chính HTML + CSS Public.
- Click text để sửa trực tiếp.
- Click vùng/khối để chọn.
- Mini toolbar: B/I/U, màu, cỡ chữ, link, duplicate, lên/xuống, xóa.
- Panel phải chỉnh class/style/href/src.
- Thêm nhanh paragraph/heading/list/box/image/table.
- Undo/Redo snapshot trực tiếp HTML.

## Lưu
- contenteditable/class/handle editor bị loại bỏ trước khi lưu.
- HTML sạch được ghi trở lại `section_html`.
- Autosave local + Fast Commit GraphQL của v50/v51 vẫn giữ nguyên.
