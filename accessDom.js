let sname = document.getElementById("nameId");
let add = document.getElementById("addId");
let coun = document.getElementById("conId");
let num = document.getElementById("numId");

let btn = document.getElementById("butone");
btn.style.backgroundColor="navy"
btn.style.color="white"
btn.style.borderRadius="10px"

let btnn = document.getElementById("butwo");
btnn.style.backgroundColor="navy"
btnn.style.color="white"
btnn.style.borderRadius="10px"

let result = document.getElementById("resId")

btn.addEventListener("click",()=>{
    result.innerText = `Enter Name: ${sname.value} \n Address: ${add.value} \n Country: ${coun.value} \n PhoneNumber: ${num.value}`;
});

