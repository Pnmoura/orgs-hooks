import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jannyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
  titulo: "Produtores",
  lista: [
    {
      nome: "Green",
      imagem: green,
      distancia: gerarNumeroAleatorio(1, 150),
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: "Salad",
      imagem: salad,
      distancia: gerarNumeroAleatorio(1, 150),
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: "Janny Jack Farm",
      imagem: jannyJack,
      distancia: gerarNumeroAleatorio(1, 150),
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: "Grow",
      imagem: grow,
      distancia: gerarNumeroAleatorio(1, 150),
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: "Potager",
      imagem: potager,
      distancia: gerarNumeroAleatorio(1, 150),
      estrelas: gerarNumeroAleatorio(1, 5),
    }
  ]
}

export default produtores;