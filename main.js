const numbers = document.querySelectorAll(".numbers")
const result = document.querySelector(".result span")
const signs = document.querySelectorAll(".sign")
const igual = document.querySelector(".iquals")
const clear = document.querySelector(".clear")
const negative = document.querySelector(".negative")
const percent = document.querySelector(".percent")


let primerValor = ""
let isPrimerValor = false

let segundoValor = ""
let isSegundoValor = false

let sign = ""
let resultValue = 0

numbers.forEach((numero) => {
    numero.addEventListener("click", (e) =>{
        let temp = e.target.getAttribute("value") 

        if (!isPrimerValor){
            getFirstValue(temp)
        }

        if (!isSegundoValor){
            getSecondValue(temp)
        }
    })
})

function getFirstValue(el) {
    result.innerHTML = ""
    primerValor += el
    result.innerHTML = primerValor
    primerValor = +primerValor
    
}

function getSecondValue(el) {
    if (primerValor != "" && sign != ""){
        segundoValor += el
        result.innerHTML = segundoValor
        segundoValor = +segundoValor
    }
    
}

function getSign(params) {
    signs.forEach((signo) =>{
        signo.addEventListener("click", (e) =>{
            sign = e.target.getAttribute("value")
            isPrimerValor = true
        })
    })
}

getSign()

igual.addEventListener("click",() =>{
        result.innerHTML = ""
    if (sign === "+"){
        
        resultValue = primerValor + segundoValor
    }
    if (sign === "-"){
        
        resultValue = primerValor - segundoValor
    }
    if (sign === "X"){
        
        resultValue = primerValor * segundoValor
    }
    if (sign === "/"){
        
        resultValue = primerValor / segundoValor

        if (segundoValor == 0){
            resultValue = "Error"
        }
    }
    
    result.innerHTML = resultValue

    primerValor = resultValue
    segundoValor = ""
    checkValorResult()

})


function checkValorResult(params) {
    resultValue = JSON.stringify(resultValue)

    if (resultValue.length >= 8){
        resultValue = JSON.parse(resultValue)
        result.innerHTML = resultValue.toFixed(2)

    }
    
}



negative.addEventListener("click", (e) => {
    result.innerHTML = ""
    if (primerValor != ""){
        resultValue = -primerValor
        primerValor = resultValue
    }

    if (primerValor != "" && segundoValor != "" && sign != ""){
        resultValue = -resultValue
    }

    result.innerHTML = resultValue
})


percent.addEventListener("click", (e) =>{
    result.innerHTML = ""
    if (primerValor != ""){
        resultValue = primerValor / 100
        primerValor = resultValue
    }

    result.innerHTML = resultValue
})

clear.addEventListener("click", (e) =>{
    result.innerHTML = 0;
    primerValor = "";
    segundoValor = "";
    resultValue = 0;
    sign = "";
    isPrimerValor = false;
    isSegundoValor = false;
})