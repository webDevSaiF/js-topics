window.addEventListener("scroll", (e) => {
  const scrollItems = document.querySelectorAll(".scroll-item");

  scrollItems.forEach((scrollItem) => {
    const scrollY = window.scrollY;
    const scrollRateY = scrollItem.dataset.scrollRateY;
    const scrollRateX = scrollItem.dataset.scrollRateX;

    scrollItem.style.transform = `translate3d(${
      scrollRateX ? scrollY * scrollRateX : 0
    }px, ${scrollRateY ? scrollY * scrollRateY : 0}px, 0px)`;
  });
});
