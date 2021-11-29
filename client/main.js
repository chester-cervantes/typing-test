

const textInput = document.getElementById("text__input");
const textOutput = document.getElementById("text__output");


const submitWord = () => {
    console.log(textInput)
    textOutput.innerHTML = textInput.value
}