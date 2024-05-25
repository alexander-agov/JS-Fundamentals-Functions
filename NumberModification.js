function modification(number) {
    function calculateAverage(num) {
        let sum = 0;
        let count = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
            count++;
        }
        return sum / count;
    }
    let average = calculateAverage(number);
    while (average < 5) {
        number = number * 10 + 9;
        average = calculateAverage(number);
    }
    console.log(number);
}
modification(101);
modification(5835);