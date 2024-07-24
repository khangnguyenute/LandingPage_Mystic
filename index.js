const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", { ...scrollRevealOptions });
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".header__content button", {
  ...scrollRevealOptions,
  delay: 1000,
});

ScrollReveal().reveal(".information__card", {
  ...scrollRevealOptions,
  interval: 500,
});

ScrollReveal().reveal(".testimonial__card", {
  ...scrollRevealOptions,
  interval: 500,
});

ScrollReveal().reveal(".instructor__card", {
  ...scrollRevealOptions,
  interval: 500,
});
