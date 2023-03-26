const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth - 20);
const height = (canvas.height = window.innerHeight - 100);
let algorithm = "bubble";

// Set up variables
let array = [];
let size = 50;
let speed = 5;

// Set up buttons
const randomizeButton = document.getElementById("randomize");
const solveButton = document.getElementById("solve");
const sizeSlider = document.getElementById("size");
const speedSlider = document.getElementById("speed");
const algorithmDropdown = document.getElementById("algorithm");

// Set up event listeners
randomizeButton.addEventListener("click", randomizeArray);
solveButton.addEventListener("click", solveArray);
sizeSlider.addEventListener("input", changeSize);
speedSlider.addEventListener("input", changeSpeed);
algorithmDropdown.addEventListener("change", changeAlgorithm);

// Generate initial array
randomizeArray();

// Function to randomize the array
function randomizeArray() {
  array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * (height - 50)) + 10);
  }
  drawArray();
}
function changeAlgorithm() {
  algorithm = algorithmDropdown.value;
}

// Function to draw the array on the canvas
function drawArray() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ddd";
  ctx.fillRect(0, 0, width, height);
  const barWidth = width / size;
  for (let i = 0; i < size; i++) {
    const x = i * barWidth;
    const y = height - array[i];
    const color = `hsl(${(array[i] / height) * 360}, 100%, 50%)`;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, barWidth, array[i]);
  }
}

// Function to change the size of the array
function changeSize() {
  size = sizeSlider.value;
  randomizeArray();
}

// Function to change the speed of the sorting
function changeSpeed() {
  speed = 10 - speedSlider.value;
  console.log(speed);
}

// Function to start the sorting
async function solveArray() {
  solveButton.disabled = true;
  randomizeButton.disabled = true;
  sizeSlider.disabled = true;
  speedSlider.disabled = true;
  algorithmDropdown.disabled = true;
  switch (algorithm) {
    case "bubble":
      await bubbleSort();
      break;
    case "insertion":
      await insertionSort(array);
      break;
    case "merge":
      await mergeSort(array);
      break;
    case "Quick":
      await quickSort(array);
      break;
      case "selection":
        await selectionSort(array);
        break;
        case "heap":
            await heapSort(array);
            break;

    default:
      console.error("Invalid algorithm");
  }

  algorithmDropdown.disabled = false;

  solveButton.disabled = false;
  randomizeButton.disabled = false;
  sizeSlider.disabled = false;
  speedSlider.disabled = false;
}
// Function to sleep for a certain number of milliseconds
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
