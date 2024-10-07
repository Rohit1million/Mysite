function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function () {
  const elementsToAnimate = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class when element enters the viewport
        entry.target.classList.add('animate');
        entry.target.classList.remove('fade-out');
      } else {
        // Optionally add fade-out effect when the element leaves the viewport
   
        entry.target.classList.remove('animate');
      }
    });
  }, { threshold: 0.1 });

  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
});
