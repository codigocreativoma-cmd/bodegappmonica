document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    var targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      var el = document.querySelector(targetId);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 70,
          behavior: "smooth",
        });
      }
    }
  });
});

const modalOverlay = document.getElementById('modal-overlay');
const modalImage = document.getElementById('modal-image');
const closeModalBtn = document.getElementById('modal-close');
const galleryImages = document.querySelectorAll('.gallery-img');

function openModal(src) {
  modalImage.src = src;
  modalOverlay.style.display = 'flex';
}

function closeModal() {
  modalOverlay.style.display = 'none';
}

galleryImages.forEach(function (img) {
  img.addEventListener('click', function () {
    openModal(this.src);
  });
});

closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function (e) {
  if (e.target === modalOverlay) {
    closeModal();
  }
});