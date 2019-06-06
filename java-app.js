let inputs = []
let operator = ['x']


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
  inputs = [];
  console.log(inputs)
  operator = ['x'];
  console.log(operator)
  document.querySelector("#calc").innerHTML = `<p></p>`;
}


// onclick buttons functions -----------------------------------------

document.querySelector(".zero").onclick = function(e){
  inputs.push(Number(e.target.innerText))
  console.log(inputs)
  document.querySelector("#calc").innerHTML = `<p>${0}</p>`;
}

document.querySelector(".decimal").onclick = function(e){
  inputs.push(Number(e.target.innerText))
  console.log(inputs)
  document.querySelector("#calc").innerHTML = `<p>${'.'}</p>`;
}

document.querySelector(".one").onclick = function(e){
  inputs.push(Number(e.target.innerText))
  console.log(inputs)
  console.log(operator)
  document.querySelector("#calc").innerHTML = `<p>${1}</p>`;
}

document.querySelector(".plus").onclick = function(e){
  operator.push(e.target.innerText)
  console.log(operator)
  operator.shift();
  console.log(operator)
  document.querySelector("#calc").innerHTML = `<p>${'+'}</p>`;
}

document.querySelector(".two").onclick = function(e){
  inputs.push(Number(e.target.innerText))
  console.log(inputs)
  console.log(operator)
  document.querySelector("#calc").innerHTML = `<p>${2}</p>`;
}

document.querySelector(".three").onclick = function(e){
  inputs.push(Number(e.target.innerText))
  console.log(inputs)
  document.querySelector("#calc").innerHTML = `<p>${3}</p>`;
}

document.querySelector(".minus").onclick = function(e){
  operator.push(e.target.innerText)
  console.log(operator)
  operator.shift();
  console.log(operator)
  document.querySelector("#calc").innerHTML = `<p>${'-'}</p>`;
}

document.querySelector(".four").onclick = function(e){
  inputs.push(Number(e.target.innerText))
  console.log(inputs)
  document.querySelector("#calc").innerHTML = `<p>${4}</p>`;
}

document.querySelector(".five").onclick = function(e){
  inputs.push(Number(e.target.innerText))
  console.log(inputs)
  document.querySelector("#calc").innerHTML = `<p>${5}</p>`;
}

document.querySelector(".six").onclick = function(e){
  inputs.push(Number(e.target.innerText))
  console.log(inputs)
  document.querySelector("#calc").innerHTML = `<p>${6}</p>`;
}

document.querySelector(".times").onclick = function(e){
  operator.push(e.target.innerText)
  console.log(operator)
  operator.shift();
  console.log(operator)
  document.querySelector("#calc").innerHTML = `<p>${'X'}</p>`;
}

document.querySelector(".seven").onclick = function(e){
  inputs.push(Number(e.target.innerText))
  console.log(inputs)
  document.querySelector("#calc").innerHTML = `<p>${7}</p>`;
}

document.querySelector(".eight").onclick = function(e){
  inputs.push(Number(e.target.innerText))
  console.log(inputs)
  document.querySelector("#calc").innerHTML = `<p>${8}</p>`;
}

document.querySelector(".nine").onclick = function(e){
  inputs.push(Number(e.target.innerText))
  console.log(inputs)
  document.querySelector("#calc").innerHTML = `<p>${9}</p>`;
}

document.querySelector(".divide").onclick = function(e){
  operator.push(e.target.innerText)
  console.log(operator)
  operator.shift();
  console.log(operator)
  document.querySelector("#calc").innerHTML = `<p>${'/'}</p>`;
}

// Calculations Functions ---------------------------------------
document.querySelector(".equal").onclick = function(){
  if (operator[0] === '+'){
    let add = inputs.reduce((a, b) => a + b, 0)
    document.querySelector("#calc").innerHTML = `<p>${add}</p}`;}
  else if (operator[0] === '-'){
    let minus = inputs[0] - inputs[1]
    document.querySelector("#calc").innerHTML = `<p>${minus}</p}`;
  }
  else if (operator[0] === 'X'){
    let times = inputs[0] * inputs[1]
    document.querySelector("#calc").innerHTML = `<p>${times}</p}`;
  }
  else if (operator[0] === '/'){
    let divide = inputs[0] / inputs[1]
    document.querySelector("#calc").innerHTML = `<p>${divide}</p}`;
  }
}