document.addEventListener("DOMContentLoaded", () => {
  
  // 1. ANIMASI PENGISIAN PROGRESS BAR KEAHLIAN
  const progressBars = document.querySelectorAll(".progress");
  setTimeout(() => {
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute("data-width");
      bar.style.width = targetWidth;
    });
  }, 300);

  // 2. ANIMASI ANGKA COUNTER STATISTIK
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    let count = 0;
    const speed = target / 50; 

    const updateCount = () => {
      if (count < target) {
        count += Math.ceil(speed);
        if (count > target) count = target; 
        counter.innerText = count + "+";
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });

  // 3. DETEKSI SCROLL NAVIGASI AKTIF
  const sections = document.querySelectorAll("div[id], card[id]");
  const navItems = document.querySelectorAll(".nav-item");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= (sectionTop - 180)) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });

  // 4. HANDLER ALERT LINK SOSIAL MEDIA
  const alertLinks = document.querySelectorAll(".alert-link");
  alertLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Terima kasih atas ketertarikan Anda! Profil ini sedang dalam tahap penyusunan dan akan segera hadir.");
    });
  });

  // 5. HANDLER DOWNLOAD CV
  const downloadBtn = document.getElementById("download-cv");
  if(downloadBtn) {
    downloadBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Fitur Unduh CV Terpicu. Pastikan file CV 'CV_Muhamad_Nur_Fauji.pdf' tersedia di direktori hosting Anda.");
    });
  }
});