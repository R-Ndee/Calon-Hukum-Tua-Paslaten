/* =====================================================
   KAMPANYE HUKUM TUA NO. 2
   script.js — Logika & Data
   ===================================================== */

/* ============================================================
   DATA MISI
   CARA EDIT: Tambah atau ubah poin misi di array ini
   ============================================================ */
const daftarMisi = [
  {
    judul: "Meningkatkan Pemerataan Pembangunan",
    teks: "Memastikan pembangunan infrastruktur dan fasilitas desa dirasakan secara merata oleh seluruh warga Paslaten — tidak ada wilayah yang tertinggal."
  },
  {
    judul: "Meningkatkan Pemberdayaan SDM",
    teks: "Memberikan kesempatan seluas-luasnya bagi seluruh lapisan masyarakat untuk meningkatkan kualitas sumber daya manusia demi mencapai tujuan bersama."
  },
  {
    judul: "Meningkatkan Pertumbuhan Ekonomi Masyarakat",
    teks: "Mendorong kemandirian ekonomi warga melalui pemberdayaan usaha lokal, pertanian, dan peningkatan pendapatan masyarakat Paslaten secara berkelanjutan."
  },
  {
    judul: "Pemberian Dana Santunan Duka",
    teks: "Memberikan santunan kepada keluarga warga yang berduka sebagai bentuk kepedulian nyata pemerintah desa kepada seluruh masyarakat Paslaten."
  },
];


/* ============================================================
   DATA KEGIATAN
   CARA EDIT: Tambah kegiatan baru di array ini
   Format: { title, date, image, description }
   ============================================================ */
const activities = [
  {
    title: "Gotong Royong Bersih Desa Paslaten",
    date: "2026",
    image: "https://placehold.co/640x420/C0000A/FFF5EC?text=Gotong+Royong",
    description: "Jeffry Jendry Kumontoy turun langsung bersama ratusan warga Paslaten membersihkan lingkungan desa dan saluran air secara bergotong royong."
  },
  {
    title: "Silaturahmi dengan Tokoh Masyarakat",
    date: "2026",
    image: "https://placehold.co/640x420/3D2B1A/FFF5EC?text=Silaturahmi",
    description: "Mendengar langsung aspirasi tokoh agama, tokoh adat, dan pemuda Paslaten. Setiap masukan dicatat dan dijadikan dasar program kerja nyata."
  },
  {
    title: "Sosialisasi Program kepada Warga",
    date: "2026",
    image: "https://placehold.co/640x420/850007/FFF5EC?text=Sosialisasi",
    description: "Pemaparan visi, misi, dan program kerja langsung kepada warga Paslaten. Warga diajak berdialog dan menyampaikan harapan mereka untuk desa."
  },
  {
    title: "Kunjungan ke Warga dan Petani Lokal",
    date: "2026",
    image: "https://placehold.co/640x420/4a0004/FFF5EC?text=Kunjungan+Warga",
    description: "Mendatangi langsung rumah warga dan lahan petani Paslaten untuk mendengar kendala sehari-hari dan mencari solusi bersama di lapangan."
  },
];


/* ============================================================
   DATA GALERI FOTO
   CARA EDIT: Ganti URL gambar dan keterangan
   ============================================================ */
const galeri = [
  { src: "images/galeri/image1.png", ket: "Jalan Bersama Masyarakat" },
  { src: "images/galeri/image2.jpeg",          ket: "Antusiasme Masyarakat Meramaikan Posko" },
  { src: "images/galeri/image3.jpeg",          ket: "Keseharian di Posko" },
  { src: "images/galeri/image4.jpeg",        ket: "" },
  { src: "https://placehold.co/600x600/C0000A/FFF5EC?text=Rapat+Warga",            ket: "" },
  { src: "https://placehold.co/600x600/1C1007/FFF5EC?text=Kegiatan+Sosial",        ket: "" },
];


/* ============================================================
   RENDER MISI
   ============================================================ */
