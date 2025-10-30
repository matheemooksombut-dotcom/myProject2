function toggleMenu() {
  const menu = document.querySelector(".menu");
  const space = document.getElementById("space");
  menu.classList.toggle("active");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }

  // ! จัพื้นที่ margin ในการ แสดง content

  if (menu.classList.contains("active")) {
    space.style.marginTop = "200px";
  } else {
    space.style.marginTop = "0px";
  }
}
