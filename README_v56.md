# CMS v56 — Bullet Copy + Line Break Fixed

## Cùng một dấu tròn
- Đặt caret trong dòng `<li>`.
- `Shift + Enter` = xuống dòng trong cùng một bullet.
- Dùng Range API trực tiếp, không phụ thuộc execCommand.
- Dòng tiếp theo vẫn dùng hanging indent nên thẳng hàng với chữ.

## Dấu tròn mới
- `Enter` trong `<li>` = tạo `<li>` mới bên dưới.
- Caret được đặt ngay sau marker mới.

## Copy dấu tròn
- Copy được xử lý ở sự kiện `copy`, không chỉ ở keydown Ctrl+C.
- Khi selection bao phủ toàn bộ phần chữ của một `<li>`:
  - text/plain = `• nội dung`
  - text/html có marker thật ở đầu.
- Nếu chỉ tô một phần chữ thì copy bình thường, không tự thêm bullet.

JavaScript đã được kiểm tra bằng node --check.
