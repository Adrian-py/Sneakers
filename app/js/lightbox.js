// Opening and closing the lightbox
const currentImage = document.getElementById("pictures__current"),
  lightbox = document.getElementById("lightbox"),
  closeLightboxButton = document.getElementById("lightbox-close"),
  overlayLightbox = document.getElementById("lightbox-overlay");

function showLightbox() {
  if (window.innerWidth > 768) lightbox.style.display = "flex";
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
  lightboxPrevButton = document.getElementById("lightbox-prev"),
  lightboxNextButton = document.getElementById("lightbox-next"),
  lightboxChosenClassName =
    "lightbox__content__thumbnails__pic-container__pic__chosen";

let lightboxCurrentImageIndex = 1;

function changeToChosenThumbnail(newChosenImage) {
  let newLightboxImage = newChosenImage.getAttribute("data-picture");
  lightboxCurrentImage.src = `./images/image-product-${newLightboxImage}.jpg`;
  let previouslySelectedElement = document.getElementsByClassName(
    lightboxChosenClassName
  )[0];
  previouslySelectedElement.classList.remove(lightboxChosenClassName);
  previouslySelectedElement.nextElementSibling.classList.remove("show");

  newChosenImage.classList.add(lightboxChosenClassName);
  newChosenImage.nextElementSibling.classList.add("show");
}

function changeLightboxCurrentImage(e) {
  lightboxCurrentImageIndex = e.target.getAttribute("data-picture");
  changeToChosenThumbnail(e.target);
}

function prevImage() {
  lightboxCurrentImageIndex--;
  if (lightboxCurrentImageIndex < 1) {
    lightboxCurrentImageIndex = 4;
  }
  changeToChosenThumbnail(
    document.getElementById(`lightbox__thumbnail__${lightboxCurrentImageIndex}`)
  );
}

function nextImage() {
  lightboxCurrentImageIndex++;
  if (lightboxCurrentImageIndex > 4) {
    lightboxCurrentImageIndex = 1;
  }
  changeToChosenThumbnail(
    document.getElementById(`lightbox__thumbnail__${lightboxCurrentImageIndex}`)
  );
}

lightboxThumbnailImages.forEach((img) => {
  img.addEventListener("click", changeLightboxCurrentImage);
});

lightboxPrevButton.addEventListener("click", prevImage);

lightboxNextButton.addEventListener("click", nextImage);
