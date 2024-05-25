function processCrystals(thicknesses) {
    const targetThickness = thicknesses[0];
    let initialThickness = 0;
    let countCut = 0;
    let countLap = 0;
    let countGrind = 0;
    let countEtch = 0;
    let xRayUsed = false;
    for (let i = 1; i < thicknesses.length; i++) {
        initialThickness = thicknesses[i];
        let currentThickness = initialThickness;
        countCut = 0;
        countLap = 0;
        countGrind = 0;
        countEtch = 0;
        while (Math.floor(currentThickness) > targetThickness) {
            while (currentThickness / 4 >= targetThickness) {
                currentThickness /= 4;
                countCut++;
            }
            while (currentThickness * 0.8 >= targetThickness) {
                currentThickness *= 0.8;
                countLap++;
            }
            while (currentThickness - 20 >= targetThickness) {
                currentThickness -= 20;
                countGrind++;
            }
            while (currentThickness - 2 >= targetThickness || currentThickness - 2 >= targetThickness - 1) {
                currentThickness -= 2;
                countEtch++;
            }
            while (currentThickness < targetThickness && !xRayUsed) {
                currentThickness++;
                xRayUsed = true;
            }
        }
        console.log(`Processing chunk ${initialThickness} microns`);
        if (countCut > 0) {
            console.log("Cut" + ` x${countCut}`);
            console.log("Transporting and washing");
        }
        if (countLap > 0) {
            console.log("Lap" + ` x${countLap}`);
            console.log("Transporting and washing");
        }
        if (countGrind > 0) {
            console.log("Grind" + ` x${countGrind}`);
            console.log("Transporting and washing");
        }
        if (countEtch > 0) {
            console.log("Etch" + ` x${countEtch}`);
            console.log("Transporting and washing");
        }
        if (xRayUsed) {
            console.log("X-ray" + ` x1`);
        }
        console.log(`Finished crystal ${targetThickness} microns`);
    }
}

//processCrystals([1375, 50000]);
processCrystals([1000, 4000, 8100]);
