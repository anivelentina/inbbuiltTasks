let sname = document.querySelector("nameId");
let add = document.querySelector("addId");
let coun = document.querySelector("conId");
let num = document.querySelector("numID");

let btn = document.querySelector("butone");
// btn.style.backgroundColor="navy"
// btn.style.color="white"
// btn.style.borderRadius="10px"

let btnn = document.querySelector("butwo");
// btnn.style.backgroundColor="navy"
// btnn.style.color="white"
// btnn.style.borderRadius="10px"

let result = document.querySelector("resId")

btn.addEventListener("click",()=>{
    result.innerText = `Enter Name: ${sname.value} \n Address: ${add.value} \n Country: ${coun.value} \n PhoneNumber: ${num.value}`;
});

