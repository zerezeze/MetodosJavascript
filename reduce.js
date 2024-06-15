import produtos from './product.js';

// Use o método reduce para somar os preços de todos os produtos
const totalPrices = produtos.reduce((total, produto) => total + produto.price, 0);

// Calcule a média dividindo o total pelo número de produtos
const mediaPrecos = totalPrices / produtos.length;

console.log("Média de preços:", mediaPrecos.toFixed(2)); // Arredonde para 2 casas decimais
