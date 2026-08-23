# CMS v44 — Login Fixed

Sửa lỗi login v43:
- Xác thực token bằng `GET /user`.
- Kiểm tra quyền repository bằng `GET /repos/trinhbinhchi/wiki-vhtk`.
- Timeout 12 giây, không treo vô hạn.
- Báo rõ 401 / 403 / 404 / network timeout.
- Khôi phục nút Đăng nhập khi thất bại.
- Lưu token vào sessionStorage; localStorage chỉ khi chọn "Nhớ trên máy này".
- Chỉ load dữ liệu Admin sau khi xác thực GitHub thành công.

Structured CMS + layout-preserving renderer của v43 được giữ nguyên.
