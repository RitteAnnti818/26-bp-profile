document.addEventListener("DOMContentLoaded", () => {
  const navigation = document.getElementById("navbarContent");

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

