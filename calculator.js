const calculatorScreen = document.querySelector('#calculator__screen');
const keys = document.querySelector('#calculator__keys');  

const calculator = () => {
    if(!keys) return //si no existen numeros entonces finaliza aqui la funcion
    keys.addEventListener('click', (e) => {
        const t = e.target;
        const d = t.dataset;
        //detecta si se pulso un numero
        if(d.number){
            console.log(d.number);
        }
        //detecta si se pulso un opetacion aritmetica
        if(d.math){
            console.log(d.math);
        }
        //detecta si se pulso un otra operacion matematica
        if(d.opetaiton){
            console.log(d.opetaiton);
        }
    })
}

calculator();