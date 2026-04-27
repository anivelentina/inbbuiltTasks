let hebrew = document.getElementById("terms")

hebrew.addEventListener('click',function(event) {
  
    if (event.target.tagName === "P") {
        console.log("You Clicked",event.target.tagName);   
    }else{
        alert('Something went wrong!')
    }
}

)