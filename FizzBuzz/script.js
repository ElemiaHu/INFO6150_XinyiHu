let form = document.querySelector("form");
let input = document.querySelector("input");
let result = document.querySelector("#result");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let number = input.value;
    let translate = fizzBuzz(number);
    result.textContent = translate;
    input.value="";
})

function fizzBuzz(number){
    if(number % 15 == 0){
        return "FizzBuzz";
    }else if(number % 3 == 0) {
        return "Fizz";
    }else if(number % 5 == 0) {
        return "Buzz";
    }else {
        return number;
    }
}