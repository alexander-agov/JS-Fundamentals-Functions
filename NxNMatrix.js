function matrix(num) {
    for (let i = 0; i < num; i++) {
        let nxn = "";
        for (let j = 0; j < num; j++) {
            nxn += num + " ";
        }
        console.log(nxn.trim());
    }
}
matrix(3)