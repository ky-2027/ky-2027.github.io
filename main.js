document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery .card img");

  // create lightbox elements
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");

  const lightboxImg = document.createElement("img");
  const lightboxDesc = document.createElement("p");

  // add close button
  const closeBtn = document.createElement("span");
  closeBtn.textContent = "×";
  closeBtn.classList.add("close-btn");

  lightbox.appendChild(closeBtn);
  lightbox.appendChild(lightboxImg);
  lightbox.appendChild(lightboxDesc);
  document.body.appendChild(lightbox);

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxDesc.textContent = img.dataset.description || "";
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden"; // prevent scrolling while open
    });
  });

  // close lightbox on X click
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // optional: also close by clicking outside image/description
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});
