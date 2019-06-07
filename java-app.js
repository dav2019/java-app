
let inputs = []
let operator = ['x']
let digits = []
// if (digits.includes("Z")){
//   digits = []
// }
let finalArr = []
let newOne = []
let secondDigits = []
let sum = []


document.querySelector(".zero").innerHTML = `<p>${0}</p>`;
document.querySelector(".decimal").innerHTML = `<p>${'.'}</p>`;
document.querySelector(".equal").innerHTML = `<p>${'='}</p>`;
document.querySelector(".plus").innerHTML = `<p>${'+'}</p>`;

document.querySelector(".one").innerHTML = `<p>${1}</p>`;
document.querySelector(".two").innerHTML = `<p>${2}</p>`;
document.querySelector(".three").innerHTML = `<p>${3}</p>`;
document.querySelector(".minus").innerHTML = `<p>${'-'}</p>`;

document.querySelector(".four").innerHTML = `<p>${4}</p>`;
document.querySelector(".five").innerHTML = `<p>${5}</p>`;
document.querySelector(".six").innerHTML = `<p>${6}</p>`;
document.querySelector(".times").innerHTML = `<p>${'X'}</p>`;

document.querySelector(".seven").innerHTML = `<p>${7}</p>`;
document.querySelector(".eight").innerHTML = `<p>${8}</p>`;
document.querySelector(".nine").innerHTML = `<p>${9}</p>`;
document.querySelector(".divide").innerHTML = `<p>${'/'}</p>`;


// onclick clear button -----------------------------------------

document.querySelector(".clear-button").onclick = function(){
  console.log(`onclick clear button is being initialized------------`)
  inputs = [];
  console.log(`inputs:[${inputs}]`)
  operator = ['x'];
  console.log(`operator:[${operator}]`)
  digits = [];
  console.log(`digits:[${digits}]`)
  finalArr = [];
  console.log(`finalArr:[${finalArr}]`)
  newOne = [];
  console.log(`newOne:[${newOne}]`)
  secondDigits = [];
  console.log(`secondDigits:[${secondDigits}]`)
  sum = [];
  console.log(`sum:[${sum}]`)
  document.querySelector("#calc").innerHTML = `<p></p>`;
  console.log(`onclick clear button has finished------------------`)

}


// onclick buttons functions -----------------------------------------

document.querySelector(".zero").onclick = function(e){
  console.log(`number 0 function initialize-------`)
  inputs.push(Number(e.target.innerText))
  digits.push(Number(e.target.innerText))
  let number = digits.join("");
  let splitInputs = inputs.join("")
  finalArr.push(Number(splitInputs))
  if (finalArr.length > 1){
    finalArr.shift();
  }
  document.querySelector("#calc").innerHTML = `<p>${number}</p>`;
  console.log(`number 0 function ending-------`)
}

document.querySelector(".decimal").onclick = function(e){
  // inputs.push(Number(e.target.innerText))
  // console.log(inputs)
  document.querySelector("#calc").innerHTML = `<p>${'w.i.p press clear'}</p>`;
}

document.querySelector(".one").onclick = function(e){
  console.log(`number 1 function initialize-------`)
  inputs.push(Number(e.target.innerText))
  digits.push(Number(e.target.innerText))
  let number = digits.join("");
  let splitInputs = inputs.join("")
  finalArr.push(Number(splitInputs))
  if (finalArr.length > 1){
    finalArr.shift();
  }
  console.log(`finalArr:[${finalArr}]`)
  console.log(`digits:[${digits}]`)
  console.log(`number: ${number}`)
  console.log(`inputs:[${inputs}]`)
  console.log(`operator:[${operator}]`)
  document.querySelector("#calc").innerHTML = `<p>${number}</p>`;
  console.log(`number 1 function ending---------`)
}

document.querySelector(".plus").onclick = function(e){
  console.log(`plus function initialize-------`)
  operator.push(e.target.innerText)
  console.log(`finalArr:[${finalArr}]`)
  finalArr.map(x => newOne.push(x))
  console.log(`newone:[${newOne}]`)
  if (finalArr.length = 1){
    finalArr = [];
  }
  console.log(`operator:[${operator}]`)
  operator.shift();
  console.log(`operator:[${operator}]`)
  digits.push('Z')
  console.log(`digits:[${digits}]`)
  if (digits.includes("Z")){
    digits = []
  }
  console.log(`newone:[${newOne}]`)
  console.log(`digits:[${digits}]`)
  document.querySelector("#calc").innerHTML = `<p>${'+'}</p>`;
  console.log(`plus function ending-------`)
}

