document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const gridContainer = document.getElementById("container");
  const gridSizeSlider = document.querySelector("#gridSize");
  const gridSizeOutput = document.querySelector("#value");
  const colorOption = document.getElementById("colorOption");
  const colorPickerWrapper = document.getElementById("colorPickerWrapper");
  const clearBtn = document.getElementById("clear");
  const selectedColor = document.getElementById("selectedColor");

  // Initial grid size
  let gridSize = gridSizeSlider.value;
  gridSizeOutput.textContent = `${gridSize} x ${gridSize}`;

  // Show or hide color picker
  colorOption.addEventListener("change", () => {
    colorPickerWrapper.classList.toggle(
      "hidden",
      colorOption.value !== "singleColor"
    );
  });
  // Get and Set the pen's color
  const penColor =
    colorOption.value === "singleColor" ? selectedColor.value : "#000000";

  // create the hover color effect for each item in the grid
  const addHoverColor = (penColor) => {
    gridContainer.childNodes.forEach((row) => {
      row.childNodes.forEach((item) => {
        item.addEventListener("mouseover", () => {
          item.style.backgroundColor = penColor;
        });
      });
    });
  };

  // create sketch grid
  const createGrid = (gridSize) => {
    gridContainer.innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
      const row = document.createElement("div");
      row.classList.add("item-row");
      row.style.height = `calc(100% / ${gridSize})`;

      for (let j = 0; j < gridSize; j++) {
        const item = document.createElement("div");
        item.style.width = `calc(100% / ${gridSize})`;
        item.style.border = "0.5px solid #e4e3e3";

        row.appendChild(item);
      }
      gridContainer.appendChild(row);
    }

    // add hover effect (drawing effect)
    addHoverColor(penColor);
  };
  // Initial sketch creation
  createGrid(gridSize);

  // Update grid size output on slider input
  gridSizeSlider.addEventListener("input", () => {
    gridSizeOutput.textContent = `${gridSizeSlider.value} x ${gridSizeSlider.value}`;
  });
  // update grid size on display
  gridSizeSlider.addEventListener("change", () => {
    createGrid(gridSizeSlider.value);
  });

  // clearBtn click event
  clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createGrid(gridSizeSlider.value);
  });

  // Pen mode
  let penMode = "draw";

  // Pen mode change event
  const penOptions = document.querySelectorAll("input[name='penMode']");
  penOptions.forEach((penOption) => {
    penOption.addEventListener("change", () => {
      penMode = penOption.value;
    });
  });

  if (penMode === "eraser") {
    hoverColor = "#ffffff";
  }
});
