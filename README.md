# CMS v35 — sửa đúng cấu trúc HTML thật

Lỗi v34:
- Các box hiện tại thực tế dùng `.guide-callout` / `.notion-callout-block`.
- Chúng nằm trong `.article-content > .intro-panel`.
- V34 không nhận đúng class và đặt dấu + sai cấp DOM.

V35:
- Nhận đúng `.guide-callout`.
- Hover mỗi box sẽ thấy `☰ Khối`.
- Click `☰ Khối` = chọn nguyên box chắc chắn.
- Alt+click bên trong box cũng chọn nguyên box.
- Sau khi chọn:
  - Copy
  - Nhân bản
  - + Trên
  - + Dưới
  - Xóa
- `+ Thêm nội dung` nằm giữa từng child của `.intro-panel`, đúng vị trí giữa các box.
- Editor UI bị strip hoàn toàn trước Save/Commit.
