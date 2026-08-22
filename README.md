# CMS v11 — Admin WYSIWYG giống Public

Thay đổi chính:
- Admin nạp trực tiếp `../assets/site.css` của website Public.
- Vùng editor được đặt trong chính wrapper `<section>` với `section_id` và `section_class` của bài thật.
- Không áp font/padding giả lên nội dung; CSS Public quyết định cách hiển thị.
- Public CSS có rule ẩn article thì Admin ép section hiện và thêm class `active`.
- Toolbar/PAT/GitHub API/Lưu & Commit giữ nguyên.
- Chế độ HTML giữ nguyên.

Cập nhật:
1. Copy đè package vào repo `wiki-vhtk`.
2. Commit + Push.
3. Chờ GitHub Actions deploy xanh.
4. Mở `/wiki-vhtk/admin/` và Ctrl+F5.
