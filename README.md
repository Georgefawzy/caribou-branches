# فروع كاريبو – مصر

موقع ثابت بسيط (HTML + JS بدون مكتبات). البيانات تُدار من Google Sheet.

## 1) تجهيز الشيت
1. افتح Google Sheets ← File ← Import ← Upload ← `branches.csv` ← Replace spreadsheet.
2. الأعمدة (لا تغيّر أسماءها ولا ترتيبها في الصف الأول):
   `region, name, area, address, phone, hours, lat, lng, link`
   - `region`: اسم المنطقة كما يظهر على الزرار (القاهرة / أكتوبر والزايد / الإسكندرية…). اكتب اسم منطقة جديدة وهيظهر زرار لها تلقائياً.
   - `lat` / `lng`: إحداثيات الفرع (لزر "أقرب فرع"). من Google Maps اضغط مطوّلاً على مكان الفرع. لو فاضية الفرع يظهر عادي بدون مسافة.
   - `address` / `phone` / `hours`: اختيارية.
3. File ← Share ← Publish to web ← اختار الشيت (Sheet1) و **Comma-separated values (.csv)** ← Publish ← انسخ اللينك.

## 2) ربط الموقع بالشيت
افتح `config.js` وحط اللينك:
```js
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/....../pub?output=csv";
```

## 3) النشر على GitHub Pages
ارفع كل الملفات ← Settings ← Pages ← Branch: `main` / root ← Save.

بعد كده أي تعديل في الشيت يظهر في الموقع تلقائياً (قد يتأخر حتى 5 دقايق بسبب كاش جوجل). لو الشيت مش متاح أو اللينك فاضي الموقع يستخدم آخر نسخة محفوظة أو بيانات `data.js`.

> ملاحظة: الشيت المنشور يقدر أي حد معاه اللينك يقرأه، فما تحطش فيه بيانات سرية.
