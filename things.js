var test_array = function(array) {
    return array.length + ' elements in array';
};

var multiply = function(x, y) {
    return `${x} multiplied by ${y} is equal to ${x * y}`;
};

var some_value = 523;

module.exports = {
    test_array: test_array,
    multiply: multiply,
    some_value: some_value
};
