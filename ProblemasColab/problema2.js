function Problema2(){
    var num1 = parseInt(document.formulario2.num1.value);
    var num2 = parseInt(document.formulario2.num2.value);
    var num3 = parseInt(document.formulario2.num3.value);
 
   if (num1 == num2 && num1 == num3){
       document.formulario2.resultado.value = (num1);
      }
      else{
         if (num1 > num2){
            if (num1 > num3){
                document.formulario2.resultado.value = (num1);
               }
               else{
                document.formulario2.resultado.value = (num3);
                  }
         }
         else{
            if(num1 < num2){
               if (num2 > num3){
                   document.formulario2.resultado.value = (num2);
                  }
                  else{
                   document.formulario2.resultado.value = (num3);
                     }
               }
            }
      }   
}

function borrard_p2() {
    document.formulario2.resultado.value = "";
    document.formulario2.num1.value = "";
    document.formulario2.num2.value = "";
    document.formulario2.num3.value = "";
}
