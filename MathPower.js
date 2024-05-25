function mathPower(b, p) {
    result = 1;
    for (let i = 0; i < p; i++)
        result *= b;
    return result;
}