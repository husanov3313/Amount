// let paragraph = document.createElement("p");
// let body = document.body
// paragraph.classList.add("text");
// paragraph.style.color = "yellow";
// paragraph.textContent = "Lorem ipsum doler ";
// console.log(paragraph);
// setTimeout(() =>{
//     body.appendChild(paragraph);
// },2000 );
let input = document.querySelector(".input")
let form = document.querySelector(".form")
let selects1 = document.querySelector("#selects1")
let selects2 = document.querySelector("#selects2")
let from = document.querySelector(".from")
let too = document.querySelector(".too")
let select1 = document.querySelector(".select1")
let select2 = document.querySelector(".select2")
let select3 = document.querySelector(".select3")

let select4 = document.querySelector(".select4")
let select5 = document.querySelector(".select5")
let select6 = document.querySelector(".select6")
console.log(input.value);
selects1.addEventListener("click" , () => {
    let select1value = selects1.value;
    console.log(select1value);
    if(select1value === "USSD"){
      select6.style.display = "none"
      select5.style.display = "block"
      select4.style.display = "block" 

    }else if (select1value === "RUB"){
        select4.style.display = "none"
        select5.style.display = "block"
        select6.style.display = "block"
    }else if(select1value === "UZS"){
        select5.style.display = "none"
        select4.style.display = "block"
        select6.style.display = "block"
    }
} )
form.addEventListener("submit", (e) => {
 e.preventDefault();
 let inputvalue = input.value
 
 let select1value = selects1.value;
 let select2value = selects2.value;
 console.log(select1value);
 console.log(select2value);
 if(select1value === "USSD" && select2value === "UZS"){
  from.innerText = `${inputvalue} $`
  too.innerText = `${inputvalue * 11200} summ`
 }
 else if (select1value === "USSD" && select2value === "RUB"){
    from.innerText = `${inputvalue} $`
  too.innerText = `${inputvalue * 62.54} rubl`
 }else if (select1value === "RUB" && select2value === "USSD"){
    from.innerText = `${inputvalue} RUB`
  too.innerText = `${inputvalue / 62.54} $`
 }
 else if (select1value === "RUB" && select2value === "UZS"){
    from.innerText = `${inputvalue} RUB`
  too.innerText = `${inputvalue * 178.77} sum`
 }else if (select1value === "UZS" && select2value === "USSD"){
    from.innerText = `${inputvalue} UZS`
  too.innerText = `${inputvalue / 11200} $`
 }else if (select1value === "UZS" && select2value === "RUB"){
    from.innerText = `${inputvalue} UZS`
  too.innerText = `${inputvalue / 178.77} RUB`
 }
})
