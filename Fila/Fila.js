/*  Fila
*   FIFO - First In First Out
*   LIFO - Last In First Out
*/
function removerTodos(fila){
    while (fila.length > 0){
        console.log('Clientes restantes: ', nomes);
        nomes.shift();
    }
}
var nomes = [];

nomes. push('Maia', 'Rafão', 'Zangado', 'Tubarão');

console.log(nomes);

let proximo = nomes.shift();
console.log('Próximo cliente: ', proximo)

console.log(nomes);

removerTodos(nomes);

nomes.push('Dark Mode', 'HSoM', '8º', 'Sogra', 'Grongos', 'Metaforando');

removerTodos(nomes);