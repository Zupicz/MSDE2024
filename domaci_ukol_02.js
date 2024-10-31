function decimalToTernary(number) {
    let remainders = [];
    intermediateResult = Math.floor(number / 3);
    remainders.push(number % 3);

    do {
        remainders.unshift(intermediateResult % 3);
        intermediateResult = Math.floor(intermediateResult / 3);
    } while (intermediateResult > 0);

    result = Number(remainders.join(''));
    return result;
}