const calculatorScreen = document.querySelector('#calculator__screen');
const keys = document.querySelector('#calculator__keys'); 
let operacionStatus = false,
    numberOne, typeOperation

calculatorScreen.textContent = '0';

const calculator = () => {
    if(!keys) return //si no existen numeros entonces finaliza aqui la funcion
    keys.addEventListener('click', (e) => {
        const t = e.target;
        const d = t.dataset;
        //detecta si se pulso un numero
        if(d.number){
            writeScreen(d.number);
        }
        //detecta si se pulso un opetacion aritmetica
        if(d.math){
            getOperation(t, d.math)
        }
        //detecta si se pulso un otra operacion matematica
        if(d.operation){
            runOperation(d.operation)
        }
    })
}

const writeScreen = number => {
    calculatorScreen.textContent === '0' || operacionStatus === true //si es igual a true significa en la pantalla hay un simbolo
    ? calculatorScreen.textContent = number
    : number === '.' && !calculatorScreen.textContent.includes('.')
        ? calculatorScreen.textContent += number
        : number !== '.'
            ? calculatorScreen.textContent += number
            :null
    
    operacionStatus = false;
}

const getOperation = (element, operation) => {
    operacionStatus = true
    numberOne = Number(calculatorScreen.textContent)
    typeOperation = operation
     calculatorScreen.textContent = element.textContent
}

const runOperation = (operacion) => {
    const getResult = (numberOne, typeOperation) => {
        const numberTwo = Number(calculatorScreen.textContent)
        let result
        switch (typeOperation) {
            case 'add':
                result = numberOne + numberTwo
                break;
            case 'minus':
                result = numberOne - numberTwo
                break;
            case 'multiply':
                result = numberOne * numberTwo
                break;
            case 'divide':
                result = numberOne / numberTwo
                break;
            default:
                break;
        }
        result === Infinity 
        ? calculatorScreen.textContent = 'ERROR NO SE PUEDE DIVIDIR ENTRE 0'
        : calculatorScreen.textContent = result
    }
    operacion === 'clear' 
    ? calculatorScreen.textContent = '0'
    : getResult(numberOne, typeOperation)
    operacionStatus = true;
}
calculator();