//Load All filter by default
window.onload = function () {
  document.querySelector('.filter-btn[data-filter="all"]').click();
};

// Lightbox functionality
const lightbox = document.getElementById("video-lightbox");
const lightboxVideo = document.getElementById("lightbox-video");
const closeLightbox = document.querySelector(".close");

document.querySelectorAll(".video-preview").forEach((video) => {
  video.addEventListener("click", function () {
    const videoSrc = this.getAttribute("data-video");
    lightboxVideo.src = videoSrc;
    lightboxVideo.setAttribute("autoplay", ""); // Autoplay when opened
    lightboxVideo.setAttribute("loop", ""); // Set loop
    lightbox.style.display = "flex";
    lightboxVideo.play(); // Ensure video starts playing
  });
});

closeLightbox.addEventListener("click", function () {
  lightbox.style.display = "none";
  lightboxVideo.pause(); // Pause the video when closing the lightbox
  lightboxVideo.src = ""; // Clear the source to stop the video
});

lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
    lightboxVideo.pause(); // Pause the video when clicking outside
    lightboxVideo.src = ""; // Clear the source to stop the video
  }
});

// Filter functionality for video categories
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const categories = document.querySelectorAll(".category");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove the active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add the active class to the clicked button
      this.classList.add("active");

      // Get the filter category
      const filterValue = this.getAttribute("data-filter");

      // Loop through all categories and filter them
      categories.forEach((category) => {
        if (filterValue === "all") {
          // Show all categories if "all" is selected
          category.classList.add("active");
        } else {
          // Show only the category matching the filter value
          if (category.getAttribute("data-category") === filterValue) {
            category.classList.add("active");
          } else {
            category.classList.remove("active");
          }
        }
      });
    });
  });
});
