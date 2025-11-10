document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery .card img");

  // create lightbox elements
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  const lightboxImg = document.createElement("img");
  const lightboxDesc = document.createElement("p");

  lightbox.appendChild(lightboxImg);
  lightbox.appendChild(lightboxDesc);
  document.body.appendChild(lightbox);

  // show image in lightbox on click
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxDesc.textContent = img.dataset.description || "";
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden"; // prevent scrolling while lightbox open
    });
  });

  // close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg && e.target !== lightboxDesc) {
      lightbox.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});
