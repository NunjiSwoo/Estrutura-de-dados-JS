/*  Pilha
*   FIFO - First In First Out
*   LIFO - Last In First Out
*/

var cores = [];

cores.push('Magenta');
cores.push('Ciano');
cores.push('Vermelho', 'Verde');

console.log(cores);

let removido = cores.pop();
console.log('removendo a cor ', removido);
console.log(cores);