document.querySelector(".two").onclick = function(e){
  console.log(`number 2 function initialize-------`)
  inputs.push(Number(e.target.innerText))
  digits.push(Number(e.target.innerText))
  let number = digits.join("");
  let splitInputs = inputs.join("")
  finalArr.push(Number(splitInputs))
  if (finalArr.length > 1){
    finalArr.shift();
  }
  document.querySelector("#calc").innerHTML = `<p>${number}</p>`;
  console.log(`number 2 function ending-------`)
}

document.querySelector(".three").onclick = function(e){
  console.log(`number 3 function initialize-------`)
  inputs.push(Number(e.target.innerText))
  digits.push(Number(e.target.innerText))
  let number = digits.join("");
  let splitInputs = inputs.join("")
  finalArr.push(Number(splitInputs))
  if (finalArr.length > 1){
    finalArr.shift();
  }
  document.querySelector("#calc").innerHTML = `<p>${number}</p>`;
  console.log(`number 3 function ending-------`)
}

document.querySelector(".minus").onclick = function(e){
  console.log(`minus function initialize-------`)
  operator.push(e.target.innerText)
  console.log(`finalArr:[${finalArr}]`)
  finalArr.map(x => newOne.push(x))
  if (finalArr.length = 1){
    finalArr = [];
  }
  console.log(`operator:[${operator}]`)
  operator.shift();
  console.log(`operator:[${operator}]`)
  digits.push('Z')
  console.log(`digits:[${digits}]`)
  if (digits.includes("Z")){
    digits = []
  }
  console.log(`newone:[${newOne}]`)
  console.log(`digits:[${digits}]`)
  document.querySelector("#calc").innerHTML = `<p>${'-'}</p>`;
  console.log(`minus function ending-------`)
}

document.querySelector(".four").onclick = function(e){
  console.log(`number 4 function initialize-------`)
  inputs.push(Number(e.target.innerText))
  digits.push(Number(e.target.innerText))
  let number = digits.join("");
  let splitInputs = inputs.join("")
  finalArr.push(Number(splitInputs))
  if (finalArr.length > 1){
    finalArr.shift();
  }
  document.querySelector("#calc").innerHTML = `<p>${number}</p>`;
  console.log(`number 4 function ending-------`)
}

document.querySelector(".five").onclick = function(e){
  console.log(`number 5 function initialize-------`)
  inputs.push(Number(e.target.innerText))
  digits.push(Number(e.target.innerText))
  let number = digits.join("");
  let splitInputs = inputs.join("")
  finalArr.push(Number(splitInputs))
  if (finalArr.length > 1){
    finalArr.shift();
  }
  document.querySelector("#calc").innerHTML = `<p>${number}</p>`;
  console.log(`number 5 function ending-------`)
}

document.querySelector(".six").onclick = function(e){
  console.log(`number 6 function initialize-------`)
  inputs.push(Number(e.target.innerText))
  digits.push(Number(e.target.innerText))
  let number = digits.join("");
  let splitInputs = inputs.join("")
  finalArr.push(Number(splitInputs))
  if (finalArr.length > 1){
    finalArr.shift();
  }
  document.querySelector("#calc").innerHTML = `<p>${number}</p>`;
  console.log(`number 6 function ending-------`)
}

document.querySelector(".times").onclick = function(e){
  console.log(`times function initialize-------`)
  operator.push(e.target.innerText)
  console.log(`finalArr:[${finalArr}]`)
  finalArr.map(x => newOne.push(x))
  if (finalArr.length = 1){
    finalArr = [];
  }
  console.log(`operator:[${operator}]`)
  operator.shift();
  console.log(`operator:[${operator}]`)
  digits.push('Z')
  console.log(`digits:[${digits}]`)
  if (digits.includes("Z")){
    digits = []
  }
  console.log(`newone:[${newOne}]`)
  console.log(`digits:[${digits}]`)
  document.querySelector("#calc").innerHTML = `<p>${'X'}</p>`;
  console.log(`times function ending-------`)
}

