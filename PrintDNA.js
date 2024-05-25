function printDNAStrand(length) {
    const sequence = "ATCGTTAGGG";
    let currentIndex = 0;

    for (let i = 0; i < length; i++) {
        let symbol = sequence[currentIndex];
        let line = "";

        if (i % 4 === 0) {
            line = `**${symbol}${sequence[currentIndex + 1]}**`;
        } else if (i % 4 === 1 || i % 4 === 3) {
            line = `*${symbol}--${sequence[currentIndex + 1]}*`;
        } else {
            line = `${symbol}----${sequence[currentIndex + 1]}`;
        }

        console.log(line);

        currentIndex += 2;
        if (currentIndex >= sequence.length) {
            currentIndex = 0;
        }
    }
}
printDNAStrand(10);
