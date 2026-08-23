# CMS v32 — Smart Selection

Giải quyết đúng vấn đề tô chọn không lấy được thuộc tính cha.

- Tô gần như toàn bộ nội dung của 1 block:
  Ctrl+C -> copy nguyên outerHTML của block.
- Tô nhiều block:
  Ctrl+C -> copy outerHTML của từng block.
- Tô một phần text:
  Ctrl+C -> copy đúng fragment được chọn.
- Paste ưu tiên HTML và giữ class/style/wrapper.
- Nếu paste cùng loại block (LI/P/TR/DIV), editor ưu tiên chèn cùng cấp thay vì lồng vào nhau.

Như vậy vẫn thao tác bằng tô chọn trực quan, không cần chuyển sang HTML.
