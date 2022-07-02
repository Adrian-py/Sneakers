// Opening and closing the lightbox
const currentImage = document.getElementById("pictures__current"),
  lightbox = document.getElementById("lightbox"),
  closeLightboxButton = document.getElementById("lightbox-close"),
  overlayLightbox = document.getElementById("lightbox-overlay");

function showLightbox() {
  lightbox.style.display = "flex";
}

function closeLightbox() {
  lightbox.style.display = "none";
}

currentImage.addEventListener("click", showLightbox);
closeLightboxButton.addEventListener("click", closeLightbox);
overlayLightbox.addEventListener("click", closeLightbox);

// Changing lightbox current main image
const lightboxThumbnailImages = document.querySelectorAll(
    ".lightbox__content__thumbnails__pic-container__pic"
  ),
  lightboxCurrentImage = document.getElementById("lightbox-current"),
  lightboxChosenClassName =
    "lightbox__content__thumbnails__pic-container__pic__chosen";

function changeLightboxCurrentImage() {}
