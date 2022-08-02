let prestamo = 0
let cuotas = 0
let interez = 1.43
let ope = "+"

function credito() {
 let nombre = prompt("Buenos Dias! estas de suerte , pero de la Buena! cual es tu nombre? ")
alert("Perfecto!")
console.log("usted un credito de cuanto quiere conseguir ?sr", nombre)
let prestamo = parseInt(prompt("usted un credito de cuanto $$$ quiere conseguir ?sr", ))
if (prestamo <1000) {  
    console.error("no alcanza ,pide  mas!")
    }
    else if (prestamo <10000) {
        console.warn("vamos yo se que quieres  mas ")
    }
    else if (prestamo >=30000) {
        console.log("puess tiene buena pinta, trato hecho!!!")
    } 
    else  {
        console.warn("no se otorga el credito" )
    }

    
let cuotas = parseInt(prompt("En  cuanta cantidad de cuotas lo va a querer ?"))

console.log("su plan de pago por mes es", calculo(prestamo, interez, cuotas, ope))

}

function calculo(num1, num2, num3 , ope) {
    switch(ope){
        case"+": 
        return num1 * num2 / num3
  
 
} 
}

