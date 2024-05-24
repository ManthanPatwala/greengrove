// script.js
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Optionally stop observing once it's visible
        }
      });
    },
    {
      threshold: 0.1, // Adjust the threshold as needed
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
