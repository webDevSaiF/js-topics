// Custom User Timing Entries
performance.mark("startTask");
setTimeout(() => {
  performance.mark("endTask");
  performance.measure("TaskDuration", "startTask", "endTask");
}, 1000);

const observer5 = new PerformanceObserver((list) => {
  const entries = list.getEntriesByType("measure");
  entries.forEach((entry) => {
    console.log("5 Custom User Timing Entries:", entry);
  });
});

observer5.observe({
  entryTypes: ["mark", "measure"],
});

// Observing Long Tasks
const observer4 = new PerformanceObserver((list) => {
  const entries = list.getEntriesByType("longtask");
  entries.forEach((entry) => {
    console.log("4 Observing Long Tasks:", entry);
  });
});
observer4.observe({
  entryTypes: ["longtask"],
});

// Observing Paint Timings
const observer3 = new PerformanceObserver((list) => {
  const entries = list.getEntriesByType("paint");
  entries.forEach((entry) => {
    console.log("3 Observing Paint Timings:", entry);
  });
});
observer3.observe({
  entryTypes: ["paint"],
});

// Observing Navigation and Resource Timings
const observer2 = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    if (entry.entryType === "navigation") {
      console.log("observer2 Navigation Timing:", entry);
    } else if (entry.entryType === "resource") {
      console.log("observer2 Resource Timing:", entry);
    }
  });
});
observer2.observe({
  entryTypes: ["navigation", "resource"],
});

// Setting Up a Performance Observer
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log("observer", entry);
  });
});
observer.observe({
  entryTypes: [
    "navigation",
    "resource",
    "paint",
    "longtask",
    "mark",
    "measure",
  ],
});