document.querySelector(".seven").onclick = function(e){
  console.log(`number 7 function initialize-------`)
  inputs.push(Number(e.target.innerText))
  digits.push(Number(e.target.innerText))
  let number = digits.join("");
  let splitInputs = inputs.join("")
  finalArr.push(Number(splitInputs))
  if (finalArr.length > 1){
    finalArr.shift();
  }
  document.querySelector("#calc").innerHTML = `<p>${number}</p>`;
  console.log(`number 7 function ending-------`)
}

document.querySelector(".eight").onclick = function(e){
  console.log(`number 8 function initialize-------`)
  inputs.push(Number(e.target.innerText))
  digits.push(Number(e.target.innerText))
  let number = digits.join("");
  let splitInputs = inputs.join("")
  finalArr.push(Number(splitInputs))
  if (finalArr.length > 1){
    finalArr.shift();
  }
  document.querySelector("#calc").innerHTML = `<p>${number}</p>`;
  console.log(`number 8 function ending-------`)
}

document.querySelector(".nine").onclick = function(e){
  console.log(`number 9 function initialize-------`)
  inputs.push(Number(e.target.innerText))
  digits.push(Number(e.target.innerText))
  let number = digits.join("");
  let splitInputs = inputs.join("")
  finalArr.push(Number(splitInputs))
  if (finalArr.length > 1){
    finalArr.shift();
  }
  document.querySelector("#calc").innerHTML = `<p>${number}</p>`;
  console.log(`number 9 function ending-------`)
}

document.querySelector(".divide").onclick = function(e){
  console.log(`divide function initialize-------`)
  operator.push(e.target.innerText)
  console.log(`finalArr:[${finalArr}]`)
  finalArr.map(x => newOne.push(x))
  if (finalArr.length = 1){
    finalArr = [];
  }
  console.log(`operator:[${operator}]`)
  operator.shift();
  console.log(`operator:[${operator}]`)
  digits.push('Z')
  console.log(`digits:[${digits}]`)
  if (digits.includes("Z")){
    digits = []
  }
  console.log(`newone:[${newOne}]`)
  console.log(`digits:[${digits}]`)
  document.querySelector("#calc").innerHTML = `<p>${'/'}</p>`;
  console.log(`divide function ending-------`)
}

