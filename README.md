# CMS v34 — Word-like Block Editor

## Text
- Click trực tiếp vào chữ -> đặt caret/gõ/sửa như bình thường.
- Bôi đen text -> dùng toolbar như editor thông thường.

## Chọn nguyên box
- Click vào vùng trống/padding của box.
- Hoặc Alt+click ở bất kỳ đâu trong box.
- Box được viền xanh để báo đang chọn nguyên khối.

Khi box được chọn:
- Ctrl+C -> copy nguyên outerHTML.
- Ctrl+V -> paste nguyên block cùng cấp.
- Delete/Backspace -> xóa nguyên box.
- Toolbar nổi: Copy khối / Nhân bản / + Trên / + Dưới / Xóa.

## Chèn nội dung giữa hai box
- Có dấu + nhỏ giữa các khối.
- Click dấu + -> tạo paragraph mới và đặt caret sẵn.

## Lưu
- Toàn bộ rail/toolbar/selection class của editor được loại bỏ trước Save/Commit.
- Không làm bẩn HTML public.
