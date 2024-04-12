document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("container");
  const gridSizeSlider = document.querySelector("#gridSize");
  const gridSizeOutput = document.querySelector("#value");
  const colorOption = document.getElementById("colorOption");
  const colorPickerWrapper = document.getElementById("colorPickerWrapper");
  let gridSize = gridSizeSlider.value;
  gridSizeOutput.textContent = `${gridSize} x ${gridSize}`;

  gridSizeSlider.addEventListener("input", () => {
    gridSizeOutput.textContent = `${gridSizeSlider.value} x ${gridSizeSlider.value}`;
  });

  colorOption.addEventListener("change", function () {
    if (colorOption.value === "singleColor") {
      colorPickerWrapper.setAttribute("class", "flex justify-between");
    } else {
      colorPickerWrapper.className = "hidden";
    }
  });

  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "item-row");
    row.setAttribute("style", `height: calc(100% / ${gridSize})`);

    for (let j = 0; j < gridSize; j++) {
      let item = document.createElement("div");
      item.setAttribute(
        "style",
        `width: calc(100% / ${gridSize});
      border: 0.5px solid #e4e3e3;`
      );
      row.appendChild(item);
    }
    gridContainer.appendChild(row);
  }
});
