 function toggleMenu() {
      const menu = document.querySelector(".menu");
      const space = document.getElementById("space");
      menu.classList.toggle("active");

      // เปิด/ปิด display (เพื่อให้สอดคล้องกับ CSS เดิมของคุณ)
      if (menu.style.display === "block") {
        menu.style.display = "none";
        
      } else {
        menu.style.display = "block";
      }
        if (menu.classList.contains("active")) {
        space.style.marginTop = "200px";
      } else {
        space.style.marginTop = "0px";
      }
      }
          
    


  