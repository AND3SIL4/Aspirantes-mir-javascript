// EXERCISE ONE
const numbers = [1,2,3]   

function sum(numbers){
    let result = 0;
    for(let x =0; x < numbers.length; x ++){
        result =+ numbers[x]
    }

    return result;
}

const res = sum(numbers)

console.log(res);

// EXERCISE TWO 

const numb = [1,2,3,4,5,6,7,8];

function max(numb) {
    if (numb.length === 0) {
      return undefined;
    }
  
    let max_numb = numb[0];
    for (let i = 1; i < numb.length; i++) {
      if (numb[i] > max_numb) {
        max_numb= numb[i];
      }
    }
    return max_numb;
}

// EXERCISE THREE 

const arre = [1,2,3,4]

function maxIndex(arre) {
    if (arre.length === 0) {
      return -1;
    }
  
    let maxIndex = 0;
    let maxNumber = arre[0];
    for (let i = 1; i < arre.length; i++) {
      if (arre[i] > maxNumber) {
        maxNumber = arre[i];
        maxIndex = i;
      }
    }
    return maxIndex;
  }

  let maxim = maxIndex(arre)
  console.log(maxim);
  
// EXERCISE FOUR

const otro = ["Hola", "Mundo", "Andres", ]

function join(otro){
    if (otro.length === 0){
        return " "
    }

    resultado = otro[0]
    for(let m = 0; m < otro.length; m ++ ){
        resultado += " " + otro[m]    
    }
    return resultado
}

let ress = join(otro)
console.log(ress);

// Another form 

function join2(){
    return otro.join(" ");
}

let join22 = join2(otro)
console.log(join22);