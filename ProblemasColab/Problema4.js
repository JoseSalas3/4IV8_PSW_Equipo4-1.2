function Problema4(){

    var meses=document.getElementById("meses").value;
    var salario=document.getElementById("salario").value; 

    if (meses > 0 && meses < 13 ){ 
        var utilidades1=salario*0.05;
        document.getElementById("Utilidades").innerHTML= 
        '' +utilidades1;   
    } 
    else if (meses > 12 && meses < 25) {   
        var utilidades2=salario*0.07;
        document.getElementById("Utilidades").innerHTML= 
        '' +utilidades2; 
    }

    else if (meses > 24 && meses < 61){
        var utilidades3=salario*0.10;
        document.getElementById("Utilidades").innerHTML= 
        '' +utilidades3; 
    }
   
    else if (meses > 60 && meses < 121){
        var utilidades4=salario*0.15;
        document.getElementById("Utilidades").innerHTML= 
        ''+utilidades4;  
    }
    
    else if (meses > 120){ 
        var utilidades5=salario*0.20;
        document.getElementById("Utilidades").innerHTML= 
        ''+utilidades5;   
    }


}
