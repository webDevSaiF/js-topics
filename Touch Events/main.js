document.addEventListener("touchstart", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.top = `${touch.pageX}px`;
    dot.style.left = `${touch.pageY}px`;
    dot.id = touch.identifier;
    document.body.append(dot);
    console.log("started");
  });
});

document.addEventListener("touchmove", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.style.top = `${touch.pageX}px`;
    dot.style.left = `${touch.pageY}px`;
  });
});
document.addEventListener("touchend", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.remove();
  });
});
