function calculate_function(number){
    // let number;
    if(number === 1){
        number = "Black"
    }else if(number === 2){
        number = "White"
    }else if(number === 3){
        number = "Blue"
    }else{
        number = "Green"
    }
    return "The color is " + number
}

console.log(calculate_function(8));