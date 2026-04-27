let sname = document.getElementById("nameId");
let sage = document.getElementById("ageId");
let smail = document.getElementById("mailId")

let sres = document.getElementById("resId");

function subFun() {(
    sres.innerText = `Name : ${sname.value} \n Age : ${sage.value} \n Email : ${smail.value}`
)};