// Calculations Functions ---------------------------------------
document.querySelector(".equal").onclick = function(){
  console.log(operator)
  secondDigits.push(Number(digits.join("")))
  // 1ST PLUS FUNCTION==================================================

  if (secondDigits.length === 1 && operator[0] === '+') {
    console.log(`operating the 1st plus function------------------`)
    let add = newOne[0] + secondDigits[0]
    document.querySelector("#calc").innerHTML = `<p>${add.toFixed(2)}</p}`;
    sum.push(add)
    console.log(`input:[${inputs}]`)
    console.log(`digits:[${digits}]`)
    console.log(`newone:[${newOne}]`)
    console.log(`finalArr:[${finalArr}]`)
    console.log(`secondDigits:[${secondDigits}]`)
    console.log(`sum:[${sum}]`)
    console.log(`ending the 1st plus function---------------------`)
  }

  // 1ST ENDING PLUS FUNCTION=============================================

  // 2ND PLUS FUNCTION=============================================

  else if (secondDigits.length > 1 && operator[0] === '+') {
    console.log(`operating the 2nd plus function-------------------`)
    if (secondDigits.length > 2){
      secondDigits.shift();
    }
    console.log(`operator:[${operator}]`)
    let add = sum[0] + secondDigits[1]
    document.querySelector("#calc").innerHTML = `<p>${add.toFixed(2)}</p}`;
    sum.push(add)
    if (sum.length > 1){
      sum.shift();
    }
    console.log(`digits:[${digits}]`)
    console.log(`secondDigits:[${secondDigits}]`)
    console.log(`sum:[${sum}]`)
    console.log(`ending the 2st plus function-----------------------`)
  }

  // 2ND ENDING PLUS FUNCTION=============================================

  // 1ST MINUS FUNCTION=============================================

  else if (secondDigits.length === 1 && operator[0] === '-'){
    console.log(`operating the 1st minus function------------------`)
    let minus = newOne[0] - secondDigits[0]
    document.querySelector("#calc").innerHTML = `<p>${minus.toFixed(2)}</p}`;
    sum.push(minus)
    console.log(`newone:[${newOne}]`)
    console.log(`secondDigits:[${secondDigits}]`)
    console.log(`sum:[${sum}]`)
    console.log(`ending the 1st minus function---------------------`)
  }

  // 1ST ENDING MINUS FUNCTION=============================================

  // 2ND MINUS FUNCTION=============================================

  else if (secondDigits.length > 1 && operator[0] === '-') {
    console.log(`operating the 2nd minus function-------------------`)
    if (secondDigits.length > 2){
      secondDigits.shift();
    }
    console.log(`operator:[${operator}]`)
    let minus = sum[0] - secondDigits[1]
    document.querySelector("#calc").innerHTML = `<p>${minus.toFixed(2)}</p}`;
    sum.push(minus)
    if (sum.length > 1){
      sum.shift();
    }
    console.log(`digits:[${digits}]`)
    console.log(`secondDigits:[${secondDigits}]`)
    console.log(`sum:[${sum}]`)
    console.log(`ending the 2st minus function-----------------------`)
  }

  // 2ND ENDING MINUS FUNCTION=============================================

  // 1ST TIMES FUNCTION=============================================

  else if (secondDigits.length === 1 && operator[0] === 'X'){
    console.log(`operating the 1st times function------------------`)
    let times = newOne[0] * secondDigits[0]
    document.querySelector("#calc").innerHTML = `<p>${times.toFixed(2)}</p}`;
    sum.push(times)
    console.log(`newone:[${newOne}]`)
    console.log(`secondDigits:[${secondDigits}]`)
    console.log(`sum:[${sum}]`)
    console.log(`ending the 1st times function---------------------`)
  }

  // 1ST ENDING TIMES FUNCTION=============================================

  // 2ND TIMES FUNCTION=============================================

  else if (secondDigits.length > 1 && operator[0] === 'X') {
    console.log(`operating the 2nd times function-------------------`)
    if (secondDigits.length > 2){
      secondDigits.shift();
    }
    console.log(`operator:[${operator}]`)
    let times = sum[0] * secondDigits[1]
    document.querySelector("#calc").innerHTML = `<p>${times.toFixed(2)}</p}`;
    sum.push(times)
    if (sum.length > 1){
      sum.shift();
    }
    console.log(`digits:[${digits}]`)
    console.log(`secondDigits:[${secondDigits}]`)
    console.log(`sum:[${sum}]`)
    console.log(`ending the 2st times function-----------------------`)
  }

  // 2ND ENDING TIMES FUNCTION=============================================

  // 1ST DIVIDE FUNCTION=============================================

  else if (secondDigits.length === 1 && operator[0] === '/'){
    console.log(`operating the 1st divide function------------------`)
    let divide = newOne[0] / secondDigits[0]
    document.querySelector("#calc").innerHTML = `<p>${divide.toFixed(2)}</p}`;
    sum.push(divide)
    console.log(`newone:[${newOne}]`)
    console.log(`secondDigits:[${secondDigits}]`)
    console.log(`sum:[${sum}]`)
    console.log(`ending the 1st times function---------------------`)
  }

   // 1ST ENDING DIVIDE FUNCTION=============================================

   // 2ND DIVIDING FUNCTION=============================================

   else if (secondDigits.length > 1 && operator[0] === '/') {
    console.log(`operating the 2nd divides function-------------------`)
    if (secondDigits.length > 2){
      secondDigits.shift();
    }
    console.log(`operator:[${operator}]`)
    let divide = sum[0] / secondDigits[1]
    document.querySelector("#calc").innerHTML = `<p>${divide.toFixed(2)}</p}`;
    sum.push(divide)
    if (sum.length > 1){
      sum.shift();
    }
    console.log(`digits:[${digits}]`)
    console.log(`secondDigits:[${secondDigits}]`)
    console.log(`sum:[${sum}]`)
    console.log(`ending the 2st times function-----------------------`)
  }

  // 2ND ENDING DIVIDING FUNCTION=============================================

}
  

