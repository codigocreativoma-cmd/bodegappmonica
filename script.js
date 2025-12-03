// Año dinámico en el footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    var targetId = this.getAttribute("href");
    if (targetId && targetId.length > 1) {
      var el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        window.scrollTo({
          top: el.offsetTop - 70,
          behavior: "smooth",
        });
      }
    }
  });
});

// ===========================
// Lógica del modal de galería
// (solo si existen los elementos)
// ===========================
const modalOverlay = document.getElementById("modal-overlay");
const modalImage = document.getElementById("modal-image");
const closeModalBtn = document.getElementById("modal-close");
const galleryImages = document.querySelectorAll(".gallery-img");

// Solo inicializamos el modal si la estructura existe en el DOM
if (modalOverlay && modalImage && closeModalBtn) {
  function openModal(src) {
    modalImage.src = src;
    modalOverlay.style.display = "flex";
  }

  function closeModal() {
    modalOverlay.style.display = "none";
  }

  galleryImages.forEach(function (img) {
    img.addEventListener("click", function () {
      openModal(this.src);
    });
  });

  closeModalBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
}
