document.addEventListener("DOMContentLoaded", () => {
  const navigation = document.getElementById("navbarContent");

  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.rel = "noopener noreferrer";
  });

  if (!navigation || typeof bootstrap === "undefined") {
    return;
  }

  navigation.querySelectorAll('a[href*="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 991.98px)").matches) {
        bootstrap.Collapse.getOrCreateInstance(navigation, { toggle: false }).hide();
      }
    });
  });
});

