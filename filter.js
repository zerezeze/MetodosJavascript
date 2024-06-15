// Importa os produtos de um arquivo chamado 'product.js'
import produtos from './product.js';

// Filtra os produtos que possuem a categoria 'electronics'
const produtosEletronicos = produtos.filter(produto => produto.category === 'electronics');

// Exibe no console os produtos que são da categoria 'electronics'
console.log(produtosEletronicos);
