import history from "./pages/uz/history";
import ameliorative from "./pages/uz/ameliorative";
import hydrogeophysics from "./pages/uz/hydrogeophysics";
import overture from "./pages/uz/overture";
import hydrogeology from "./pages/uz/hydrogeology";
import modeling from "./pages/uz/modeling";
import geoecology from "./pages/uz/geoecology";
import technical from "./pages/uz/technical";
import engineering from "./pages/uz/engineering";
import chemical from "./pages/uz/chemical";
import scientific from "./pages/uz/scientific";
import production from "./pages/uz/production";
import education from "./pages/uz/education";
import activity from "./pages/uz/activity";
import functions from "./pages/uz/functions";

const uz = {
  header: {
    home: "Asosiy",
    about: "INSTITUT HAQIDA",
    about_drop_down: {
      about: "Institut haqida",
      structure: "Institut tuzilishi",
      charter: "Nizom",
      indicators: `Moliyaviy-iqtisodiy ko'rsatkichlar`,
      management: "Boshqaruv",
      history_institute: "Institut tarixi",
      policy: "Missiya va siyosat",
      cooperation: "Hamkorlik",
      history_leadership: "Tarix va etakchilik",
    },

    activity: "FAOLIYAT",
    activity_drop_down: {
      activity: "Faoliyat",
      scientific: "Ilmiy faoliyat",
      production: "Ishlab chiqarish faoliyati",
      education: `Ta'lim`,
    },

    centers_laboratories: "MARKAZ VA LABORATORIYALAR",
    laboratories_drop_down: {
      functions: "Markazlarning vazifalari",
      research: "Er osti suv resurslari va zahiralarini tadqiq qilish",
      research_drop_down: {
        hydromineral: "Gidromineral resurslar",
        ameliorative: "Meliorativ gidrogeologiya va drenaj",
        Resources: "Er osti suvlarining resurslari va zahiralari",
      },

      groundwater: "Er osti suvlarining monitoringi va geoekologik tadqiqotlar",
      groundwater_drop_down: {
        geoecology: "Geoekologiya",
        geoinformation: "Geoaxborot texnologiyalari va modellashtirish",
        groundwater: "Er osti suvlari monitoringi va mintaqaviy tadqiqotlar",
        chemical_laboratory: "Geoekologik va kimyoviy laboratoriya",
      },

      international_research:
        "Xalqaro tadqiqot ishlari, Start-Up loyihalari, marketing va patent fanlari",
      international_research_drop_down: {
        marketing: "Marketing va patentlash",
        department: `Ilmiy-texnik ishlab chiqarish bo'limi`,
        ict_department: `AKT bo'limi`,
        engineering: "Muhandislik geodinamika va yerni masofadan zondlash",
        hydrogeophysics: "Gidrogeofizika",
        deposits: "Ruda konlarining gidrogeologiyasi va muhandislik geologiyasi",
        engineering_geology: "Gidrogeologiya va muhandislik geologiyasi MTPI",
      },
    },

    normative: "NORMATIV BAZA",
    contacts: "ALOQALAR",
  },

  main: {
    about_page: {
      heading: "Institut haqida",

      text1: {
        title: "ISHLAB CHIQADI:",
        body: `Mijozlarni qiziqtirgan mavzular bo'yicha doimiy so'rovlar to'plami.`,
      },

      text2: {
        title: "BAJARADI:",
        body: `Doimiy so'rovlar bo'yicha axborot ta'minoti; bir martalik qidiruvlar, maqsadli so'rovlar; XBA bo'yicha birlamchi manbalarga buyurtmalar, nashrlarning xorijiy tillardan tarjimalari, ilmiy-texnikaviy adabiyotlardan nusxa ko'chirish, yangi texnika va texnologiya sohasida ilmiy-texnik hujjatlarni ma'lumot qidirish, texnik hujjatlarni xarid qilish uchun buyurtmalar.`,
      },

      text3: {
        title: "XUSUSIYATLAR:",
        body: `Gidrogeologiya, muhandislik geologiyasi, gidrogeofizika va boshqalar yo'nalishlari bo'yicha chuqurligi 12 - 15 yil bo'lgan ma'lumotnoma-axborot fondi, ilmiy-texnik hujjatlarning kartotekasi, IR, tarjimalari, manzillari.`,
      },

      text4: {
        title: "TAKLIFLAR:",
        body: `Gidrogeologiya, muhandislik geologiyasi, gidrogeofizika va boshqalar masalalari bo'yicha har tomonlama axborot ta'minoti.`,
      },
    },

    activity_page: {
      heading: "Faoliyat",
      title: "Faoliyat",
      text1: `“HYDROINGEO instituti” DU 1960 yilda tashkil etilgan boʻlib, Oʻzbekiston Respublikasi Davlat geologiya va mineral resurslar qoʻmitasining tarkibiy boʻlinmasi hisoblanadi. Institut respublika aholisini er osti suvlarining kafolatlangan manbalari bilan ta’minlash, xavfli geologik jarayonlar rivojlanishining oldini olish, tabiiy va mineral resurslardan oqilona foydalanish hamda gidrogeologiya, muhandislik geologiyasi va geoekologiya sohalarida ilmiy-tadqiqot va tajriba-konstruktorlik ishlarini olib boradi. ekologik vaziyat.`,
      text2:
        "Institutda 8 ta laboratoriya, jumladan, 4 ta ilmiy, 4 ta uslubiy va 1 ta texnologik profil, ilmiy-texnik axborot bo‘limi, katta ilmiy xodim-izlanuvchilar instituti, malaka oshirish kurslari va nashriyot guruhi mavjud.",
      text3:
        "181 nafar xodim, jumladan, 5 nafar fan doktori, 22 nafar fan nomzodi va 112 nafar oliy maʼlumotli mutaxassislar mehnat qilmoqda.",
    },

    cooperation_page: {
      heading: "HAMKORLIK",
      title: "XALQARO ALOQALAR",
      text1:
        "Institutning tashqi ilmiy geologik hamjamiyat bilan xalqaro aloqalari jadal rivojlanmoqda.",
      text2:
        "Germaniya Geologiya fanlari va tabiiy resurslar instituti bilan hamkorlikda olib borilgan ishlar natijasida xavfli geologik jarayonlar va ularni GISda xaritalash bo‘yicha yagona ma’lumotlar bazasini yaratish uchun ArcInfo litsenziyalangan yettita komplekt dasturlari olindi.",
      text3: `Institut Rossiya Federatsiyasi va O‘zbekiston Respublikasining “Yer va koinotni tinch maqsadlarda tadqiq qilish” Davlatlararo dasturida hamda “Markaziy Yevroosiyoning geologiyasi, minerogenezi va hozirgi holatini baholash” xalqaro loyihasida ishtirok etadi.`,
      text4:
        "Hozirgi vaqtda Finlyandiya Geologiya xizmati (GTK) bilan GIS seriyali zamonaviy dasturiy mahsulotlar va xalqaro standartdagi arxiv-kutubxona tizimlaridan (masalan, LIBRIS) foydalangan holda raqamli ma’lumotlar bazasini yaratish bo‘yicha hamkorlik qilish masalasi muhokama qilinmoqda. ishlab chiqilgan.",
      text5:
        "Yosh mutaxassislar har yili Germaniya, AQSh, Hindiston, Turkiya, Yaponiya va boshqa mamlakatlarda malaka oshirish, tajriba almashish, yangi bilim va texnologiyalarni o‘zlashtirish maqsadida amaliyot o‘tashdi.",
      text6:
        "Institut mutaxassislari har 4 yilda bir marta o‘tkaziladigan Xalqaro geologiya kongressi ishida muntazam faol ishtirok etib kelmoqda.",
      text7:
        "2004 yilda Florensiyada (Italiya) boʻlib oʻtgan 32-Kongressda ishtirok etayotib, institut ishtirokchilarining dunyoning ekologik-geologik xaritasini yaratish boʻyicha takliflari jahon geologiya jamiyati tomonidan qoʻllab-quvvatlandi va Kongress qaroriga kiritildi.",
      text8: `2008-yilda Oslo (Norvegiya) shahrida bo‘lib o‘tgan 33-Xalqaro geologiya kongressida O‘zbekistondan 26 nafar mutaxassislardan, jumladan, yoshlardan iborat geologiya delegatsiyasi ham seksiyalar ishining turli yo‘nalishlari bo‘yicha faol ishtirok etdi. Kongress ishidagi ishtiroki natijasida O‘zbekiston geolog yoshlari yangi tashkil etilgan Yosh olim-geologlarning xalqaro tarmog‘iga (YES Network – Young Earth Scientist’s Network) kirdi. HYDROINGEO instituti xodimi hozirda YESdagi O‘zbekiston milliy vakili hisoblanadi. Batafsil maʼlumot http://yes-uzbekistan.blogspot.com saytida joylashgan.`,
      text9:
        "Institut mutaxassislarining 2012-yilda Brisben shahrida (Avstraliya) boʻlib oʻtadigan 34-Xalqaro geologiya kongressida ishtirok etishi rejalashtirilgan.",
    },

    politics_page: {
      heading: "Vazifasi va siyosati",
      text1:
        "Inson kapitalini rivojlantirish va aholi turmushini yaxshilash yoʻlida xalqaro ilmiy-tadqiqot va ishlanmalar hamda mamlakat yer osti boyliklaridan maksimal darajada foydalanish uchun innovatsion ekotizimni yaratish orqali jahon hamjamiyatiga integratsiya va globallashuv.",
      text2:
        "Yer osti (chuchuk, mineral, termal va sanoat) suv resurslarining samarali yo'nalishlarini asoslash va miqdoriy baholash, shuningdek, muhandislik-geologik va ekzogen-geologik jarayonlarni o'rganish bo'yicha gidrogeologik va muhandislik-geologik ishlarni olib borish; texnogen ta'sir ta'sirida gidrogeologik va muhandislik-geologik sharoitlarning o'zgarishini kuzatish, nazorat qilish va prognozlash usullarini ishlab chiqish va amalga oshirish;",
      text3:
        "Intensiv texnogenez hududlarida geologik-ekologik tadqiqotlar va xaritalash ishlarini olib borish usullarini ishlab chiqish.",
      text4:
        "Yer osti suvlari monitoringi va davlat kadastrini va yer osti suvlarining davlat hisobini yuritish",
    },

    education_page: {
      heading: "Ta'lim",
      text1:
        "Institutda har chorakda tasdiqlangan rejaga asosan quyidagi yo‘nalishlar bo‘yicha mutaxassislar malakasini oshirish kurslari tashkil etiladi:",
      text2:
        "CorelDRAW va Adobe Photoshop oilalarining grafik paketlari, geoaxborot grafik maʼlumotlar bazalari - MapInfo va ArcGIS 10.3. Oʻqishni tugatgandan soʻng tegishli kurslarni tamomlaganligi toʻgʻrisida diplomlar beriladi.",
      text3:
        "Kurslar ixtisoslashtirilgan sinflarda, 10 kishigacha bo'lgan guruhlarda nazariy va amaliy mashg'ulotlar shaklida o'tkaziladi. Har bir talaba uchun alohida kompyuter beriladi. Kurslarni o'tkazishda taqdimot materiallari, o'quv dasturlari qo'llaniladi.",
    },

    management_page: {
      heading: "Tarix va etakchilik",
      text1: `1921 yil - Turkvodxoz, keyinroq Sredazvodxoz. Z.F.Gorizdro-Kulchitskaya (1925), N.F.Bezobrazova (1927) Gidrogeologiya bo‘limida sug‘orish tizimlarini tiklash bo‘yicha ishladilar, Chirchiq, Angren, Keles daryolari havzalarining gidrogeologik sharoitlariga umumiy tavsif berdilar. Bass o'rganish uchun. R. Zarafshonga leningradlik mutaxassislar A.N.Nikolaev, S.A.Butov, S.F.Mashkovtsev taklif qilingan (1925). 1924 yildan beri O.K.Lange boshchiligidagi gidrogeologlar guruhi doimiy ravishda ishlab kelmoqda. Tadqiqot natijalari "Irrigatsiya" jurnalining sonlarida va SAGU asarlarida nashr etilgan (Mujchinkin, 1924-1928; Reshetkin, 1927-1929; Arxangelskiy, 1928; Tolstixin, 1924-1928).`,
      text2:
        "1950-1960 yillarda gidrogeologik va muhandislik-geologik tadqiqotlar X.M.Abdullaev, G.A.Mavlyanov, N.A.Kenesarin, X.T.Toʻlaganovlar nomlari bilan bogʻliq boʻlib, sanoat gidrogeolog va geologlardan yangi gʻoyalarni talab qildi. fan va ishlab chiqarishni rivojlantirish.Oʻzbekgidrogeologiya tresti (X.T.Toʻlaganov va boshqalar), GIDROINGEO instituti (G.A.Mavlyanov) tashkil etildi.Gidrogeologiya va muhandislik geologiyasi sohasida iqtisodiyot.",
      text3: {
        title: "«GIDROINGEO» Gidrogeologiya va muhandislik geologiyasi instituti",
        body: "1959-yil 29-noyabrda Oʻzbekiston SSR Vazirlar Sovetining 737-sonli qarori bilan Oʻzbekiston SSR Fanlar akademiyasi tizimida tashkil etilgan.",
      },
      text4: `1971 yil 4 iyundan boshlab Oʻzbekiston SSR Vazirlar Kengashining 250-son buyrugʻi bilan GIDROINGEO instituti “Oʻzbekgidrogeologiya” davlat gidrogeologiya korxonasi tarkibiga kiradi.`,
      text5:
        "2000-yil 20-iyundan “Oʻzbekgidrogeologiya” davlat korxonasining 57-son buyrugʻi asosida “GIDROINGEO” Gidrogeologiya va muhandislik geologiyasi instituti uning shoʻba korxonasiga aylanadi.",
      text6:
        "“O‘zbekiston Respublikasi Davlat geologiya va mineral resurslar qo‘mitasining geologiya ishlarini tashkil etish va faoliyatini takomillashtirish chora-tadbirlari to‘g‘risida”gi PQ – 568-sonli qarori asosida va O‘zbekiston Respublikasi Davlat geologiya qo‘mitasining buyrug‘i asosida O‘zbekiston Respublikasi Geologiya va mineral resurslar bo‘yicha 2007 yil 25 yanvardagi 11-son qarori bilan Institut Davlat geologiya qo‘mitasining tarkibiy bo‘linmasi hisoblanadi.",
      text7: {
        title: "Gidrogeologiya va muhandislik geologiyasi instituti (GIDROINGEO)",
        body: "oʻz faoliyati bilan Oʻrta Osiyo, Janubiy Qozogʻiston va Ozarbayjon (qurgʻoqchil zona) hududlarini qamrab oladi.U 19ta laboratoriya va eksperimental metodik partiyaga ega 9ta kafedradan iborat.Fan nomzodlari,kichik ilmiy xodimlar-67,katta muhandislar-22,har xil fanlarning texnik xodimlari. mutaxassisliklar va laborantlar - 110",
      },
      title: "Gidrogeologiya va muhandislik geologiyasi instituti (GIDROINGEO)",
      text9:
        "- er osti suvlarining hosil bo'lish qonuniyatlarini o'rganish bo'yicha ilmiy-tadqiqot ishlarini olib boradi; xalq xo‘jaligida foydalanish uchun resurslar va sanoat sho‘rlarini aniqlash; sug'oriladigan dehqonchilik maydonlarining meliorativ gidrogeologiyasining asosiy masalalarini ishlab chiqish; lyoss jinslarning tarqalish qonuniyatlarini va ularning muhandislik-geologik xususiyatlarini o'rganish; gidrogeologik ishlarning usullari va usullarini takomillashtirish; ularning tejamkorligi va samaradorligini tahlil qilish; gidrogeologik va muhandislik-geologik tadqiqotlarni ilmiy asoslash; ishlab chiqarish tashkilotlari tomonidan xalq xo‘jaligi masalalarini tezkor hal etish bo‘yicha individual amaliy takliflar ishlab chiqish; qurgʻoqchil zona gidrogeologiyasi va muhandislik geologiyasi boʻyicha ilmiy-tadqiqot va tematik ishlarni muvofiqlashtirish.Yuqoridagi yoʻnalishlar boʻyicha institut tomonidan ishlar amalga oshirilib, nashr etilgan ishlar, simpoziumlar, yigʻilish va seminarlarda oʻz aksini topdi, ishlab chiqarish tashkilotlariga taqdim etilgan tavsiyalar.Ammo, umuman olganda, gidrogeologik va muhandislik-geologik tadqiqotlarda ilmiy-texnikaviy taraqqiyotni jadallashtirish bilan bog‘liq muammolarni hal etishda ortda qolmoqda.Xususan, geofizik usullar, aerodinamik usullar, gidrogeologik va muhandislik-geologik xaritalash usullari va qidiruv-qidiruv ishlari va geologiya-qidiruv ishlarini rivojlantirish bo‘yicha ilmiy ishlar. nazariy asoslari hali yetarli darajada rivojlanmagan.Bu hududlarda gidrogeologik va muhandislik-geologik tadqiqotlarning geologik va iqtisodiy samaradorligini oshirish uchun katta zaxiralar mavjud. fan va amaliyotning asosiy muammolaridagi bog‘lovchi bo‘g‘inlar tufayli.Texnik jihozlar yetarli emas.Institutda hozirgi zamon talablariga javob beradigan laboratoriya binosi mavjud emas.Texnik jihozlardan tashqari qo‘shimcha mutaxassislar (olim) kadrlarini jalb qilish zarur. , shuningdek, kuchli ishlab chiqarish va eksperimental bazaga ega bo'lib, ularsiz jamiyatimiz taraqqiyoti keyingi ilmiy-texnik taraqqiyotni kutish mumkin emas.",
    },

    production_page: {
      heading: "Ishlab chiqarish faoliyati",
      text1: "Institut quyidagilarni amalga oshiradi:",
      list: {
        item1: "suv resurslarini o‘rganish va ulardan foydalanish;",
        item2: "gidro-mineral resurslarni o'rganish va ulardan foydalanish;",
        item3: "meliorativ gidrogeologiya sohasidagi tadqiqotlar;",
        item4: "er osti suvlarining monitoringi;",
        item5: "suv zahiralarining ifloslanishi va kamayish jarayonlarini o'rganish;",
        item6: "muhandislik geodinamiği sohasidagi tadqiqotlar;",
        item7:
          "foydali qazilmalar konlarining gidrogeologik va muhandislik-geologik sharoitlarini o‘rganish;",
        item8: "shaharlar va sanoat zonalarining ekologik sharoitlarini o'rganish;",
        item9: "yangi texnik vositalarni ishlab chiqish;",
        item10:
          "yer osti suvlarini qidirish texnologiyalarini ishlab chiqish va ulardan oqilona foydalanish;",
        item11:
          "chuchuk yer osti suvlari zahiralarini sun’iy ravishda to‘ldirish va ularni ifloslanishdan himoya qilish texnologiyalarini ishlab chiqish;",
        item12:
          "gidromineral xom ashyoni qayta ishlash va ulardan foydalanish texnologiyalarini ishlab chiqish;",
        item13: "jinslarning fizik-mexanik xossalarini aniqlash;",
        item14: "topografik-geodeziya ishlarini olib borish va xaritalar berish;",
        item15: "qurilish va kapital ta'mirlash;",
        item16: "yuridik va jismoniy shaxslarga pullik xizmatlar ko‘rsatish;",
        item17: "qishloq xo'jaligi uchun o'g'itlar ishlab chiqarish;",
        item18: "qishloq xo'jaligi mahsulotlarini etishtirish;",
        item19: "mineral va ichimlik suvlarini idishlarga quyish;",
        item20:
          "monografiyalar, to'plamlar, tavsiyalar, ko'rsatmalar, maqolalar, reklama maqolalari va boshqa nashrlarni nashr etish;",
        item21:
          "O‘zbekiston va xorijiy davlatlarning tashkilot, muassasa, korxona va idoralari bilan hamkorlik qilish;",
        item22:
          "doktorantura, aspirantura va stipendiyalar orqali ilmiy xodimlarni tayyorlash;",
        item23: "malaka oshirish kurslarida malaka oshirish;",
        item24:
          "o‘quv bo‘limlari filiallarini ochish va oliy o‘quv yurtlari talabalarini tayyorlash.",
      },
      text2:
        "Institut litsenziyalar asosida faoliyatning ayrim turlari bilan shug‘ullanishi mumkin",
    },

    scientific_page: {
      heading: "Ilmiy faoliyat",
      text1: "Institut ilmiy tadqiqotining asosiy yo‘nalishlari",
      text2:
        "Respublikaning gidro-mineral salohiyatini baholash bo‘yicha ilmiy-tadqiqot, geoekologik, tematik ishlar va laboratoriya-texnologik tadqiqotlarning ustuvor yo‘nalishlarini asoslash va amalga oshirish, qidiruv ishlarini yo‘lga qo‘yishning bashoratli resurslarini baholagan holda yer osti suvlarini taqsimlashning istiqbolli hududlarini aniqlash;",
      text3:
        "yer osti suvlari konlarini prognozlash, qidirish, baholash va qidirish usullarini takomillashtirish; tasdiqlangan razvedka dasturlari doirasida yer osti suvlari uchun geologiya-qidiruv ishlarini yo‘lga qo‘yishning yangi istiqbolli yo‘nalishlarini, prognozlashning ilg‘or usullarini qo‘llagan holda chuqur tahlil qilish asosida asoslash va tanlash hamda ularning bajarilishini nazorat qilish; intensiv texnogenez hududlarida geologik-ekologik tadqiqotlar va xaritalash ishlarini olib borish usullarini ishlab chiqish; yer osti suvlari monitoringi va davlat kadastrini hamda yer osti suvlarining davlat hisobini yuritish; gidrogeologik va muhandislik-geologik tadqiqotlar usullari va tamoyillarini ishlab chiqish; yer osti suvlari konlarini qidirish, baholash va qidirishning zamonaviy usullarining oqilona kompleksini ishlab chiqish; yangi texnik vositalarni ishlab chiqish, yer osti suvlarini qidirish texnologiyalarini ishlab chiqish va ulardan oqilona foydalanish; chuchuk yer osti suvlari zahiralarini sun’iy ravishda to‘ldirish va ularni ifloslanishdan himoya qilish, gidromineral xom ashyoni qayta ishlash va ulardan foydalanish texnologiyalarini ishlab chiqish. Institutning asosiy vazifalari quyidagilardan iborat:",
      text4:
        "o‘z vakolatlari doirasida geologiya-qidiruv ishlarini rivojlantirishning o‘rta muddatli va uzoq muddatli dasturlarini ishlab chiqish va shakllantirishda ishtirok etish; tizimli tahlil asosida gidrogeologik ishlarning aniq ob'ektlari uchun bashoratli resurslarning ishonchliligi va ob'ektivligi to'g'risida xulosa chiqarish; burg'ulash bo'yicha qarorlarni muvofiqlashtirish va maxsus suvdan foydalanish uchun ruxsatnomalar berish. o‘z vakolatlari doirasida geologiya-qidiruv ishlarini rivojlantirishning yillik, o‘rta muddatli va uzoq muddatli dasturlarini ishlab chiqish va shakllantirishda ishtirok etish; ilmiy-tadqiqot, geoekologik, tematik, tajriba-konstruktorlik va nashriyot ishlarining ustuvor yo‘nalishlarini ishlab chiqadi va Davlat geologiya organi bilan muvofiqlashtiradi; O‘zbekiston Respublikasi hududida yer osti suvlari konlarining shakllanishi va joylashish qonuniyatlarini o‘rganish bo‘yicha ishlarni amalga oshiradi; yer osti suvlari konlarini bashorat qilishni ularning prognoz resurslarini baholagan holda amalga oshiradi va geologiya-qidiruv ishlarini keyingi yo‘nalishlar bo‘yicha ilmiy-uslubiy tavsiyalar ishlab chiqadi; chuqur tahlillar asosida, prognozlashning ilg‘or usullaridan, yangi istiqbolli yo‘nalishlardan foydalangan holda gidrogeologiya ishlarini yo‘lga qo‘yish, ularning tasdiqlangan razvedka dasturlari doirasida amalga oshirilishini nazorat qiladi; Tizim tahlili asosida MGR ob'ektlari uchun prognoz resurslarining ishonchliligi va ob'ektivligi to'g'risida xulosalar chiqaradi;",
      text5:
        "davlat byudjeti mablagʻlari hisobidan geologik oʻrganish uchun yer qaʼri uchastkalaridan foydalanish huquqining vujudga kelishi uchun asos boʻlgan yer qaʼrini geologik oʻrganish boʻyicha loyiha-smeta hujjatlari; ilmiy-tadqiqot, tajriba-uslubiy va boshqa ishlar natijalari toʻgʻrisidagi hisobotlar; Ilmiy kengash institut olimlari, yuqori malakali mutaxassislari va olimlaridan tuziladi, u ilmiy-tadqiqot, tajriba-metodik, mavzuiy va boshqa ishlarning yo‘nalishlarini belgilaydi, loyiha-smeta hujjatlarini, bajarilgan ishlar natijalari to‘g‘risidagi hisobotlarni va boshqa ishlarni ko‘rib chiqadi. institut faoliyatining asosiy yo‘nalishlariga oid masalalarni amalga oshiradi:",
      text6:
        "meliorativ gidrogeologiya, muhandislik geologiyasi va gidrogeologiya sohasidagi tadqiqotlar; er osti suvlari monitoringi, kuzatuv quduqlarini tiklash va burg'ulash; suv zahiralarining ifloslanishi va kamayish jarayonini o'rganish; foydali qazilmalar konlarining gidrogeologik va muhandislik-geologik sharoitlarini o‘rganish; shaharlar va sanoat zonalarining ekologik sharoitlarini o'rganish; jinslarning fizik-mexanik xossalarini aniqlash; topografik-geodeziya ishlarini olib borish va xaritalar berish; yuridik va jismoniy shaxslarga pullik xizmatlar ko‘rsatish; qishloq xo'jaligi uchun o'g'itlar ishlab chiqarish, qishloq xo'jaligi mahsulotlarini etishtirish; mineral va ichimlik suvlarini idishlarga quyish; Institut xodimlari tomonidan 360 dan ortiq ilmiy, tematik va geoekologik ishlar, tashqi va ichki tashkilotlar bilan 100 dan ortiq shartnomaviy ishlar bajarilgan.",
      title: "So'nggi yillarda erishilgan asosiy ilmiy yutuqlar:",
      text7: `Mavjud suv olish joylarida chuchuk er osti suvlarining ekspluatatsiya zahiralarini ularning shakllanishining hozirgi sharoitlarida qayta baholash bo'yicha uslubiy talablar ishlab chiqilgan (P.P.Nagevich, O.V.Chebotareva). (Abdullaev Sh.X., Abdullaev B.D.) Yoʻnalishli elektromagnit zondlash (YEMS) usuli ishlab chiqilgan. (Xamraev D.F.).Xalqaro loyiha doirasida Orol va Farg‘ona viloyatlarining eng kuchli antropogen yuki bo‘lgan transchegaraviy hududlari uchun geologik muhitning hozirgi ekologik holati baholandi va 1:1000000 masshtabdagi geoekologik xaritalar tuzildi. Markaziy Yevroosiyo boʻyicha va Rossiya, Qirgʻiziston va Xitoy ishtirokidagi Markaziy Yevroosiyo xalqaro atlasiga nashrga taqdim etilgan. (Pinxasov B.I., Pryadudenko T.I.) Fargʻona, Qashqadaryo va boshqa artezian havzalarining mineral er osti suvlarining paydo boʻlishi va sifatini tavsiflovchi geofizik parametrlar va koʻrsatkichlar strukturaviy-tektonik sharoitlarni tiplashtirish va geofizikaviy taqsimotda tizimli tahlil qilish tamoyili asosida baholanadi. maydon parametrlari. (Gribanov B.I., Abdullaev Sh.X.) Geoindikatorlar OGP (koʻchki jarayonlari) dan hudud xavfi haqida ogohlantirish uchun belgilandi. (Minchenko V.D.) UGP monitoringini oʻtkazish metodikasi ishlab chiqildi (Minchenko V.D.) Oʻzbekistonning yirik shaharlarining 1:25000 masshtabdagi 14 ta ekologik-geologik xaritalaridan iborat Atlas nashrga tayyorlandi. (Zohidova D.V., Semenova S.).Qattiq foydali qazilmalar konlarini baholash va qidirish bosqichlarida gidrogeologik va muhandislik-geologik tadqiqotlarga qoʻyiladigan talablar (Zokirov M.) Yer osti suvlarining davlat monitoringini oʻtkazish metodikasi ishlab chiqildi (Borisov V.A.). Buxoro-Qarshi artezian havzasidagi yer osti suvlarining makro va mikrokomponent tarkibi neft konlarini uzoq muddatli va intensiv ekspluatatsiya qilish hisobiga baholandi (Baqiyev S.A.).Kruk. (Bakiev S.A.) Yer osti suvlari konlarini hosil qiluvchi tabiiy kam suv manbalarining hududiy va mahalliylashtirilgan xususiyatlari baholandi. (Kovalev Yu.S.).Ger osti suvlarining ifloslanishining oʻrta masshtabli xaritasini tuzish metodologiyasiga qoʻyiladigan talablar ishlab chiqilgan. (Abdullaev B.D.) ShKda suvli qatlamlarning gidrogeologik parametrlarini baholash bo‘yicha ko‘rsatmalar tuzildi. (Gribanov B.I.).`,
    },

    governance_page: {
      heading: "Boshqaruv",
      governance_list: {
        item1: {
          title1: "TO'LIQ ISM.",
          title2: "Lavozim",
          title3: "Telefon",
          title4: "Fuqarolarni qabul qilish vaqti",
          fullname: "	Bimurzaev G'ani Amirgalievich",
          position: "	Direktor",
          telephone: "71 265-03-59",
          day: "Seshanba va payshanba",
          time: "16:00-18:00",
        },

        item2: {
          title1: "TO'LIQ ISM.",
          title2: "Lavozim",
          title3: "Telefon",
          title4: "Fuqarolarni qabul qilish vaqti",
          fullname: "Oxunov Farruxjon Abduqahhorovich",
          position: "	Ilmiy ishlar va innovatsiyalar bo‘yicha direktor o‘rinbosari",
          telephone: "71 265-03-78",
          day: "Dushanba va juma",
          time: "18:00-17:00",
        },

        item3: {
          title1: "TO'LIQ ISM.",
          title2: "Lavozim",
          title3: "Telefon",
          title4: "Fuqarolarni qabul qilish vaqti",
          fullname: "Andreev Dmitriy Nikolaevich",
          position: "Ilmiy kotib",
          telephone: "71 265-03-78",
          day: " Dushanbadan jumagacha",
          time: "8:00-11:00",
        },

        item4: {
          title1: "TO'LIQ ISM.",
          title2: "Lavozim",
          title3: "Telefon",
          title4: "Fuqarolarni qabul qilish vaqti",
          fullname: "Toshev Doniyor Xudoyorovich",
          position: "Iqtisodiyot va geologiya xizmatini shakllantirish kafedrasi mudiri",
          telephone: "71 265-03-78",
          day: " Dushanbadan jumagacha",
          time: "8:00-11:00",
        },

        item5: {
          title1: "TO'LIQ ISM.",
          title2: "Lavozim",
          title3: "Telefon",
          title4: "Fuqarolarni qabul qilish vaqti",
          fullname: "	Erxanov Nurmuxammajon Absaitovich",
          position: "	Bosh hisobchi",
          telephone: "71 265-03-16",
          day: " Dushanbadan jumagacha",
          time: "8:00-11:00",
        },

        item6: {
          title1: "TO'LIQ ISM.",
          title2: "Lavozim",
          title3: "Telefon",
          title4: "Fuqarolarni qabul qilish vaqti",
          fullname: "	Meliboev Jasur Malik ugli",
          position:
            "Xalqaro tadqiqotlar, startap loyihalar, marketing va patent fanlari markazi rahbari",
          // telephone: "71 265-03-16",
          // day: " C понедельника по пятницу",
          // time: "8:00-11:00",
        },

        item7: {
          title1: "TO'LIQ ISM.",
          title2: "Lavozim",
          title3: "Telefon",
          title4: "Fuqarolarni qabul qilish vaqti",
          fullname: "	Abdullaev Botirjon Dadajonovich",
          position:
            "“Yer osti suvlari monitoringi va geoekologik tadqiqotlar” markazi rahbari",
          // telephone: "71 265-03-16",
          // day: " C понедельника по пятницу",
          // time: "8:00-11:00",
        },

        item8: {
          title1: "TO'LIQ ISM.",
          title2: "Lavozim",
          title3: "Telefon",
          title4: "Fuqarolarni qabul qilish vaqti",
          fullname: "	Muminjonov Talat Isroilovich",
          position:
            "	“Yer osti suvlari resurslari va zahiralarini tadqiq qilish” markazi rahbari",
          // telephone: "71 265-03-16",
          // day: " C понедельника по пятницу",
          // time: "8:00-11:00",
        },
      },
    },

    normative_page: {
      heading: "Normativ baza",
      lexuz: `Qonun hujjatlari maʼlumotlari milliy bazasi O‘zbekiston Respublikasi`,
      resolutions: "O‘zbekiston Respublikasi Prezidentining Farmon va qarorlari",
      ministers: "Vazirlar Mahkamasining qarorlari O‘zbekiston Respublikasi",
      rules: "Normativ Qoidalar",
    },

    contacts_page: {
      heading: "Kontaktlar",
      office: "idora",
      secretary: "Ilmiy kotib",
      telegram: "Telegramdagi yangiliklar kanali",
      location: "Manzil",
    },

    history_page: {
      heading: "Tarix va yetakchilik",
      text1: `1921 yil - Turkvodxoz, keyinroq Sredazvodxoz. Z.F.Gorizdro-Kulchitskaya (1925), N.F.Bezobrazova (1927) Gidrogeologiya bo‘limida sug‘orish tizimlarini tiklash bo‘yicha ishladilar, Chirchiq, Angren, Keles daryolari havzalarining gidrogeologik sharoitlariga umumiy tavsif berdilar. Bass o'rganish uchun. R. Zarafshonga leningradlik mutaxassislar A.N.Nikolaev, S.A.Butov, S.F.Mashkovtsev taklif qilingan (1925). 1924 yildan beri O.K.Lange boshchiligidagi gidrogeologlar guruhi doimiy ravishda ishlab kelmoqda. Tadqiqot natijalari "Irrigatsiya" jurnalining sonlarida va SAGU asarlarida nashr etilgan (Mujchinkin, 1924-1928; Reshetkin, 1927-1929; Arxangelskiy, 1928; Tolstixin, 1924-1928).`,
      text2:
        "1950-1960 yillarda gidrogeologiya va muhandislik-geologik tadqiqotlar X.M.Abdullaev, G.A.Mavlyanov, N.A.Kenesarin, X.T.Toʻlaganovlar nomlari bilan bogʻliq boʻlib, sanoat gidrogeolog va geologlardan yangi gʻoyalarni talab qildi. fan va ishlab chiqarishni rivojlantirish.Oʻzbekgidrogeologiya tresti (X.T.Toʻlaganov va boshqalar), GIDROINGEO instituti (G.A.Mavlyanov) tashkil etildi.Gidrogeologiya va muhandislik geologiyasi sohasida iqtisodiyot.",
      title1: "“GIDROINGEO” Gidrogeologiya va muhandislik geologiyasi instituti",
      text3:
        "1959-yil 29-noyabrda Oʻzbekiston SSR Vazirlar Sovetining 737-sonli qarori bilan Oʻzbekiston SSR Fanlar akademiyasi tizimida tashkil etilgan.",
      text4:
        "1971 yil 4 iyundan boshlab Oʻzbekiston SSR Vazirlar Kengashining 250-son buyrugʻi bilan GIDROINGEO instituti “Oʻzbekgidrogeologiya” davlat gidrogeologiya korxonasi tarkibiga kiradi.",
      text5:
        "2000 yil 20 iyundan “Oʻzbekgidrogeologiya” davlat korxonasining 57-son buyrugʻi asosida “GIDROINGEO” Gidrogeologiya va muhandislik geologiyasi instituti uning shoʻba korxonasiga aylanadi.",
      text6:
        "“O‘zbekiston Respublikasi Davlat geologiya va mineral resurslar qo‘mitasining geologiya ishlarini tashkil etish va faoliyatini takomillashtirish chora-tadbirlari to‘g‘risida”gi PQ – 568-sonli qarori asosida va O‘zbekiston Respublikasi Davlat geologiya qo‘mitasining buyrug‘i asosida O‘zbekiston Respublikasi Geologiya va mineral resurslar bo‘yicha 2007 yil 25 yanvardagi 11-son qarori bilan Institut Davlat geologiya qo‘mitasining tarkibiy bo‘linmasi hisoblanadi.",
      title2: "Gidrogeologiya va muhandislik geologiyasi instituti (GIDROINGEO)",
      text7:
        " oʻz faoliyati bilan Oʻrta Osiyo, Janubiy Qozogʻiston va Ozarbayjon (qurgʻoq zona) hududlarini qamrab olgan boʻlib, 19 ta laboratoriya va eksperimental metodik partiyaga ega 9 kafedradan iborat. , shundan: 3 nafar shifokor, 28 nafar fan nomzodi, kichik ilmiy xodim – 67 nafar, katta muhandis – 22 nafar, turli mutaxassislikdagi texnik va laborant – 110 nafar.",
      title3: "Gidrogeologiya va muhandislik geologiyasi instituti (GIDROINGEO)",
      text8:
        "- yer osti suvlarining hosil bo'lish qonuniyatlarini o'rganish bo'yicha ilmiy-tadqiqot ishlarini olib boradi; xalq xo‘jaligida foydalanish uchun resurslar va sanoat sho‘rlarini aniqlash; sug'oriladigan dehqonchilik maydonlarining meliorativ gidrogeologiyasining asosiy masalalarini ishlab chiqish; lyoss jinslarning tarqalish qonuniyatlarini va ularning muhandislik-geologik xususiyatlarini o'rganish; gidrogeologik ishlarning usullari va usullarini takomillashtirish; ularning tejamkorligi va samaradorligini tahlil qilish; gidrogeologik va muhandislik-geologik tadqiqotlarni ilmiy asoslash; ishlab chiqarish tashkilotlari tomonidan xalq xo‘jaligi masalalarini tezkor hal etish bo‘yicha individual amaliy takliflar ishlab chiqish; qurgʻoqchil zona gidrogeologiyasi va muhandislik geologiyasi boʻyicha ilmiy-tadqiqot va tematik ishlarni muvofiqlashtirish.Yuqoridagi yoʻnalishlar boʻyicha institut tomonidan ishlar amalga oshirilib, nashr etilgan ishlar, simpoziumlar, yigʻilish va seminarlarda oʻz aksini topdi, ishlab chiqarish tashkilotlariga taqdim etilgan tavsiyalar.Ammo, umuman olganda, gidrogeologik va muhandislik-geologik tadqiqotlarda ilmiy-texnikaviy taraqqiyotni jadallashtirish bilan bog‘liq muammolarni hal etishda ortda qolmoqda.Xususan, geofizik usullar, aerodinamik usullar, gidrogeologik va muhandislik-geologik xaritalash usullari va qidiruv-qidiruv ishlari va geologiya-qidiruv ishlarini rivojlantirish bo‘yicha ilmiy ishlar. nazariy asoslari hali yetarli darajada rivojlanmagan.Bu hududlarda gidrogeologik va muhandislik-geologik tadqiqotlarning geologik va iqtisodiy samaradorligini oshirish uchun katta zaxiralar mavjud. fan va amaliyotning asosiy muammolaridagi bog‘lovchi bo‘g‘inlar tufayli.Texnik jihozlar yetarli emas.Institutda hozirgi zamon talablariga javob beradigan laboratoriya binosi mavjud emas.Texnik jihozlardan tashqari qo‘shimcha mutaxassislar (olim) kadrlarini jalb qilish zarur. , shuningdek, kuchli ishlab chiqarish va eksperimental baza bo'lib, ularsiz jamiyatimiz rivojlanishini, keyingi ilmiy-texnik taraqqiyotni kutib bo'lmaydi.",
    },

    history,
    ameliorative,
    hydrogeophysics,
    overture,
    hydrogeology,
    modeling,
    geoecology,
    technical,
    engineering,
    chemical,
    scientific,
    education,
    production,
    activity,
    functions,
  },

  footer: {
    home: "Asosiy",
    about: "INSTITUT HAQIDA",
    about_drop_down: {
      about: "Institut haqida",
      structure: "Institut tuzilishi",
      charter: "Nizom",
      indicators: `Moliyaviy-iqtisodiy ko'rsatkichlar`,
      management: "Boshqaruv",
      history_institute: "Institut tarixi",
      policy: "Missiya va siyosat",
      cooperation: "Hamkorlik",
      history_leadership: "Tarix va etakchilik",
    },

    activity: "FAOLIYAT",
    activity_drop_down: {
      activity: "Faoliyat",
      scientific: "Ilmiy faoliyat",
      production: "Ishlab chiqarish faoliyati",
      education: `Ta'lim`,
    },

    centers_laboratories: "INSTITUT LABORATORIYALARI",
    laboratories_drop_down: {
      meliorative: "Meliorativ gidrogeologiya",
      remote_sensing: "MUHANDISLIK GEODINAMIKASI VA YERNI MASOFADAN ZONDLASH",
      engineering_geology:
        "QATTIQ FOYDALANILGAN KONLAR GIDROGEOLOGIYASI VA MUHANDISLIK GEOLOGIYASI.",
      geoinformation: "GEOAXBOROT TEXNOLOGIYALARI VA MODELLASH",
      geoecology: "GEOEKOLOGIYA",
      hydrophysics: "GIDROGEOFİZIKA",
      monitoring: "YER OSTI SUVLARINING MONITORING VA MINTAQAVIY O'TISHLARI",
      resources: "YER OSTI SUV RESURSLARI",
      uran: "URAN VA GIDROMINERAL RESURSLAR",
      deposits: "Ruda konlarining gidrogeologiyasi va muhandislik geologiyasi",
      chemical: "Geoekologik va kimyoviy laboratoriya",
    },

    normative: "NORMATIV BAZA",
    contacts: "ALOQALAR",
    interactives: "INTERFAOL XIZMATLAR",
  },
};

export default uz;
