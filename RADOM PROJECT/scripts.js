const button = document.getElementById("generate-Number")

function sortear() {
    const min = Math.ceil(document.querySelector("#input-min").value)
    const max = Math.floor(document.querySelector("#input-max").value)

    if(max >= min){
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(result)
    } else {
        alert("O valor mínimo deve ser menor ou igual ao valor máximo")
    }

}

button.addEventListener('click' , sortear)