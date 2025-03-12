//Declarar variable de array para nombres

let nombres = [];

//Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim(); 

    if (nombre === "") { // Por si el usuario deja el campo de entrada vacío
        alert("Por favor, inserta un nombre.");
        return;
    }

    //Primero se agrega el nomre al array, se limpia la pantalla del usuario y se actualiza la lista que se ve en la pantalla
    nombres.push(nombre);
    input.value = ""; 
    actualizarLista(); 

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    nombres.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}
}
//Ahora la parte del sorteo del nombre
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSecreto = nombres[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
    
    // Extra: Reiniciar el juego una vez termine el sorteo
    nombres = [];
    actualizarLista();
}
