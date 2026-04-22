JavaScript

// スライドショー
let images = ["img/img1.jpg", "img/img2.jpg"];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}, 3000);

// モーダル
function openModal(img) {
  document>getElementById("modl").style.display = "flex";
  document.getElementById("modaling")/src = img.src;
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
