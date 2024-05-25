function sign(num1, num2, num3) {

    // function Multiply(n1, n2) {
    //     return n1 * n2;
    // }

    // let result = Multiply(num1, num2)
    // let finalResult = result * num3;

    // if (finalResult < 0) {
    //     console.log("Negative");
    // } else {
    //     console.log("Positive");
    // }

    let negativeNumber = 0;
    if (num1 < 0) {
        negativeNumber++;
    }
    if (num2 < 0) {
        negativeNumber++;
    }
    if (num3 < 0) {
        negativeNumber++
    }
    if (negativeNumber % 2 != 0) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}
sign(5,
    12,
    -15
);



