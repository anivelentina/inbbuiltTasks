let all = document.getElementsByClassName("datas");

let btn = all[5];
btn.style.backgroundColor="navy"
btn.style.color="white"
btn.style.borderRadius="10px"

let result = all[4];

btn.addEventListener("click",()=>{
    result.innerText = `Name: ${all[0].value} \n Address: ${all[1].value} \n Country: ${all[2].value} \n Phone Number: ${all[3].value}`
});