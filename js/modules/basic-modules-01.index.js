import * as Canvas from './js-01/canvas.js';
import * as Circle from './js-01/circle.js';

console.log(Canvas);
console.log(Circle);
Circle.setCircleName('triangle');
// create the canvas and reporting list
let myCanvas = Canvas.create('myCanvas', document.body, 480, 320);
let reportList = Canvas.createReportList(myCanvas.id);

// draw a circle
let circle1 = Circle.draw(myCanvas.ctx, 75, 220, 160, 'green');
Circle.reportArea(circle1.radius, reportList);
Circle.reportPerimeter(circle1.radius, reportList);

// draw a triangle
