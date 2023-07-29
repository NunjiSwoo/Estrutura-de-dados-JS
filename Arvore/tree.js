/**
 * ARVORE BINÁRIA
 */

var alunos = {}

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

add(alunos, 'Carlos');
add(alunos, 'Misael');
add(alunos, 'Gabriel');
add(alunos, 'Luana');
add(alunos, 'Rafael');
add(alunos, 'Camila');
add(alunos, 'Ana Julia');
add(alunos, 'Matheus');

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

posOrder(alunos)