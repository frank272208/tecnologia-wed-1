/*(function()
{
    alert('Hola');

}());*/
 // ejercio 1
function Sumar()
{
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 =parseFloat(document.getElementById('num2').value);
    var numero3 =parseFloat(document.getElementById('num3').value);
    
    var resultado = numero1*numero2*numero3;

    document.getElementById('res').value = resultado
    //return resultado;
}

// Ejercicio 2
function temperatura()
{
    var num = parseFloat(document.getElementById('num1').value);
    
     if (num>=-10<=15) {
        document.write('frio');
        document.getElementById('res').value =  num
    }
    else
    if (num >= 16<=25) {

        document.write('templado');
        document.getElementById('res').value =  num
    }
    else
    if(num>=26<=40){
        document.write('calor');
    document.getElementById('res').value = num
    }
}
//ejercicio 3
function factorial (){
    var numero = parseFloat(document.getElementById('num').value);
    var total=1;
    for (i=1; i<=numero ;i++){
        total=total * i;
    }
    document.getElementById('resultado').value = total
   
}
//ejercicio 4
function fecha(){
    var f= new Date();
    document.write(f.getDate()+"/"+(f.getMonth()+1)+"/"+f.getFullYear());
   
}
