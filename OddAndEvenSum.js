function odd(num) {
    let numAsStr = num.toString();
    let [evenSum, oddSum] = findEvenAndOddSum(numAsStr); 
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function findEvenAndOddSum(str) {
        let evenSum = 0;
        let oddSum = 0;
        for (let char of numAsStr) {
            let digit = Number(char);
            if (digit % 2 == 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }
        return [evenSum, oddSum]; 
    }

}
odd(3495892137259234)