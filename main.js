const menu = document.getElementById("menu");
const playBtn = document.getElementById("playBtn");
const settingBtn = document.getElementById("settingBtn");
const exitBtn = document.getElementById("exitBtn");

const loaderContainer = document.getElementById("loaderContainer");
const photoContainer = document.getElementById("photoContainer");
const backBtn = document.getElementById("backBtn");

// Tombol Play
playBtn.addEventListener("click", () => {
  menu.style.display = "none";
  loaderContainer.style.display = "flex";

  // Simulasi loading 3 detik
  setTimeout(() => {
    loaderContainer.style.display = "none";
    photoContainer.style.display = "flex";
  }, 3000);
});

// Tombol Back di halaman foto
backBtn.addEventListener("click", () => {
  photoContainer.style.display = "none";
  menu.style.display = "flex";
});

// Tombol Setting
settingBtn.addEventListener("click", () => {
  alert("Klik Setting! (RimzzyX)");
});

// Tombol Exit
exitBtn.addEventListener("click", () => {
  alert("Klik Exit! (Ngapain Di Pencet)");
});