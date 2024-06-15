// Importa os produtos de um arquivo chamado 'product.js'
import produtos from './product.js';

// Ordena os produtos com base na avaliação (rating.rate), do maior para o menor
const produtosOrdenadosPorAvaliacao = produtos.sort((a, b) => b.rating.rate - a.rating.rate);

// Exibe os produtos ordenados no console
console.log(produtosOrdenadosPorAvaliacao);
