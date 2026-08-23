# CMS v55 — Insert + Copy Bullet + Hanging Indent Fixed

Sửa lỗi v54:

1. Dấu +
- Click `+` chèn ngay một paragraph mới tại đúng vị trí.
- Không phụ thuộc menu popup.
- Paragraph mới được focus và đặt caret ngay.

2. Copy cả hàng có dấu tròn
- Nếu selection bao phủ toàn bộ phần chữ của một `<li>`, Ctrl+C bị intercept.
- Clipboard nhận:
  - text/plain: `• nội dung`
  - text/html: `<li>• nội dung</li>`
- Nếu chỉ chọn một phần chữ, copy bình thường.
- Nếu không chọn text và đã chọn block, Ctrl+C vẫn copy nguyên block.

3. Xuống hàng trong bullet
- LI dùng hanging indent.
- Dòng 2 / Shift+Enter thẳng hàng với phần chữ sau bullet.
- Enter trong LI tạo LI mới đúng cấu trúc và có marker mới.
- Shift+Enter chèn `<br>` trong cùng LI.

JavaScript đã được kiểm tra bằng node --check.
