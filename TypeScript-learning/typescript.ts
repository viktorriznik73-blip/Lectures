interface Point {
    x: number;
    y: number;
}
function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}
const point = {x: 15, y: 30};
logPoint(point);