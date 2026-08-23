# CMS v48 — Full Content + Scroll Fixed

Sửa hai lỗi v47:

1. Thiếu nội dung
- V47 migrate chỉ phần `.intro-panel` đầu tiên.
- V48 migrate lại từ `legacy_section_html`.
- Giờ target là TOÀN BỘ `.article-content`.
- Mọi sibling sau intro-panel đều được giữ.
- Wrapper/layout ngoài `.article-content` vẫn giữ nguyên bằng `structured_template_html`.

2. Không cuộn xuống cuối bài
- Sửa flex chain `#v42Shell > #v42Main > #v42Canvas`.
- `#v42Canvas` có `min-height:0`, `height:0`, `overflow-y:auto`.
- Thêm padding đáy để block cuối không bị cắt.

3. WYSIWYG
- container/raw HTML phức tạp vẫn hiển thị đầy đủ.
- Text-bearing descendants trong container/raw block có thể chỉnh trực tiếp.

Block counts: {'container': 15, 'raw_html': 4}

Content preservation checks:
[('an.json', 1.0, 1), ('ban-do-hoi-quan-vo-lam.json', 1.0, 1), ('ban-do-luyen-cong.json', 1.0, 1), ('co-ban.json', 1.0, 4), ('ky-nang-90-rework.json', 1.0, 2), ('mat-na.json', 1.0, 1), ('ngua.json', 1.0, 1), ('phi-phong.json', 1.0, 1), ('tinh-nang-hoat-dong.json', 1.0, 1), ('trang-bi-xanh-tim-hoang-kim.json', 1.0, 1), ('trang-suc.json', 1.0, 1), ('tuyet-dinh-gioi-chi.json', 1.0, 1), ('tuyet-dinh-vu-khi.json', 1.0, 2), ('vat-pham-nguyen-lieu.json', 1.0, 1)]
