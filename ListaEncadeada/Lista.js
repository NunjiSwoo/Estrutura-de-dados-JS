/**
 * LISTA ENCADEADA
 */

var frutas = {}

function add(lista, fruta) {
    if(lista.nome) {
        add(lista.prox, fruta)
    } else {
        lista.nome = fruta,
        lista.prox = {} 
    }
}

//console.log(frutas);

function imprimir(lista) {
    lista.nome && console.log(lista.nome)
    lista.prox && imprimir(lista.prox)
}

imprimir(frutas)

add(frutas, 'Goiaba')
console.log(frutas);
add(frutas, 'Manga')
console.log(frutas);
add(frutas, 'Goiaba')
console.log(frutas);