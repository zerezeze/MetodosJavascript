// Importa os produtos de um arquivo chamado 'product.js'
import products from './product.js';

// Usa o método 'map' para criar uma nova array com os produtos com desconto
const productsWithDiscount = products.map(product => {
    // Calcula o desconto de 10% sobre o preço de cada produto
    const discount = product.price * 0.1;
    
    // Calcula o novo preço com desconto aplicado
    const discountedPrice = product.price - discount;

    // Retorna um novo objeto de produto com o preço atualizado
    return {
        ...product, // Mantém todas as propriedades do produto original
        price: discountedPrice // Substitui o preço pelo preço com desconto
    };
});

// Exibe no console a nova array de produtos com desconto
console.log(productsWithDiscount);
