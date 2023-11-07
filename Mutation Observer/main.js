const mutationObserver = new MutationObserver((entries) => {
  console.log(entries);
});
const parent = document.querySelector(".container .row");

// OBSERVE CHILD
mutationObserver.observe(parent, {
  childList: true,
});
parent.children[0].remove();
setTimeout(() => parent.appendChild(document.createElement("div")), 200);

// OBSERVE ATTRIBUTES
mutationObserver.observe(parent, {
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ["id"],
});
parent.id = "NewIDAdded";

// OBSERVE CHARACTER DATA
mutationObserver.observe(parent.children[0].querySelector("h5").childNodes[0], {
  characterData: true,
  characterDataOldValue: true,
});
parent.children[0].querySelector("h5").childNodes[0].data = "Title Changed";

// OBSERVE ALL CHILDREN AND NODES
mutationObserver.observe(parent, {
  subtree: true,
  characterData: true,
  characterDataOldValue: true,
});
parent.children[0].querySelector("h5").childNodes[0].data = "Title Changed";
