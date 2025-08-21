// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const agregarAmigo = () => {

    let nombreNuevo = document.getElementById('amigo');

    if (nombreNuevo.value.trim() === '') {
        alert('Por favor, inserte un nombre.');
        }
        else {
            amigos.push(nombreNuevo.value);
            nombreNuevo.value = ''; // Limpiar el campo de entrada
            
        }
};

const mostrarAmigos = () => {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
};

const sortearAmigo = () => {
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear.');
        return;
    }else {
        let aleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[aleatorio];
        document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    }
}


/*  

Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.

Tareas específicas:

Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado. */
