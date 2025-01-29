document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-card img");
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // Modal inner content
    modal.innerHTML = `
        <span class="close">&times;</span>
        <img class="modal-content" alt="Expanded View">
    `;

    document.body.appendChild(modal);

    const modalImage = modal.querySelector(".modal-content");
    const closeBtn = modal.querySelector(".close");

    // Open modal on image click
    images.forEach((img) => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImage.src = img.src;
        });
    });

    // Close modal when clicking close button or outside modal image
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
//video
document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainPlayer = document.getElementById("main-player");
    const videoDescription = document.getElementById("video-description");
  
    // Descriptions for each video
    const descriptions = [
      "Experience the magic of our unique special entries through this video!",
      "Discover the charm of a heartfelt entry with this video!",
      "Relive the elegance of our events with this entry moment!",
      "Feel the energy of an exciting entry in this video!",
      "Experience the elegance of our dream entries in this video!",
      "Watch the magic of unforgettable moments in this video!",
    ];
  
    // Add click event to each thumbnail
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        const videoSrc = thumbnail.getAttribute("data-src");
        mainPlayer.setAttribute("src", videoSrc);
        mainPlayer.play();
        videoDescription.textContent = descriptions[index];
  
        // Highlight the active thumbnail
        thumbnails.forEach((thumb) => thumb.classList.remove("active"));
        thumbnail.classList.add("active");
      });
    });
  });
  