/* 
  Opening and Closing Lightbox
*/
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

/*
Changing Lighbox Main Image Using Prev/Next Button or Thumbnails
*/
const lightboxThumbnailImages = document.querySelectorAll(
    ".lightbox__content__thumbnails__pic-container__pic"
  ),
  lightboxCurrentImage = document.getElementById("lightbox-current"),
  lightboxPrevButton = document.getElementById("lightbox-prev"),
  lightboxNextButton = document.getElementById("lightbox-next"),
  lightboxChosenClassName =
    "lightbox__content__thumbnails__pic-container__pic__chosen";

let lightboxCurrentImageIndex = 1;

// To change current main image
function changeToChosenImage(newChosenImage) {
  let newLightboxImage = newChosenImage.getAttribute("data-picture");
  lightboxCurrentImage.src = `./images/image-product-${newLightboxImage}.jpg`;
  // Remove styling from previously chosen thumbnail
  let previouslySelectedElement = document.getElementsByClassName(
    lightboxChosenClassName
  )[0];
  previouslySelectedElement.classList.remove(lightboxChosenClassName);
  previouslySelectedElement.nextElementSibling.classList.remove("show");

  // Style newly chosen thumbnail
  newChosenImage.classList.add(lightboxChosenClassName);
  newChosenImage.nextElementSibling.classList.add("show");
}

function prevProductImage() {
  lightboxCurrentImageIndex--;
  if (lightboxCurrentImageIndex < 1) {
    lightboxCurrentImageIndex = 4;
  }
  changeToChosenImage(
    document.getElementById(`lightbox__thumbnail__${lightboxCurrentImageIndex}`)
  );
}

function nextProductImage() {
  lightboxCurrentImageIndex++;
  if (lightboxCurrentImageIndex > 4) {
    lightboxCurrentImageIndex = 1;
  }
  changeToChosenImage(
    document.getElementById(`lightbox__thumbnail__${lightboxCurrentImageIndex}`)
  );
}

function changeLightboxImage(e) {
  lightboxCurrentImageIndex = e.target.getAttribute("data-picture");
  changeToChosenImage(e.target);
}

// Event listener for each thumbnail
lightboxThumbnailImages.forEach((img) => {
  img.addEventListener("click", changeLightboxImage);
});

lightboxPrevButton.addEventListener("click", prevProductImage);
lightboxNextButton.addEventListener("click", nextProductImage);
