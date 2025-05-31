const imagens = [
  'imagens/1.jpg',
  /*'imagens/2.jpg',
  'imagens/3.jpg',*/
  'imagens/5.jpg',
];

let indiceAtual = 0;
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function mostrarImagem(index) {
slider.src = imagens[index];
}

prevBtn.addEventListener('click', () => {
indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
mostrarImagem(indiceAtual);
});

nextBtn.addEventListener('click', () => {
indiceAtual = (indiceAtual + 1) % imagens.length;
mostrarImagem(indiceAtual);
});


