# CMS v28 — Block Editor dễ dùng

Mục tiêu: thao tác trực quan mà không làm vỡ HTML.

## Cách dùng
1. Click vào một dòng, list item, box, hàng bảng...
2. Editor sẽ đánh dấu khối đang chọn.
3. Dùng:
   - `⧉ Nhân khối`
   - `↑ Khối`
   - `↓ Khối`
   - `🗑 Xóa khối`

## Copy / Paste
- Nếu không bôi đen text, `Ctrl+C` sẽ copy nguyên `outerHTML` của khối đang chọn.
- Paste sẽ cố chèn khối mới thành sibling cùng cấp.
- Với `<li>`, `<p>`, `<tr>` không còn nhét nhiều text vào trong cùng một node như v27.
- `Ctrl+D` nhân nguyên khối.
- `Ctrl+Shift+Backspace` xóa nguyên khối.

## Vẫn giữ
- WYSIWYG + HTML Source hai chiều
- Ctrl+S
- PAT / GitHub API
- Safe JSON
- Search / video / Dã Tẩu
- Copyright sidebar
