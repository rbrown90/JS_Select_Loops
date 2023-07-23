// Exercise 1
for(let i = 0; i < 100; i++){
    if(i % 2 == 0){
        continue;
    } else {
        console.log([i]);
    }
}

// Exercise 2
for(let i = 0; i < 100; i++)
if(i % 3 == 0 && i % 5 == 0){
    console.log("FIZZBUZZ");
} else if(i % 3 == 0){
    console.log("FIZZ");
} else (i % 5 == 0);{
    console.log("BUZZ");
} 

// Exercise 3 Section
// DO
let i = 1

while(i <= 100){
let output = "";

if(i % 3 == 0){
    output += "FIZZ";
}
if(i % 5 == 0){
    output += "BUZZ";
}

console.log(`${log} ${output}`);

i++;
}

let x = 1;

// DO/WHILE
do{
    let output = "";
    
    if(x % 3 == 0){
        output += "FIZZ";
    }
    if(x % 5 == 0){
        output += "BUZZ";
    }
    
    console.log(`${x} ${output}`);
    
    x++;
    }while(x <= 100);

// Exercise 4
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 1; i <= n; i++){
    if (i == value){
        console.log(`Found ${value}`);
        break;
    }

    if(i == n){
        console.log(`Did not find ${value} within 1-${n}`)
    }
}

// Exercise 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
let start = Math.round(Math.random() * (10 - 1) + 1); 
let end = Math.round(Math.random() * (1000 - 100) + 100); 

for( let i = start; i <= end; i++){
    let output = "";

if (i % fizzDivisor == 0) {
    output += "FIZZ";
}
if (i % buzzDivisor == 0){
    output += "BUZZ";
}
console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor)