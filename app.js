document.addEventListener("DOMContentLoaded", function () {
  const journey = [
    {
      date: "2022-07-27",
      title: "Pertemuan Pertama",
      text: "Hari di mana segalanya dimulai. Saat Dimana FARINAAA saling mengenal satu sama lain. Kala itu, Sabrina baru saja menginjak bangku kelas 7 jenjang SMP, saat setelah kegiatan MPLS, Sabrina pun mengenal yang saat itu Fauzan sebagai Abang Kelas nya.",
    },
    {
      date: "2022-12-21",
      title: "Mulai Saling Mengenal",
      text: "Saat itu, Sekolah FARINAAA sedang melakukan kegiatan tahunan yaitu Homestay. Saat homestay tersebut Sekolah FARINAAA melakukan sesi dokumentasi berbentuk foto bersama 2 Angkatan. Saat setelah selesai kegiatan Homestay tersebut, Fauzan pun dengan tidak sengaja melihat Sabrina yang tanpa sengaja juga berposisi sejajar ke belakangan dengan Fauzan pada saat sesi dokumentasi foto bersama 2 Angkatan tersebut. Dan dari situ lah Fauzan Mulai Mengenal Dan Menyukai Sabrina. Serta Fauzan pun sempat memendah Perasaan Kepada Sabrina selama beberapa bulan  lama nya setelah Mengenal sabrina dari hasil foto bersama 2 Angkatan itu.",
    },
    {
      date: "2024-11-15",
      title: "Momen Dekat Petama",
      text: "Sore Hari saat itu, FARINAAA Bertemu di ketidaksengajaan yang Beruntung. Perempatan Ceger menjadi ikonik sekaligus Saksi Bisu tentang tercipta nya Kisah Cinta FARINAAA. Banyak Hal berupa Ujian Maupun Kebahagiaan yang di lalui oleh FARINAAA selama itu, Sampai dimana FARINAAA dapat mewujudkan Hububngan yang Dewasa, Mencintai, Memhami, Mendukung, Bertahan, Memaafkan, Dan Memperjuangkan.",
    },
    {
      date: "2024-4-9",
      title: "Momen Spesial",
      text: "Banyak Momen Spesial yang FARINAAA Telah Lewati selama ini. Dari mulai Canda, Tawa, Sedih, Marah, Dan masih banyak sekali Momen Spesial lain nya yang Telah FARINAAA lewati sejauh ini. FARINAAA Selalu mampu untuk berhatan melewati seluruh rintangan dan tantangan yang terjadi selama ini, Tentu nya dengan Tulus, Cinta, Dan kasih Sayang Yang begitu besar dari Fauzan & Sabrina yang sellau berpegang teguh pada Prinsip FARINAAA Yaitu Akan selalu bersama hingga Akhir Hidup Kita Berdua.",
    },
  ];

  const journeyContent = document.getElementById("journeyContent");

  journey.forEach((item) => {
    // 🔍 Otomatis ubah kata kunci jadi bold dan pink
    let formattedText = item.text
      .replace(/\b(Fauzan)\b/g, '<span class="font-bold text-pink-700">$1</span>')
      .replace(/\b(Sabrina)\b/g, '<span class="font-bold text-pink-700">$1</span>')
      .replace(/\b(FARINAAA)\b/g, '<span class="font-bold text-pink-700">$1</span>')
      .replace(/\b(Perempatan Ceger)\b/g, '<span class="font-bold text-pink-700">$1</span>');

    // 💌 Buat elemen card
    const card = document.createElement("div");
    card.className =
      "bg-white/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 mb-4 max-w-3xl mx-auto text-justify leading-relaxed backdrop-blur-sm animate-fade-up";

    card.innerHTML = `
      <h3 class="text-2xl font-semibold text-pink-700 mb-2">${item.title}</h3>
      <p class="text-gray-800 text-[1rem] sm:text-[1.05rem]">${formattedText}</p>
      <span class="text-sm text-gray-500 mt-3 block">${new Date(item.date).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}</span>
    `;

    journeyContent.appendChild(card);
  });
});