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
       else if(e. target.innerHTML=="AC"){

       }

       else if(e.target.innerHTML=="DEL"){
        srting=string.substring(0,string.length-1);
        input.value=srting;
       }

       else{
      string+=e.target.innerHTML;
      input.value=string;
       }
    })
    
   })

   


