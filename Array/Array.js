/*  ARRAY - LINEAR e HOMOGÊNEO
*   Também chamado de vetor, matriz ou arranjo, o array é a mais comum das 
*   estruturas de dados e normalmente é a primeira que estudamos.
*/

var cores = ['Magenta', 'Azul', 'Ciano', 'Goiaba', 'Rosa', '-----------'];
var alunos = [[1, 'Rafael'], [2, 'Thiago', 'Squad 2'], [3, 'Carlos', 'Squad 2']];

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
//imprimir(cores, 1)
//imprimir(alunos, 2)

function busca(nome, numero, lista, resultado, nomeLista){
    if (resultado == undefined)
        resultado = ''
    if(numero == undefined){
        var numero = 1;
        var lista = cores;
        var nomeLista = 'Cores';
    }
    if (numero <= 3){
        for (i in lista) {
            if (nome == lista[i]){
                if (resultado == '')
                    resultado += `O nome ${nome}, foi encontrado na posição ${parseInt(i) + 1} da tabela `+nomeLista;
                else
                    resultado += `, na posição ${parseInt(i) + 1} da tabela `+nomeLista
            }
        }
        for (i in lista) {
            for (x in lista[i]){
                //console.log(nome)
                //console.log(nomeLista)                
                if (nome == lista[i][x]){
                    if (resultado == '')
                    resultado += `O nome ${nome}, foi encontrado no conteiner ${parseInt(i) + 1}, na posição ${parseInt(x) + 1} da tabela `+nomeLista;
                else
                    resultado += `, no conteiner ${parseInt(i) + 1}, na posição ${parseInt(x) + 1} da tabela `+nomeLista;
                }
            }
        }

        numero++

        if (numero == 2){
            var nomeLista = 'Alunos';
            return(busca(nome, 2, alunos, resultado, nomeLista))
        }

        if (resultado === '') {
            resultado += `O elemento "${nome}" não foi encontrado nesta lista!`;
        }
        
        return resultado+'.';
    }
}

console.log(busca('Magenta'))
console.log(busca('Rafael'))
console.log(busca('Squad 2'))