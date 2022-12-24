let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.border = "5px solid red";

let canvas_width = canvas.width;
let canvas_height = canvas.height;

let shapes = [];
let current_Shape_index = null;
shapes.push({ x: 0, y: 0, width: 200, height: 200, color: "gray" });
// shapes.push({ x: 0, y: 0, width: 200, height: 200, color: "green" });

let is_mouse_in_shape = function (x, y, shape) {
  let shape_left = shape.x;
  let shape_right = shape.x + shape.width;
};

let draw_shapes = function () {
  context.clearRect(0, 0, canvas_width, canvas_height);
  for (let shape of shapes) {
    context.fillStyle = shape.color;
    context.fillRect(shape.x, shape.y, shape.width, shape.height);
  }
};

draw_shapes();

let mouse_down = function (e) {
  e.preventDefault();
  let startX = parseInt(e.clientX);
  let startY = e.clientY;
  console.log(`${startX} & ${startY}`);

  let index = 0;
  for (let shape of shapes) {
    if (is_mouse_in_shape(startX, startY, shape)) {
      current_Shape_index = index;
    }

    index++;
  }
};
canvas.onmousedown = mouse_down;
