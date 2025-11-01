// CONFIGURASI WEBSITE HIMABIS
// Edit file ini untuk mengubah konten website

const CONFIG = {
  // ===== KONFIGURASI UMUM =====
  SITE: {
    TITLE: "HIMABIS - Himpunan Mahasiswa Bisnis",
    DESCRIPTION: "Wadah pengembangan potensi mahasiswa bisnis untuk menjadi pemimpin masa depan yang berintegritas dan inovatif",
    KEYWORDS: "himabis, bisnis, mahasiswa, organisasi, kampus",
    AUTHOR: "Vynaa Valerie"
  },

  // ===== DATA ORGANISASI =====
  ORGANIZATION: {
    NAME: "HIMABIS",
    FULL_NAME: "Himpunan Mahasiswa Bisnis",
    TAGLINE: "Membangun Pemimpin Bisnis Masa Depan",
    DESCRIPTION: "HIMABIS adalah wadah pengembangan potensi mahasiswa bisnis untuk menjadi pemimpin yang berintegritas, inovatif, dan berdaya saing global.",
    YEAR_ESTABLISHED: 2018,
    EXPERIENCE_YEARS: 5
  },

  // ===== DATA KONTAK =====
  CONTACT: {
    ADDRESS: "Gedung Student Center Lt. 3, Kampus Universitas",
    EMAIL: "himabis@univ.ac.id",
    PHONE: "+62 812 3456 7890",
    SOCIAL_MEDIA: {
      instagram: "https://instagram.com/himabis",
      twitter: "https://twitter.com/himabis",
      facebook: "https://facebook.com/himabis",
      linkedin: "https://linkedin.com/company/himabis",
      youtube: "https://youtube.com/himabis"
    }
  },

  // ===== STATISTIK =====
  STATS: [
    {
      number: "500+",
      label: "Anggota Aktif"
    },
    {
      number: "50+",
      label: "Kegiatan/Tahun"
    },
    {
      number: "15+",
      label: "Mitra Perusahaan"
    }
  ],

  // ===== STRUKTUR PENGURUS =====
  PENGURUS: [
    {
      name: "Alexandra Wijaya",
      position: "Ketua Umum",
      photo: "https://h.top4top.io/p_3592tka6c1.jpg",
      social: {
        linkedin: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Budi Santoso",
      position: "Wakil Ketua",
      photo: "https://i.top4top.io/p_3592lgnc22.jpg",
      social: {
        linkedin: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Cynthia Dewi",
      position: "Sekretaris",
      photo: "https://j.top4top.io/p_3592cet3d3.jpg",
      social: {
        linkedin: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "David Pratama",
      position: "Bendahara",
      photo: "https://k.top4top.io/p_3592q6db94.jpg",
      social: {
        linkedin: "#",
        instagram: "#",
        twitter: "#"
      }
    }
  ],

  // ===== KEGIATAN =====
  KEGIATAN: [
    {
      title: "Seminar Kewirausahaan 2023",
      description: "Belajar langsung dari praktisi bisnis sukses tentang strategi memulai dan mengembangkan usaha. Acara ini dihadiri oleh lebih dari 200 peserta.",
      image: "https://a.top4top.io/p_3592a6g7d1.jpg",
      date: "15 November 2023"
    },
    {
      title: "Business Case Competition",
      description: "Kompetisi analisis bisnis terbesar di kampus dengan total hadiah 50 juta rupiah.",
      image: "https://b.top4top.io/p_3592xyz123.jpg",
      date: "10 Oktober 2023"
    },
    {
      title: "Leadership Training",
      description: "Pelatihan kepemimpinan untuk mengembangkan soft skills mahasiswa bisnis.",
      image: "https://c.top4top.io/p_3592abc456.jpg",
      date: "5 September 2023"
    }
  ],

  // ===== FITUR & LAYANAN =====
  FEATURES: [
    {
      icon: "fas fa-users",
      title: "Networking",
      description: "Jaringan luas dengan profesional dan alumni sukses"
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Pengembangan",
      description: "Skill bisnis & leadership melalui berbagai program"
    },
    {
      icon: "fas fa-briefcase",
      title: "Karir",
      description: "Peluang karir & magang dengan perusahaan mitra"
    }
  ],

  // ===== VISI & MISI =====
  ABOUT: {
    TITLE: "Visi & Misi HIMABIS",
    DESCRIPTION: [
      "Kami berkomitmen untuk menciptakan lingkungan yang mendukung pertumbuhan akademis dan profesional melalui berbagai kegiatan, seminar, dan program pengembangan.",
      "Dengan jaringan alumni yang kuat dan kemitraan dengan industri, HIMABIS menjadi jembatan antara dunia akademis dan praktik bisnis nyata."
    ],
    FEATURES: [
      {
        title: "Pengembangan Karir",
        description: "Mempersiapkan mahasiswa untuk karir bisnis yang sukses"
      },
      {
        title: "Jaringan Profesional",
        description: "Terhubung dengan alumni dan praktisi bisnis"
      },
      {
        title: "Kompetisi & Ajang Prestasi",
        description: "Mengasah kemampuan melalui berbagai kompetisi"
      }
    ]
  },

  // ===== WARNA & TEMA =====
  THEME: {
    PRIMARY: "#2563eb",
    PRIMARY_DARK: "#1d4ed8",
    SECONDARY: "#7c3aed",
    ACCENT: "#f59e0b",
    DARK: "#1e293b",
    LIGHT: "#f8fafc"
  }
};

// Export config untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}