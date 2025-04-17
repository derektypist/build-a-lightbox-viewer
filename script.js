const thumbnails = document.querySelectorAll('.gallery-item');
const fullImage = document.getElementById('lightbox-image');
const lightbox = document.querySelector('.lightbox');
const close = document.getElementById('close');

for (const thumbnail of thumbnails) {
  thumbnail.addEventListener("click", () => {
    lightbox.style.display = "flex";
    fullImage.src = thumbnail.src.replace("-thumbnail","");
  });
}

close.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
