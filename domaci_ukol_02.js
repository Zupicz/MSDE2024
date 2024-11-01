function decimalToTernary(number) {
    if (typeof number === 'number') {
        let remainders = [];
        let intermediateResult = Math.floor(number / 3);
        remainders.push(number % 3);

        do {
            remainders.unshift(intermediateResult % 3);
            intermediateResult = Math.floor(intermediateResult / 3);
        } while (intermediateResult > 0);

        return Number(remainders.join(''));
    } else {
        console.log('Input must be a whole number!');
    }
}

x = decimalToTernary(98);
console.log(x);