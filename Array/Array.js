/*  ARRAY - LINEAR e HOMOGÊNEO
*   Também chamado de vetor, matriz ou arranjo, o array é a mais comum das 
*   estruturas de dados e normalmente é a primeira que estudamos.
*/

var cores = ['Magenta', 'Azul', 'Ciano', 'Goiaba', 'Rosa', '-----------'];
var alunos = [[1, 'Rafael'], [2, 'Thiago'], [3, 'Carlos', 'Squad 2']];

//Função recursiva
function imprimir(arr, nivel) {
    arr.forEach(element => {
        if (nivel == 1) {
            console.log(element)
        } else {
            imprimir(element, nivel-1);
            console.log("-----------")
        }
    });
}

//imprimir(cores);
imprimir(cores, 1)
imprimir(alunos, 2)
