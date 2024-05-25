function add(num1, num2, num3) {
    let tempResult = sum(num1, num2);
    let result = subtract(tempResult, num3);
    console.log(result);
    function sum(x, y) {
        return x + y;
    }
    function subtract(a, b) {
        return a - b;
    }
}
add(1,
    17,
    30
)