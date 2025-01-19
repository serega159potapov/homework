function uzerName(name){
    return `hello ${name}`;
}
let checName = uzerName("alica");
console.log(checName);

let numberMass = [1, 4, 9, 14, 27, 78, 45 ]
function choice (number) {
    for(let i = 0; i < number.length; i++ ){
        if(number[i] > 10){
            console.log(number[i])
        }      
    } 
}
choice(numberMass);
function calculator(num1, sign ,num2){
    if(sign === "plus"){
        return num1 + num2;
    } else if(sign === "minus"){
        return num1 - num2;
    } else if(sign === "multiply"){
        return num1 * num2;
    } else if(sign === "deivide"){
        if (num2 !== 0){
            return num1 / num2;
        }else {
            return "ошибка деление на 0"
        }
    } else{
        return "неизвестный оператор";
    }

}
const result = calculator(3 , "plus" , 7)
console.log(result)  