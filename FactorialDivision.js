function factorial(num1, num2) {
    let factorial1 = calculateFactorial(num1);
    let factorial2 = calculateFactorial(num2);
    let quotient = factorial1 / factorial2;
    console.log(quotient.toFixed(2));

    function calculateFactorial(num) {
        let factorial = 1;
        while (num > 1) {
            factorial *= num;
            num--;
        }
        return factorial;
    }
}
factorial(6,
    2
);