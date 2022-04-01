function sum(...num) {
    const initialValue = 0;
    const sum = num.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );
    return sum;
}

console.log(sum(1, 2, 3, 4, 5));