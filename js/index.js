import { Card } from "./card.js";
import { NavBar } from "./navBar.js";

const navBar = new NavBar();
const card = new Card();
navBar.crianavBar();
//card.criarCard();

const produto = [
    {
        nome: 'Pizza de queijo',
        texto: 'É uma deliciosa pizza',
        imagem: 'https://img.cybercook.com.br/receitas/559/pizza-de-presunto-e-mussarela-2.jpeg'
    },
    {
        nome: 'Pizza de frango com catupiry',
        texto: 'É uma pizza muito boa também',
        imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/ada34cd2101afafaba465aad112ee3c1_XL.jpg'
    }
]

produto.forEach(produto => {
    card.criarCard(produto.imagem, produto.nome, produto.texto);
})