let button=document.querySelectorAll("button");
let input=document.getElementById("#input");
      
   let String="";
   let arr=array.form(button);
   arr.forEach(button=>{
    button.addEventListener("click",(e)=>{
      if(e.target,innerHTML=="=") {
        String= eval(string);
        input.value=string;
      } 

      string+=e.target.innerHTML;
      input.value=string;
    })
   })


