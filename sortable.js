let task = [
  "Requirement Analysis",
  "System Design",
  "Database Design",
  "User Interface Design",
  "Coding",
  "Unit Testing",
  "Integration Testing",
  "BugFix",
  "Documentation",
  "Deployment",
  "Performance Optimization",
  "Peer code review",
];

let listContainer = document.querySelector(".main-list");

let listItem = task.map(
  (task, index) =>
    `<span class="main-item__index">${index + 1}</span>
    <div class="draggable" draggable="true" data-index=${index}>
    <p contenteditable="true">${task}</p>
    </div>
    `
);

let fromIndex = null;
let toIndex = null;

listItem.forEach((item, index) => {
  let node = document.createElement("li");
  node.className = "main-item";
  node.innerHTML = item;
  listContainer.appendChild(node);
});

function onDragStart(event) {
  fromIndex = this.dataset.index;
}
function onDragOver(event) {
  event.preventDefault();
}
function onDrop(event) {
  toIndex = this.dataset.index;
  swap(fromIndex, toIndex);
}

document.querySelectorAll(".draggable").forEach((node) => {
  node.addEventListener("dragstart", onDragStart);
  node.addEventListener("dragover", onDragOver);
  node.addEventListener("drop", onDrop);
});

function swap(fromIndex, toIndex) {
  let nodeList = document.querySelectorAll(".draggable");
  let temp = nodeList[fromIndex].innerHTML;
  nodeList[fromIndex].innerHTML = nodeList[toIndex].innerHTML;
  nodeList[toIndex].innerHTML = temp;
}
