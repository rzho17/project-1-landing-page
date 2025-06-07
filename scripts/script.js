const containerP1 = document.querySelector("#project-1");
const overlayP1 = document.querySelector("#p1-overlay");
const containerP2 = document.querySelector("#project-2");
const overlayP2 = document.querySelector("#p2-overlay");
const containerP3 = document.querySelector("#project-3");
const overlayP3 = document.querySelector("#p3-overlay");
const containerP4 = document.querySelector("#project-4");
const overlayP4 = document.querySelector("#p4-overlay");

overlayFunction(containerP1, overlayP1);
overlayFunction(containerP2, overlayP2);
overlayFunction(containerP3, overlayP3);
overlayFunction(containerP4, overlayP4);

function overlayFunction(container, overlay) {
  container.addEventListener("mouseover", () => {
    overlay.style.display = "flex";
  });

  container.addEventListener("mouseout", () => {
    overlay.style.display = "none";
  });

  container.addEventListener("touchend", () => {
    overlay.style.display = "none";
  });
}
