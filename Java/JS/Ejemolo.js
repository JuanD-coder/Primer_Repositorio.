
  function Resultado(){
     
    var nota_1 = document.getElementById('N_1').value; 
    var nota_2 = document.getElementById('N_2').value; 
    var nota_3 = document.getElementById('N_3').value; 

   var respuesta = nota_1 * 0.35 + nota_2 * 0.35 + nota_3 * 0.3 / 3; 
   
    if (respuesta <= 2.95 ){
        Rts = respuesta + " Reprobado"
    } else {
        Rts = respuesta + " Aprobado"
    }

    document.getElementById('Promedio').value = Rts;
  }

  function Descuento(){

    var Compra = document.getElementById('compra').value;
 
    if (Compra >= 150000){
        Rts = Compra - (Compra * 0.3);
        resultado = Compra * 0.3; 
    } else {
        Rts = Compra - (Compra * 0.1);
        resultado = Compra * 0.1;
    }

     document.getElementById('total').value = Rts;
     document.getElementById('descuento').value = resultado  

  }
