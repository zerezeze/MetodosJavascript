// Importa os produtos de um arquivo chamado 'product.js'
import produtos from './product.js';

// Usa o método 'some' para verificar se existe pelo menos um produto com preço acima de 100
const existeProdutoAcimaDe100 = produtos.some(produto => produto.price > 100);

// Exibe no console o resultado da verificação
console.log(existeProdutoAcimaDe100);
