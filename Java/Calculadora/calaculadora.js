
 function Suma(){

     var Numero_1 = parseInt (document.getElementById('N_1').value);
     var Numero_2 = parseInt (document.getElementById('N_2').value);

     var Rta = Numero_1 + Numero_2

     document.getElementById("Rts").value = Rta;
     
 }

  function Resta(){

    var Numero_1 = document.getElementById('N_1').value;
    var Numero_2 = document.getElementById('N_2').value;

    var resta = Numero_1-Numero_2;

    document.getElementById('Rts').value = resta;

  }

  function Multiplicar(){

    var Numero_1 = document.getElementById('N_1').value;
    var Numero_2 = document.getElementById('N_2').value;

    var resta = Numero_1*Numero_2;

    document.getElementById('Rts').value = resta;

  }

  function Dividir(){

    var Numero_1 = document.getElementById('N_1').value;
    var Numero_2 = document.getElementById('N_2').value;

    if (Numero_1 != 0 && Numero_2 != 0){
      var rts = Numero_1 / Numero_2;
   } else {
     alert("Error en la division")
   }

    document.getElementById('Rts').value = rts;

  }

  function Promedio(){

    var Numero_1 = parseInt (document.getElementById('N_1').value);
    var Numero_2 = parseInt (document.getElementById('N_2').value);

    var resta = Numero_1 + Numero_2 / 2 ;

    document.getElementById('Rts').value = resta;

  }

  function Raiz(){

    var Numero_1 = parseInt (document.getElementById('N_1').value);
    var Numero_2 = parseInt (document.getElementById('N_2').value);

    var resta = Math.sqrt( Math.abs(Numero_1)) || Math.sqrt( Math.abs(Numero_2))  

    document.getElementById('Rts').value = resta;

  }

