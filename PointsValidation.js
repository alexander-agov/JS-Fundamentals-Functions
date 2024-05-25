function isValidDistance(arr) {
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    function isIntegerDistance(distance) {
        return Number.isInteger(distance);
    }
    const distance1 = calculateDistance(arr[0], arr[1], 0, 0);
    const distance2 = calculateDistance(arr[2], arr[3], 0, 0);
    const distance3 = calculateDistance(arr[0], arr[1], arr[2], arr[3]);
    const valid1 = isIntegerDistance(distance1);
    const valid2 = isIntegerDistance(distance2);
    const valid3 = isIntegerDistance(distance3);
    console.log(`{${arr[0]}, ${arr[1]}} to {0, 0} is ${valid1 ? 'valid' : 'invalid'}`);
    console.log(`{${arr[2]}, ${arr[3]}} to {0, 0} is ${valid2 ? 'valid' : 'invalid'}`);
    console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is ${valid3 ? 'valid' : 'invalid'}`);
}
isValidDistance([3, 0, 0, 4]);
