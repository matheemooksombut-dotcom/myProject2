 function toggleMenu() {
      const menu = document.querySelector(".menu");
      menu.classList.toggle("active");
      // เปิด/ปิด display (เพื่อให้สอดคล้องกับ CSS เดิมของคุณ)
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    }