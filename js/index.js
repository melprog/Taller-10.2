const buttonText = document.getElementById("buttonText");
const inputValue = document.getElementById("inputText");

function saveData() {
    let data = inputValue.value;
    if (data) {
        localStorage.setItem("dato", data);
        inputValue.value = "";
    }
}
    
buttonText.addEventListener("click", saveData);