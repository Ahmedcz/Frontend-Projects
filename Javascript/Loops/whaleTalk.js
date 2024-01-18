let input = 'Turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {

    if(input[inputIndex] === 'e'){

        resultArray.push(input[inputIndex]);
     }
    if(input[inputIndex] === 'u'){

        resultArray.push(input[inputIndex]);
     }

    //console.log(`inputIndex is:${inputIndex}`);
    for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
         
        //console.log(`the vowelIndex is: ${vowelIndex}.`);
        if (vowels[vowelIndex] === input[inputIndex]) {

            //console.log(input[inputIndex]);
            resultArray.push(input[inputIndex]);
            //console.log(resultArray);

        }
    }
}

//console.log(resultArray);

let resultString = resultArray.join(' ');
console.log(resultString.toUpperCase());