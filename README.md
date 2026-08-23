# CMS v46 — Fix màn hình trắng sau đăng nhập

Lỗi v45:
- Login ẩn `#loginView` nhưng tìm nhầm app là `#app` thay vì `#appView`.
- Không gọi `showApp()`, nên danh sách bài viết không được tải.
- Token lại được lưu bằng key mới `vhtk_github_token`, trong khi CMS gốc dùng `vhtk_pat`.

V46:
- Token hợp lệ -> `token=t` và `user=userData`.
- Lưu lại bằng key chuẩn `vhtk_pat`.
- Gọi `await showApp()` đúng luồng gốc.
- `showApp()` mở `#appView` và chạy `loadArticles()`.
- Nếu load Admin thất bại, quay lại màn hình login và hiện lỗi, không để trang trắng.
- Dọn key token thử nghiệm v44/v45.
- Toàn bộ inline JavaScript đã qua `node --check`.

Structured CMS và renderer bảo toàn layout của v43-v45 được giữ nguyên.
