// Importa os produtos de um arquivo chamado 'product.js'
import produtos from './product.js';

// Usa o método 'find' para encontrar o produto com o ID igual a 10
const produtoId10 = produtos.find(produto => produto.id === 10);

// Exibe no console o produto encontrado
console.log(produtoId10);
