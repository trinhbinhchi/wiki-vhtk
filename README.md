# CMS v12 — Admin ổn định + Preview Public biệt lập

Sửa lỗi v11:
- KHÔNG nạp CSS Public vào toàn trang Admin.
- Admin giữ nguyên layout/CSS riêng.
- Chỉ vùng bài viết nằm trong iframe biệt lập và nạp `assets/site.css`.
- Toolbar thao tác trực tiếp vào contenteditable bên trong iframe.
- HTML mode, PAT, GitHub API, Lưu & Commit giữ nguyên.
- CSS Public không thể đè sidebar/topbar/form Admin nữa.

Cập nhật:
copy đè repo -> Commit -> Push -> chờ GitHub Actions xanh -> Ctrl+F5 /admin/.
