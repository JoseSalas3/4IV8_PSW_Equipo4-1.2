function Problema2(){
   var num1 = parseInt(document.getElementById("num1").value);
   var num2 = parseInt(document.getElementById("num2").value);
   var num3 = parseInt(document.getElementById("num3").value);
 
   if (num1 == num2 && num1 == num3){
      document.getElementById("resultado").innerHTML = (num1);
      }
      else{
         if (num1 > num2){
            if (num1 > num3){
               document.getElementById("resultado").innerHTML = (num1);
               }
               else{
                  document.getElementById("resultado").innerHTML = (num3);
                  }
         }
         else{
            if(num1 < num2){
               if (num2 > num3){
                  document.getElementById("resultado").innerHTML = (num2);
                  }
                  else{
                     document.getElementById("resultado").innerHTML = (num3);
                     }
               }
            }
      }   
 }
