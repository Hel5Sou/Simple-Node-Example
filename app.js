const rect = {
    perimetr: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
};

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimension: ${1}, ${w}`);

    if (l <= 0 || w <= 0) {
        console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
    } else {
        console.log(`Area of rectangle: ${rect.area(l, w)}`);
        console.log(`Perimetr of rectangle: ${rect.perimetr(l, w)}`);
    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
