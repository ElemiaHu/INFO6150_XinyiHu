function evenOrOdd(num){
    if(num % 2 == 0){
        console.log(num + " is even");
    }else{
        console.log(`${num} is odd`);
    }
}

function evenOrOddString(words){
    if(words.length % 2 == 0){
        console.log("Length of " + words + " is even");
    }else{
        console.log(`Length of ${words}(${words.length}) is odd`);
    }
}

function whetherFavFood(string){
    switch(string){
        case "hotpot": return true;
        case "dimsum": return true;
        case "pho": return true;
        default: return false;
    }
}

for(let i = 1; i <= 100; i ++){
    if(i % 15 == 0){
        console.log(`${i} FizzBuzz`);
    }else if(i % 3 == 0) {
        console.log(`${i} Fizz`);
    }else if(i % 5 == 0){
        console.log(`${i} Buzz`);
    }
}