let boton = document.getElementById("boton")
console.log(boton)

if(localStorage.getItem("Imagen de fondo") == "true"){
    document.body.classList.toggle("fondo")
    boton.innerText = "Volver a Cambiar"
}

boton.addEventListener("click", () => {
    document.body.classList.toggle("fondo")
    if(boton.innerText == "Cambiar Color"){
        boton.innerText = "Volver a Cambiar"
        localStorage.setItem("Imagen de fondo", true)
    }else if(boton.innerText == "Volver a Cambiar"){
        boton.innerText = "Cambiar Color"
        localStorage.setItem("Imagen de fondo", false)
    }
})
