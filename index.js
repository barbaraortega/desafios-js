let nombre=prompt("Hola,ingrese su nombre para la busqueda del tesoro");
for(let pasos=1; pasos<7 ; pasos++){
    if(pasos % 2 ===0){
        alert(`camine ${pasos} pasos a la derecha`);
    }else if (pasos % 2 ===1){
            alert (`camine ${pasos} pasos a la izquierda`)
        }else {
          alert  ("llegaste");

    }

}
alert ("Encontraste el tesoro,felicidades, eres el ganador");




