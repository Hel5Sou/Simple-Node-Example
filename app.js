const rect = require('./rectangle');
// importing from the reactangle.js

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimension: ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('ERROR:', err.message);
        } else {
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`Perimetr of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimetr()}`);
        }
    });
    console.log('This statement is logged after the call to rect()');
}
// test the solveRect function
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5); // not working, because of 0
solveRect(5, -3); // nor working, because of -3
