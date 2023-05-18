function sum(numbers){
    let result = 0;
    for (let i = 1; i <= numbers; i++) {
        result += i;
    }
    return result;
}

console.log(sum(2));
