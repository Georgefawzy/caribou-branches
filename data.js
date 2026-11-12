// بيانات الفروع — عدّل هنا فقط (إضافة فرع / تعديل عنوان / حذف).
// الحقول:
//   region  : cairo | october | alex   (أو أضف منطقة جديدة في REGIONS تحت)
//   name    : اسم الفرع (إنجليزي)
//   name_ar : اسم الفرع بالعربي (اختياري — يظهر في النسخة العربية)
//   area    : المنطقة / الحي (اختياري)
//   address : العنوان بالتفصيل (اختياري — يظهر تحت الاسم لو اتكتب)
//   phone   : رقم التليفون (اختياري)
//   hours   : مواعيد العمل (اختياري)
//   lat,lng : الإحداثيات (مطلوبة عشان "أقرب فرع")
//   link    : لينك Google Maps

const REGIONS = [
  { id: "cairo",   name: "القاهرة",         en: "Cairo" },
  { id: "october", name: "أكتوبر والزايد",   en: "October & Zayed" },
  { id: "alex",    name: "الإسكندرية",       en: "Alexandria" }
];

const BRANCHES = [
  // ---------- القاهرة ----------
  { region: "cairo", name: "Concord Plaza", area: "New Cairo", address: "", phone: "", hours: "", lat: 30.0250513, lng: 31.4836011, link: "https://maps.app.goo.gl/FVBp3bcVaZARGJ8B7" },
  { region: "cairo", name: "City Stars", area: "Nasr City", address: "", phone: "", hours: "", lat: 30.0741449, lng: 31.3441701, link: "https://maps.app.goo.gl/7A8YvsLHmVuoEbR27" },
  { region: "cairo", name: "Downtown", area: "Adly Street", address: "", phone: "", hours: "", lat: 30.0510357, lng: 31.2443933, link: "https://maps.app.goo.gl/oXCtYcaf1pnkyL2V8" },
  { region: "cairo", name: "East Walk Mall", area: "New Cairo", address: "", phone: "", hours: "", lat: 30.0023758, lng: 31.5035148, link: "https://maps.app.goo.gl/RMKyjLAiFoavzpZd7" },
  { region: "cairo", name: "Garden City", area: "Garden City", address: "", phone: "", hours: "", lat: 30.0356076, lng: 31.233791, link: "https://maps.app.goo.gl/XDyaFtLtfks1QJ8Y7" },
  { region: "cairo", name: "Heliopolis", area: "Heliopolis", address: "", phone: "", hours: "", lat: 30.0873802, lng: 31.3084409, link: "https://maps.app.goo.gl/sKDaWDDDWXzmzoAH9" },
  { region: "cairo", name: "Maadi – Street 18", area: "Maadi", address: "", phone: "", hours: "", lat: 29.9582333, lng: 31.2691318, link: "https://maps.app.goo.gl/z3xo2tSEKgUUpHWt8" },
  { region: "cairo", name: "Maadi – El Zeini Tower", area: "Maadi", address: "", phone: "", hours: "", lat: 29.9600138, lng: 31.2510426, link: "https://maps.app.goo.gl/RHr23s9S7STLuGKi8" },
  { region: "cairo", name: "Maadi Royal", area: "Zahraa El Maadi", address: "", phone: "", hours: "", lat: 29.9692117, lng: 31.3242531, link: "https://maps.app.goo.gl/Pt5qZs8edzysha758" },
  { region: "cairo", name: "Madinaty – East Hub", area: "Madinaty", address: "", phone: "", hours: "", lat: 30.0736435, lng: 31.6707532, link: "https://maps.app.goo.gl/2bpQHQGGb5avnP7G7" },
  { region: "cairo", name: "Medical Park", area: "New Cairo", address: "", phone: "", hours: "", lat: 30.0190352, lng: 31.4346672, link: "https://maps.app.goo.gl/8gM55ptM7rN3UeZM7" },
  { region: "cairo", name: "Military Academy", area: "El Nozha", address: "", phone: "", hours: "", lat: 30.103943, lng: 31.3486374, link: "https://maps.app.goo.gl/tq72Dd5g9WMvMZ5S8" },
  { region: "cairo", name: "Sheraton Heliopolis", area: "Sheraton", address: "", phone: "", hours: "", lat: 30.1025418, lng: 31.3725758, link: "https://maps.app.goo.gl/iFcbS5DbkdDZxHgH8" },
  { region: "cairo", name: "Zamalek", area: "Zamalek", address: "", phone: "", hours: "", lat: 30.0713446, lng: 31.2219861, link: "https://maps.app.goo.gl/CwmiJ13sHnqGGztJ6" },
  { region: "cairo", name: "El Shorouk", area: "El Shorouk", address: "", phone: "", hours: "", lat: 30.1499492, lng: 31.6272582, link: "https://maps.app.goo.gl/ujG8jJJHvJJZqsBZ9" },

  // ---------- أكتوبر والزايد ----------
  { region: "october", name: "Mohandeseen – Lebanon Street", area: "Mohandeseen", address: "", phone: "", hours: "", lat: 30.0551387, lng: 31.1993551, link: "https://maps.app.goo.gl/yJN5RTwQu3MBvtYD7" },
  { region: "october", name: "Messha Square", area: "Dokki", address: "", phone: "", hours: "", lat: 30.0350031, lng: 31.214542, link: "https://maps.app.goo.gl/owJ8vcb6ASZXwafS8" },
  { region: "october", name: "Dandy Mall", area: "Km 28 Cairo–Alex Desert Rd", address: "", phone: "", hours: "", lat: 30.0635803, lng: 31.027351, link: "https://maps.app.goo.gl/s3x5cMkpcq4MUZgV7" },
  { region: "october", name: "Agora Mall", area: "Sheikh Zayed", address: "", phone: "", hours: "", lat: 30.0313436, lng: 30.9932167, link: "https://maps.app.goo.gl/SV3ZCEGuKhWG3FmV9" },
  { region: "october", name: "Bermillan Mall", area: "Sheikh Zayed", address: "", phone: "", hours: "", lat: 30.0290142, lng: 31.0184826, link: "https://maps.app.goo.gl/4wm8EUu1wjaVWBTL6" },
  { region: "october", name: "Smart Village", area: "Smart Village", address: "", phone: "", hours: "", lat: 30.0770625, lng: 31.0219058, link: "https://maps.app.goo.gl/dbPSwDhgy9P2oZng9" },
  { region: "october", name: "Smart Village 2", area: "Smart Village", address: "", phone: "", hours: "", lat: 30.0734636, lng: 31.0191941, link: "https://maps.app.goo.gl/aibU6NuQ7QNTYraE6" },
  { region: "october", name: "Gamal Abdel Nasser Axis", area: "6th of October", address: "", phone: "", hours: "", lat: 29.9934678, lng: 30.9482657, link: "https://maps.app.goo.gl/L3jRAkEDf6hBcb7L7" },
  { region: "october", name: "Mobil Hadayeaa October", area: "Hadayek October", address: "", phone: "", hours: "", lat: 29.9306545, lng: 31.0435924, link: "https://maps.app.goo.gl/wnFoE4KUYhFAwQi8A" },

  // ---------- الإسكندرية ----------
  { region: "alex", name: "Saudi German Hospital", area: "Alexandria", address: "", phone: "", hours: "", lat: 31.0597448, lng: 29.7185192, link: "https://maps.app.goo.gl/VV6u7DFxr51AovRu8" },
  { region: "alex", name: "City Centre Alexandria", area: "Km 6 Alex–Cairo Desert Rd", address: "", phone: "", hours: "", lat: 31.1697447, lng: 29.9314161, link: "https://maps.app.goo.gl/fBcjUnHLm8LWnaUU6" },
  { region: "alex", name: "Smouha Square", area: "Smouha", address: "", phone: "", hours: "", lat: 31.2138511, lng: 29.9447067, link: "https://maps.app.goo.gl/7KW7zvmeWLEFPj2F8" },
  { region: "alex", name: "El Shatby", area: "El Shatby", address: "", phone: "", hours: "", lat: 31.2111075, lng: 29.9192329, link: "https://maps.app.goo.gl/jwt7nzt1XXcpJBJw6" },
  { region: "alex", name: "Green Plaza", area: "Smouha", address: "", phone: "", hours: "", lat: 31.2063745, lng: 29.9653439, link: "https://maps.app.goo.gl/qkXHWpigGZw434wy5" },
  { region: "alex", name: "Kafr Abdo Street", area: "Kafr Abdo", address: "", phone: "", hours: "", lat: 31.2241602, lng: 29.9526934, link: "https://maps.app.goo.gl/cxhxb6kAEGfaHQJX6" },
  { region: "alex", name: "Saint Laurent", area: "Alexandria", address: "", phone: "", hours: "", lat: 31.2523205, lng: 29.973613, link: "https://maps.app.goo.gl/Jtq1Dvo7HGwrwRFG7" },
  { region: "alex", name: "Stanley", area: "Stanley", address: "", phone: "", hours: "", lat: 31.2336222, lng: 29.9492468, link: "https://maps.app.goo.gl/zRVEjBBFCsedU95p6" },
  { region: "alex", name: "Alex West", area: "Alex West", address: "", phone: "", hours: "", lat: 31.0667731, lng: 29.736209, link: "https://maps.app.goo.gl/jfnjJjDu7zwuPfKq9" }
];
