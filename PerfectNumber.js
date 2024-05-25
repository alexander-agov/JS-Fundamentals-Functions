function perfect(n) {
    let perfectNum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            perfectNum += i;
        }
    }
    if (n == perfectNum) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfect(28);
perfect(1236498);