# CMS v54 — Selectable Marker + Insert Between Blocks

## Bullet/marker có thể tô và copy
- Trong editor, `<li>` được chèn một marker thật (`•`, `○`, `▪`, hoặc số).
- Marker là text thật nên có thể kéo chuột tô cùng nội dung.
- List-style CSS bị tắt tạm trong editor để không hiện hai marker.
- Khi lưu, marker editor bị loại bỏ và Public quay lại dùng CSS marker như cũ.
- Khi `Copy nguyên khối`, marker editor được chuyển thành text thật trong clipboard.

## Chèn giữa các khối
- Có dấu `＋` nhỏ giữa mọi direct child của `.article-content`.
- Hover mới hiện rõ.
- Bấm `＋` chọn:
  - Văn bản
  - Tiêu đề
  - Danh sách
  - Khung
  - Ảnh
  - Bảng

## Xuống dòng
- `Shift+Enter`: chèn `<br>` tại đúng vị trí con trỏ.
- `Enter` trong paragraph/heading: tạo paragraph mới ngay phía dưới.
- `Enter` trong list item: giữ hành vi list tự nhiên và tự sync sau đó.
