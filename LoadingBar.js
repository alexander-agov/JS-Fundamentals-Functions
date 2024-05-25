function loading(num) {
    let percent = num + "%";
    let sign = "%";
    let symbol = sign.repeat(num / 10);
    let dot = '.';
    let dotSymbol = dot.repeat(10 - num / 10);
    if (num < 100) {
        console.log(percent + " " + `[${symbol}${dotSymbol}]`);
        console.log("Still loading...");
    } else {
        console.log(percent + " " + "Complete!");
        console.log(`[${symbol}]`);
    }
}
loading(50);
loading(30);
loading(100);