const btn=document.querySelector(".main-menu-btn")

const boton= btn.addEventListener("click", () => {
    document.querySelector(".main-menu-ul").classList.toggle("show");
    location.reload();
  });