# CMS v49 — Header + All Text Editable

Sửa v48:

1. Tiêu đề/header
- Lấy `.article-head` từ `legacy_section_html`.
- Hiển thị lại ngay trong vùng soạn thảo.
- h1/kicker/subtitle/p trong header sửa trực tiếp.
- Khi sửa H1, field `title` metadata cũng được đồng bộ.
- Template gốc được patch header trước khi render/save.

2. Text không màu / text trong DIV
- Không còn giới hạn ở p/li/span.
- Mọi element có direct text node sẽ được đánh dấu contenteditable nếu an toàn.
- Vì vậy DIV/plain text không style cũng click và sửa được.

3. An toàn lưu
- contenteditable/data-v49/editor class đều được strip trước khi ghi block HTML.

Article stats:
[('an.json', True, 1), ('ban-do-hoi-quan-vo-lam.json', True, 1), ('ban-do-luyen-cong.json', True, 1), ('co-ban.json', True, 4), ('ky-nang-90-rework.json', True, 2), ('mat-na.json', True, 1), ('ngua.json', True, 1), ('phi-phong.json', True, 1), ('tinh-nang-hoat-dong.json', True, 1), ('trang-bi-xanh-tim-hoang-kim.json', True, 1), ('trang-suc.json', True, 1), ('tuyet-dinh-gioi-chi.json', True, 1), ('tuyet-dinh-vu-khi.json', True, 2), ('vat-pham-nguyen-lieu.json', True, 1)]
