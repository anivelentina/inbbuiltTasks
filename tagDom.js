let inpTag = document.getElementsByTagName("input");
let selTag = document.getElementsByTagName("select");
let bTag = document.getElementsByTagName("button");
let divTag = document.getElementsByTagName("div");

bTag[0].addEventListener("click",()=>{
    divTag[0].innerText = `Name: ${inpTag[0].value} \n Address: ${inpTag[1].value} \n Country: ${selTag[0].value} \n Phone Number: ${inpTag[2].value}`
});