function Problema4(){

    var meses=document.getElementById("meses").value;
    var salario=document.getElementById("salario").value; 

    if (meses > 1){ 
        var utilidades1=salario*0.05;
        document.getElementById("Utilidades").innerHTML= 
        '' +utilidades1;   
    } 
    else if (meses < 1 && meses > 2) {   
        var utilidades2=salario*0.07;
        document.getElementById("Utilidades").innerHTML= 
        '' +utilidades2; 
    }

    else if (meses < 2 && meses > 5){
        var utilidades3=salario*0.10;
        document.getElementById("Utilidades").innerHTML= 
        '' +utilidades3; 
    }
   
    else if (meses < 5 && meses > 10){
        var utilidades4=salario*0.15;
        document.getElementById("Utilidades").innerHTML= 
        ''+utilidades4;  
    }
    
    else if (meses < 10){ 
        var utilidades5=salario*0.20;
        document.getElementById("Utilidades").innerHTML= 
        ''+utilidades5;   
    }


}
