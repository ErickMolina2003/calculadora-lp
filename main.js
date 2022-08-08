console.log('hola');
function digitar_operacion(num){
    document.getElementById('principal').value+=num
    console.log(document.getElementById('principal').value)
}
function limpiar(){
    document.getElementById('principal').value=null
}
var num1
var operador
function operacion(op){
    num1=document.getElementById('principal').value
    limpiar()
    console.log(op)
    operador=op
}
var num2
function igual(){
    if(operador=='+'){
        num2=document.getElementById('principal').value
        limpiar()
        document.getElementById('principal').value=Number(num1) + Number(num2)
    }
    if(operador=='-'){
        num2=document.getElementById('principal').value
        limpiar()
        document.getElementById('principal').value=Number(num1) - Number(num2)
    }
    if(operador=='*'){
        num2=document.getElementById('principal').value
        limpiar()
        document.getElementById('principal').value=Number(num1) * Number(num2)
    }
    if(operador=='/'){
        num2=document.getElementById('principal').value
        limpiar()
        document.getElementById('principal').value=Number(num1) / Number(num2)
    }
}
