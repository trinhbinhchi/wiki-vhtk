# CMS v42 — Structured CMS

- Đã migrate 14 bài sang `blocks[]`.
- Các block nhận diện được: {'raw_html': 25, 'callout': 104, 'accordion': 1}
- HTML phức tạp chưa nhận diện chắc chắn được giữ dưới dạng `raw_html`.
- `legacy_section_html` giữ nguyên bản cũ để dự phòng.
- `build.js` render blocks -> section_html -> site.json.
- Admin chỉnh block thay vì chỉnh cả chuỗi HTML.
