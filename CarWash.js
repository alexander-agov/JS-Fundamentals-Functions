function car(arr) {
    let value = 0;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "soap":
                value += 10; break;
            case "water":
                value *= 1.2; break;
            case "vacuum cleaner":
                value *= 1.25;
                break;
            case 'mud':
                value -= 10 / 100 * value;
                break;
            default:
                break;
        }
    }
    value = Math.max(0, Math.min(100, value)); 
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
car(
    ['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']
);
car(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])