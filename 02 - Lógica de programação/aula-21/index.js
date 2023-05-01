

for (let i = 0; i <= 100; i++) {

    console.log(fizzBuzz('xcxdf'));
}

function fizzBuzz(i) {
    if (Number.isInteger(i)) {
        if (i % 3 === 0 && i % 5 === 0) {
            return `${i} FizzBuzz`;
        }
        if (i % 3 === 0) {
            return `${i} Fizz`;
        }
        if (i % 5 === 0) {
            return `${i} Buzz`;
        }
    }
    return i;

}