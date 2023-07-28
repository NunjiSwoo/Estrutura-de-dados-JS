/** Hashmap
 * É um conjunto de pares de chave-valor, para cada elemento (valor) 
 * salvo num HashMap deve existir uma chave única atrelada a ele.
 */

var apelidos = new Map([
    ['Tuba', 'Gabriel']
    ['Piu', 'Talia']
    ['Zangado', 'André']
]);
console.log(apelidos);

apelidos.set('el Goiaba', 'Guilherme');
apelidos.set('Zangado', ['André', 'Pastilha']);
console.log(apelidos);
console.log(apelidos.get('tuba'));
