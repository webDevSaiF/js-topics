const firstColumn = document.querySelector(".col-md-6:first-child");

// RESIZE OBSERVER
const resizeObserver = new ResizeObserver((entries) =>
  changeColumnColor(entries[0])
);
resizeObserver.observe(firstColumn);

// FUNCTION
const changeColumnColor = (entry) => {
  const colWidth = entry.contentRect.width;
  if (colWidth < 420) entry.target.style.background = "#71b6ff";
  if (colWidth < 320) entry.target.style.background = "rgb(14, 185, 77)";
};
