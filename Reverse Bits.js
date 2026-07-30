function reverseBits(n){
    let binary = n.toString(2).padStart(32, "0");
    let reversed = binary.split("").reverse().join("");
    return parseInt(reversed, 2);
}
}
reverseBits(1)