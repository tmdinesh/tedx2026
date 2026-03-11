import fitz
import json

doc = fitz.open("TEDx '26.pdf")
text = ""
for page in doc:
    text += page.get_text()

with open("pdf_data.js", "w", encoding="utf-8") as f:
    f.write(f"export const data = {json.dumps(text)};")
