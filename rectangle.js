module.exports = (x, y, callback) => { // using 3 parametrs here, callback will be bring from diferent file
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`)); //the error object is returned as the first one 
    } else {
        setTimeout(() =>
            callback(null, {
                perimetr: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
};


