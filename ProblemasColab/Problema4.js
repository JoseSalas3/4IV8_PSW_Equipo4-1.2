function Problema4(){

    var meses=document.getElementById("meses").value;
    var salario=document.getElementById("salario").value; 

    if (meses > 1){ 
        var utilidades2=salario*0.05;
        document.getElementById("Utilidades").innerHTML= 
        '' +utilidades2;  
    } 
    else if (meses < 1){
        var utilidades1=salario*0.07;
        document.getElementById("Utilidades").innerHTML= 
        '' +utilidades1; 
    }
    else if (meses > 2){
        var utilidades3=salario*0.07;
        document.getElementById("Utilidades").innerHTML= 
        '' +utilidades3; 


    }
    else if (meses < 2){
        var utilidades4=salario*0.1;
        document.getElementById("Utilidades").innerHTML= 
        '' +utilidades4; 
    }
    else if (meses > 5){

        var utilidades5=salario*0.1;
        document.getElementById("Utilidades").innerHTML=  
        ''+utilidades5; 

    }
    else if (meses < 5){
        var utilidades6=salario*0.15;
        document.getElementById("Utilidades").innerHTML= 
        ''+utilidades6; 
    }
    else if (meses > 10){
        var utilidades7=salario*0.15;
        document.getElementById("Utilidades").innerHTML= 
        ''+utilidades7; 



    }
    else if (meses < 10){ 
        var utilidades8=salario*0.2;
        document.getElementById("Utilidades").innerHTML= 
        ''+utilidades8;  
    }


}
