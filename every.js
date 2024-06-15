// Importa os produtos de um arquivo chamado 'product.js'
import produtos from './product.js';

// Utiliza o método every para verificar se todos os preços dos produtos são maiores que 100
const todosPrecosAcimaDe100 = produtos.every(produto => produto.price > 100);

// Exibe no console o resultado da verificação
console.log(todosPrecosAcimaDe100);
