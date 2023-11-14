// * DATA
const statesData = [
  {
    KEY: "PRIMARY_STATES",
    states: ["California", "Florida", "Texas"],
    selectedStates: [],
    minimumStates: 2,
  },

  {
    KEY: "OPTIONAL_STATES",
    states: [
      "Alabama",
      "Arizona",
      "Arkansas",
      "Georgia",
      "Illinois",
      "North Carolina",
      "Ohio",
      "Oregon",
      "Pennsylvania",
      "South Carolina",
      "Tennessee",
      "Utah",
      "Virginia",
      "Washington",
    ],
    selectedStates: [],
    minimumStates: 6,
  },
];
const section = document.querySelector("section");

statesData.forEach((stateData) => {
  // * CREATING DOM
  const dropDownContainer = document.createElement("div");
  const headline = document.createElement("h2");
  headline.className = `mb-2`;
  headline.innerText = `Select Minimum ${
    stateData.minimumStates
  } ${stateData.KEY.toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")}`;

  dropDownContainer.className = `fc-dropdown-container my-3`;
  dropDownContainer.innerHTML = `
  <div class="fc-selected-container ${stateData.KEY}-selected-container"></div>
  <div class="fc-options-container  ${stateData.KEY}-options-container"></div>`;
  section.appendChild(headline);
  section.appendChild(dropDownContainer);

  // * ELEMENTS
  const { KEY, selectedStates, states, minimumStates } = stateData;
  const optionsContainer = dropDownContainer.querySelector(
    `.${stateData.KEY}-options-container`
  );
  const selectedContainer = dropDownContainer.querySelector(
    `.${stateData.KEY}-selected-container`
  );

  // * INITIAL LISTENER
  window.addEventListener(KEY, (e) => {
    renderStatesOptions(
      optionsContainer,
      e.detail.KEY,
      "NON-SELECTED",
      e.detail
    );
    renderStatesOptions(selectedContainer, e.detail.KEY, "SELECTED", e.detail);
  });

  // * MAIN FUNCTION
  const renderStatesOptions = (element, KEY, TYPE, getEvent) => {
    element.innerHTML = "";

    const renderStates =
      TYPE === "NON-SELECTED" ? getEvent.states : getEvent.selectedStates;
    const renderSelectedStates =
      TYPE === "NON-SELECTED" ? getEvent.selectedStates : getEvent.states;

    renderStates.map((statesItem) => {
      const spanOption = document.createElement("span");
      spanOption.className = "fc-option";
      spanOption.innerText = statesItem;
      element.append(spanOption);

      spanOption.addEventListener("click", () => {
        const isState = renderStates.includes(statesItem);
        if (!isState) return;
        renderStates.splice(renderStates.indexOf(statesItem), 1);
        if (!renderSelectedStates.includes(statesItem))
          renderSelectedStates.push(statesItem);

        const event = new CustomEvent(KEY, {
          detail: {
            KEY,
            minimumStates,
            states: getEvent.states,
            selectedStates: getEvent.selectedStates,
          },
        });
        localStorage.setItem(KEY, JSON.stringify(event.detail));
        window.dispatchEvent(event);
      });
    });
  };

  // * INITIAL CUSTOM EVENT
  const initialData = JSON.parse(localStorage.getItem(KEY)) || {
    KEY,
    minimumStates,
    states,
    selectedStates,
  };
  const event = new CustomEvent(KEY, {
    detail: initialData,
  });
  window.dispatchEvent(event);
});
