 var output = [];
var count = 1;

function fizzbuzz() {

 if(count%3==0 && count%5==0)
 {
output.push("FizzBuzz");
 }
    else if (count % 3 == 0) {
        output.push("Fizz");
    } else if (count % 5 == 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
}

// Call the fizzbuzz function multiple times
for (let i = 0; i < 100; i++) {
    fizzbuzz();
}

// Log the final output array
console.log(output);