function renderMisi() {
  const grid = document.getElementById('misi-grid');
  if (!grid) return;

  grid.innerHTML = daftarMisi.map((m, i) => `
    <div class="misi-item">
      <span class="misi-nomor">${String(i + 1).padStart(2, '0')}</span>
      <div class="misi-isi">
        <h4>${m.judul}</h4>
        <p>${m.teks}</p>
      </div>
    </div>
  `).join('');
}


/* ============================================================
   RENDER KEGIATAN
   ============================================================ */
function renderKegiatan() {
  const grid = document.getElementById('kegiatan-grid');
  if (!grid) return;

  grid.innerHTML = activities.map(a => `
    <article class="kegiatan-kartu">
      <img
        src="${a.image}"
        alt="${a.title}"
        class="kegiatan-foto"
        loading="lazy"
      />
      <div class="kegiatan-isi">
        <p class="kegiatan-tanggal">📅 ${a.date}</p>
        <h3 class="kegiatan-judul">${a.title}</h3>
        <p class="kegiatan-desk">${a.description}</p>
      </div>
    </article>
  `).join('');
}


/* ============================================================
   RENDER GALERI
   ============================================================ */
function renderGaleri() {
  const grid = document.getElementById('galeri-grid');
  if (!grid) return;

  grid.innerHTML = galeri.map((g, i) => `
    <button
      class="galeri-item"
      onclick="bukaLightbox(${i})"
      aria-label="Lihat foto: ${g.ket}"
    >
      <img src="${g.src}" alt="${g.ket}" loading="lazy" />
      <div class="galeri-overlay-hover">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
          <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/>
        </svg>
      </div>
      <span class="galeri-ket">${g.ket}</span>
    </button>
  `).join('');
}


/* ============================================================
   LIGHTBOX
   ============================================================ */
let indeksAktif = 0;

function bukaLightbox(i) {
  indeksAktif = i;
  const lb  = document.getElementById('lightbox');
  const img = document.getElementById('lightboxGambar');
  const ket = document.getElementById('lightboxKet');

  img.src = galeri[i].src;
  img.alt = galeri[i].ket;
  ket.textContent = galeri[i].ket;

  lb.classList.add('buka');
  document.body.style.overflow = 'hidden';
}

function tutupLightbox() {
  document.getElementById('lightbox').classList.remove('buka');
  document.body.style.overflow = '';
}

// Keyboard — Esc tutup, panah kiri/kanan navigasi
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('buka')) return;

  if (e.key === 'Escape') {
    tutupLightbox();
  } else if (e.key === 'ArrowRight') {
    indeksAktif = (indeksAktif + 1) % galeri.length;
    bukaLightbox(indeksAktif);
  } else if (e.key === 'ArrowLeft') {
    indeksAktif = (indeksAktif - 1 + galeri.length) % galeri.length;
    bukaLightbox(indeksAktif);
  }
});


/* ============================================================
   NAVBAR MOBILE
   ============================================================ */
function initNavbar() {
  const burger = document.getElementById('navBurger');
  const drawer = document.getElementById('navDrawer');
  let buka = false;

  burger.addEventListener('click', () => {
    buka = !buka;
    burger.classList.toggle('aktif', buka);
    drawer.style.maxHeight = buka ? drawer.scrollHeight + 'px' : '0';
    burger.setAttribute('aria-expanded', buka);
  });

  // Tutup drawer saat link diklik
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      buka = false;
      burger.classList.remove('aktif');
      drawer.style.maxHeight = '0';
    });
  });
}


/* ============================================================
   SCROLL: tombol atas + highlight nav
   ============================================================ */
function initScroll() {
  const btnAtas = document.getElementById('btn-atas');

  window.addEventListener('scroll', () => {
    // Tombol atas
    if (window.scrollY > 400) {
      btnAtas.classList.add('tampil');
    } else {
      btnAtas.classList.remove('tampil');
    }
  }, { passive: true });

  btnAtas.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ============================================================
   REVEAL ON SCROLL — animasi masuk saat scroll
   ============================================================ */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('terlihat');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => obs.observe(el));
}


/* ============================================================
   INISIALISASI
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderMisi();
  renderKegiatan();
  renderGaleri();
  initNavbar();
  initScroll();
  initReveal();
});
