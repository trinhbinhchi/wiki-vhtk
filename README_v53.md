# CMS v53 — Block Copy Mini Admin

## Panel
- Bỏ panel `✦ HTML Mini Admin` cố định bên phải.
- Editor dùng toàn bộ chiều ngang.
- Nút ⚙ mở popup thuộc tính ngay cạnh phần tử khi cần.

## Chọn nguyên khối
- Click text: sửa chữ bình thường.
- Alt+click: chọn nguyên semantic block.
- Click vùng padding/non-editable: chọn nguyên block.
- Block được chọn có outline nhẹ.

## Copy / Paste
- Nếu đang bôi text: Ctrl+C copy text bình thường.
- Nếu không bôi text và đã chọn block: Ctrl+C copy nguyên outerHTML.
- Nút `⧉ Copy` trên mini toolbar copy nguyên outerHTML.
- Clipboard ghi cả `text/html` và `text/plain` khi browser hỗ trợ.
- Ctrl+V có thể dán nguyên block từ internal clipboard của editor.

Điều này giữ được cấu trúc `<li>`, class/style và cả marker/bullet do CSS tạo ra.
