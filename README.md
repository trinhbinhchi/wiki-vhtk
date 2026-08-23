# CMS v33 — Visual Block Controls

Giải quyết 2 nhu cầu chính:
1. Viết nội dung giữa hai khối lớn.
2. Sao chép nguyên khối giữ toàn bộ thuộc tính.

## Cách dùng
- Click vào một box/khối.
- Thanh nhỏ xuất hiện trên khối:
  - + Trên
  - + Dưới
  - Sao chép
  - Xóa

## Thêm giữa hai khối
- Chọn khối dưới -> + Trên
hoặc
- Chọn khối trên -> + Dưới
=> xuất hiện paragraph mới và con trỏ được đặt sẵn để gõ.

## Sao chép khối
- Chọn box như “Giới Hạn Vật Phẩm”
- Bấm Sao chép
=> clone nguyên outerHTML, giữ class/style/wrapper/list.

Toolbar này chỉ tồn tại trong editor và bị loại bỏ trước khi Save/Commit.
