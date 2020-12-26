const rect = require('./rectangle');
// importing from the reactangle.js
function solveRect(l, w) {
    console.log(`Solving for rectangle with dimension: ${1}, ${w}`);

    if (l <= 0 || w <= 0) {
        console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
    } else {
        console.log(`Area of rectangle: ${rect.area(l, w)}`);
        console.log(`Perimetr of rectangle: ${rect.perimetr(l, w)}`);
    }
}
// test the solveRect function
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5); // not working, because of 0
solveRect(5, -3); // nor working, because of -3
