# CMS v50 — Mini Admin + Fast Commit

## Mini Admin trong bài
- Click text để sửa trực tiếp như v49.
- Khi chọn block, toolbar nhỏ xuất hiện ngay cạnh block.
- Toolbar:
  - Bold / Italic / Underline
  - Màu chữ
  - Cỡ chữ
  - Link
  - Nhân bản
  - Lên / Xuống
  - Xóa
  - Mở panel thuộc tính nâng cao
- Panel phải có thể ẩn/hiện bằng `☰ Panel`.

## Autosave local
- Mỗi thay đổi được lưu local sau ~450ms.
- Trạng thái:
  - Chưa commit
  - Đã lưu local
  - Đang commit
  - Đã commit
- Khi mở lại cùng revision, draft local được tự khôi phục.
- Sau commit thành công draft local được xóa.

## Fast Commit
Ưu tiên GitHub GraphQL `createCommitOnBranch`:
- Một mutation tạo commit cho file bài hiện tại.
- Cache HEAD OID của branch để tránh request dư.
- Nếu HEAD thay đổi: refresh và retry 1 lần.
- Nếu GraphQL không dùng được: tự fallback về Contents API.

Với một bài viết, cách này giảm round-trip và cho cảm giác Save nhanh hơn.
GitHub Actions/build.js tiếp tục xử lý site.json/deploy.
