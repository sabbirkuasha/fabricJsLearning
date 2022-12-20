// Version 1
// console.log("working");

// let canvas = new fabric.Canvas("canvas", {
//   width: 1280,
//   height: 720,
//   backgroundColor: "gray",
// });

// canvas.renderAll();

// fabric.Image.fromURL("https://placeimg.com/1280/720/arch", (img) => {
//   canvas.backgroundImage = img;
//   canvas.renderAll();
// });

// Version 2
// const initCanvas = (id) => {
//   return new fabric.Canvas(id, {
//     width: 1280,
//     height: 720,
//   });
// };

// const setBackground = (url, canvas) => {
//   fabric.Image.fromURL(url, (img) => {
//     canvas.backgroundImage = img;
//     canvas.renderAll();
//   });
// };

// const canvas = initCanvas("canvas");

// setBackground("https://placeimg.com/1280/720/arch", canvas);

// Version 3
let canvas = new fabric.Canvas("canvas", {
  width: 1280,
  height: 720,
  backgroundColor: "gray",
});

let line;
let mouseDown = false;
let LineBtn = document.getElementById("AddLine");

LineBtn.addEventListener("click", activateAddingLine);

function activateAddingLine() {
  canvas.on("mouse:down", startAddingLine);
  canvas.on("mouse:move", startDrawingLine);
  canvas.on("mouse:up", endDrawingLine);

  canvas.selection = false;
  canvas.hoverCursor = "auto";
}

function startAddingLine(o) {
  mouseDown = true;

  let pointer = canvas.getPointer(o.e);
  line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
    id: "addedLine",
    stroke: "red",
    strokeWidth: 3,
    selectable: false,
  });
  canvas.add(line);
  canvas.requestRenderAll();

  console.log(pointer.x);
  console.log(pointer.y);
}
function startDrawingLine(o) {
  if (mouseDown == true) {
    let pointer = canvas.getPointer(o.e);
    line.set({
      x2: pointer.x,
      y2: pointer.y,
    });

    canvas.requestRenderAll();
  }
}
function endDrawingLine() {
  line.setCoords();
  mouseDown = false;
}

let deactivateAddingBtn = document.getElementById("DeactivateAddLine");
deactivateAddingBtn.addEventListener("click", deactivateAddingShape);

function deactivateAddingShape() {
  canvas.off("mouse:down", startAddingLine);
  canvas.off("mouse:move", startDrawingLine);
  canvas.off("mouse:up", endDrawingLine);

  canvas.getObjects().forEach((o) => {
    if (o.id === "addedLine") {
      o.set({
        selectable: true,
      });
    }
  });

  canvas.hoverCursor = "move";
}
