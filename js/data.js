const dataText = document.getElementById("data")

function showData() {
    let data = localStorage.getItem("dato");
    if (data) {
        dataText.textContent = data;
    }
}

showData();