const html = document.querySelector('html');
const button = document.querySelector('button');
const footer = document.querySelector('footer');
const h1 = document.querySelector('h1'); 
const ImagemMeio = document.querySelector('.ImagemMeio');
const ImagemDireita = document.querySelector('.ImagemDireita');
const ImagemEsquerda = document.querySelector('.ImagemEsquerda');
const KittyNeon = document.querySelector('.KittyNeon');
const KittyMeio = document.querySelector('.KittyMeio');
const KittyDireita = document.querySelector('.KittyDireita');
const Melody = document.querySelector('.Melody');
const MelodyFeliz = document.querySelector('.MelodyFeliz');


button.addEventListener('mouseover', function() {
    KittyMeio.style.display = 'block';
    ImagemMeio.style.display = 'none';

    KittyDireita.style.display = 'block';
    ImagemDireita.style.display = 'none';

    Melody.style.display = 'block';
    ImagemEsquerda.style.display = 'none';

    MelodyFeliz.style.display = 'block';
    KittyNeon.style.display = 'none';
    // imagens acima do botão

    html.style.backgroundColor = 'white';
    button.style.backgroundColor = 'rgb(213, 91, 170)';
    footer.style.backgroundColor = 'rgb(213, 91, 170)';
    h1.style.color = 'rgb(213, 91, 170)';
    button.style.color = 'white';
});

button.addEventListener('mouseout', function() {
    KittyMeio.style.display = 'none';
    ImagemMeio.style.display = 'block';

    KittyDireita.style.display = 'none';
    ImagemDireita.style.display = 'block';

    Melody.style.display = 'none';
    ImagemEsquerda.style.display = 'block';

    MelodyFeliz.style.display = 'none';
    KittyNeon.style.display = 'block';

    // imagens acima do botão

    html.style.backgroundColor = 'black';
    button.style.backgroundColor = 'rgba(212, 5, 212, 0.601)'
    footer.style.backgroundColor = 'rgba(212, 5, 212, 0.601)'
    h1.style.color = 'rgba(212, 5, 212, 0.601)';
    button.style.color = 'black';
});
