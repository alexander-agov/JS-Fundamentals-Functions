function characters(char1, char2) {

    const charCode1 = char1.charCodeAt(0);
    const charCode2 = char2.charCodeAt(0);

    const start = Math.min(charCode1, charCode2);
    const end = Math.max(charCode1, charCode2);

    let symbols = ""

    for (let i = start + 1; i < end; i++) {
        const char = String.fromCharCode(i);
        symbols += char+" "
    }
    console.log(symbols);
}
characters('C', '#')