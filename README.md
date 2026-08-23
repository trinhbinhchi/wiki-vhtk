# CMS v27 — Copy/Paste trực quan giữ thuộc tính

Nâng từ v26:

- Paste trong chế độ Trực quan ưu tiên `clipboardData.text/html`.
- Giữ tốt hơn `class`, `style`, `data-*`, bảng, callout, box...
- Thêm nút `⧉ Nhân khối`.
- Đặt con trỏ vào một box/đoạn rồi bấm `⧉ Nhân khối` để clone nguyên `outerHTML`.
- `Ctrl+D` cũng nhân nguyên khối.
- Đây là cách chắc chắn nhất để sao chép một box mà không mất wrapper/thuộc tính.
- WYSIWYG + `</> HTML`, Ctrl+S, PAT, GitHub API, Dã Tẩu, video, Safe JSON và copyright giữ nguyên.

Lưu ý:
Khi chỉ bôi đen một đoạn chữ rồi Ctrl+C, trình duyệt không thể tự mang theo wrapper cha nằm ngoài selection.
Muốn copy nguyên layout, dùng `Nhân khối` / Ctrl+D.
