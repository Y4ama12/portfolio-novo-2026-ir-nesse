let contasorte = 0;
let contaazar = 0;

function sorte(){
     let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    let mostrar = document.getElementById('resultado');

    if(num > 50){
        contasorte++;

        mostrar.innerHTML = '<p>SORTE: ${contasorte}</p><img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2p-Emu6JiKTEGtUZ0sw75wMzhXMNa65X6M9LrqNWwg&s=10>';
    }else{
        contaazar++;
        mostrar.innerHTML = '<p>AZAR: ${contaazar}</p>img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjDnlgI2boXNemCiPALmaxZ7Q5OWEisiUbJpUEVP5hQ&s=10>';
    }
}