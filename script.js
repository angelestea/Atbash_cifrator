

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const reverseAlphabet = alphabet.reverse();

const inputOriginal = document.getElementById('input-original');//input
const cifrator = document.getElementById('cifrator');//form
const result = document.getElementById('result');//result
const range = document.getElementById('range');//range


const shifMessage = () =>{
    const wordArray = [...inputOriginal.value.toUpperCase()];
    // alert(wordArray);
    printChar(0, wordArray);//función recursiva
}

const printChar = (currentLetterIndex, wordArray) => {
    if(wordArray.length === currentLetterIndex) return;
    inputOriginal.value = inputOriginal.value.substring(1);//saca el valor en la primera letra
    const spanChar = document.createElement("span");//creamos una etiqueta span
    result.appendChild(spanChar);//se agrega al contenedor
    animateChar(spanChar)//aníma el carácter
    .then(() => {
        const lessCipherChar = wordArray[currentLetterIndex];//caracter sin codificar
        //console.log(lessCodifyChar)
        spanChar.innerHTML = alphabet.includes(lessCipherChar) ?
            reverseAlphabet[currentLetterIndex] : lessCipherChar;//si incluye hagame lla primera condición después del ? si no, se mantiene el caracter sin coficar.
        printChar(currentLetterIndex + 1, wordArray);
    })
}


const animateChar = spanChar =>{//promises
    let letterChange = 0;
    return new Promise(resolve => {
        const interval = setInterval(() => {
            spanChar.innerHTML = alphabet[Math.floor(Math.random() * alphabet.length)];
            letterChange++;
            if(letterChange === 7){
                clearInterval(interval);//Cancela una acción reiterativa
                resolve();
            }
        }, 50);//50 milisegundos
    });
}


const submit = event =>{
    event.preventDefault();//no recarga páguna
    result.innerHTML = '';//borra la encriptación escrita hasta el momento
    shifMessage();
}


cifrator.onsubmit = submit;