const gridItem = document.querySelectorAll(".grid-items");
let num1 = "";
let num2 = "";
let operator;
let i = 0; 
let summaryText;

let display = document.querySelector(".grid-rows");
let upperDisplay = document.querySelector(".upper");

document.addEventListener('mousedown', (event) => {
  if((event.target.className == "grid-items")||(event.target.className == "grid-items key")||(event.target.className == "grid-items key2")){
    let key = event.target.innerText;
    if(key == "C" || key == "CE"){
      display.innerText = 0;
      //upperDisplay.innerText = 0;
       num1 = "";
       num2 = "";
       i = 0;
    }else if(!(key == "+"||key == "-"||key == "x"||key == "÷"||key == "%"||key == "√"||key == "CE"||key == ""||key == "=") && i == 0){
            num1 = num1 + key;
            summaryText = num1;
            display.innerText = summaryText;
            //upperDisplay.innerText = num1;
            console.log(`number 1 = ${num1}`);
            console.log(`key = ${key}`);
            
    }else if(key == "+"||key == "-"||key == "x"||key == "÷"||key == "√"){
        operator = key;      
       // upperDisplay.innerText = summaryText + ` ${operator}`;
        console.log(`operator = ${operator}`);
        console.log(`key = ${key}`);
        i++;
        
    }else if(i > 0 && !((key  == "=")||key == "%")){
        summaryText = upperDisplay.innerText;
        num2 = num2 + key;
        display.innerText = num2;
        //upperDisplay.innerText = summaryText + ` ${operator}`;

    }else if(event.target.innerText == "%"){
      operate ("%", num1, num2);
      console.log(`key = ${key}`);
      i = 0; 
  }else if(event.target.innerText == "="){
        operate (operator, num1, num2);
        
        i = 0; 
    }
  }
    
    
  }, false);

function operate (operator, numA, numB){
    let a = parseInt(numA);
    let b = parseInt(numB);

    console.log(`operator = ${operator}`);
    switch (operator) {
        case "+":
            num1 = add(a, b);
            display.innerText = num1;
          num2 = "";
    
          break;
        case "-":
          num1 = subtract(a, b);
          display.innerText = num1;
          num2 = "";
     
          break;
        case "x":
          num1 = mult(a, b) ;
          display.innerText = num1;
          num2 = "";
   
          break;
        case "÷":
          num1 = division(a, b);
          display.innerText = num1;
          num2 = "";
    
          break;
        case "%":
          num1 = percent(a, b);
          display.innerText = num1;
          num2 = "";
    
          break;
        case "√":
          num1  = sqRt(a);
          display.innerText = num1;
          num2 = "";
  
          break;
        case "CE":
          num1  = 0;
          display.innerText = num1;
          num2 = "";
  
          break;
        case "C":
            display.innerText = 0;
            num1 = "";
            num2 = "";
            break;
        case undefined:
            num1 = "";
            num2 = "";
      }
}

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
  return a - b; 
};

function sum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

function mult(a, b) {
    return a * b;
};

function division(a, b){
    return a / b;
}

function percent(a, b){
    return (a * b)/100;
}

function sqRt(a){
    return Math.sqrt(a).toFixed(5);
}
function multiply(array) {
let multiplication = 1;

for (let j = 0; j < array.length; j++) {
  multiplication *= array[j];
}
return multiplication;
};

function power(a, b) {
	return a ** b;
};

function factorial(num) {
  if (num < 0) {
    return -1;
  }    
  else if (num == 0) {
    return 1;
  } 
  else {
      return (num * factorial(num - 1));
  }
};





