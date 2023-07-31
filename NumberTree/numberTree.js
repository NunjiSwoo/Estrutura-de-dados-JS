/**
 * ARVORE BINÁRIA
 */

var number = {}

function add(lista, nome){
    if (lista.nome && lista.nome > nome) {
        add(lista.esq, nome)
    } else if (lista.nome){
        add(lista.dir, nome)
    } else {
        lista.nome = nome
        lista.esq = {}
        lista.dir = {}
    }
}

add(number, 22);
add(number, 3);
add(number, 5);
add(number, 7);
add(number, 13);
add(number, 26);
add(number, 48);
add(number, 17);
add(number, 99);
add(number, 125);

function preOrder(lista) {
    lista.nome && console.log(lista.nome)
    lista.esq && preOrder(lista.esq)
    lista.dir && preOrder(lista.dir)
}

function inOrder(lista) {
    lista.esq && inOrder(lista.esq)
    lista.nome && console.log(lista.nome)
    lista.dir && inOrder(lista.dir)
}

function posOrder(lista) {
    lista.dir && posOrder(lista.dir)
    lista.esq && posOrder(lista.esq)
    lista.nome && console.log(lista.nome)
}

preOrder(number)
console.log(number)