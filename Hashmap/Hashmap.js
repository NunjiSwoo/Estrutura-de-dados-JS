/** Hashmap
 * É um conjunto de pares de chave-valor, para cada elemento (valor) 
 * salvo num HashMap deve existir uma chave única atrelada a ele.
 */

var apelidos = new Map([
    ['Tuba', 'Gabriel'],
    ['Piu', 'Talia'],
    ['Zangado', 'André']
]);
console.log(apelidos);

apelidos.set('el Goiaba', 'Guilherme');
apelidos.set('Zangado', ['André', 'Pastilha']);
console.log(apelidos);
console.log(apelidos.get('Tuba'));

function encontrarChavePorValor(mapa, valorProcurado) {
    for (let [chave, valor] of mapa) {
      if (valor === valorProcurado) {
        return chave;
      }
    }
    return `O nome "${valorProcurado}" não foi encontrado nos apelidos.`; // Se o valor não for encontrado, retorne null ou qualquer valor que indique que o valor não foi encontrado.
}

const valorProcurado = 'Talia';
console.log(encontrarChavePorValor(apelidos, valorProcurado));
