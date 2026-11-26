let numero 
let resultado

function parouimpar(){
   numero = Number(prompt("Informe um nùmero: "));

   resultado = numero % 2;

   if(numero == 22){
      alert("Parabéns, você descobriu o easter egg mais top do mundo!...aliás")
   }

   if(resultado == 0 ){
      alert("O número " + numero + " é PAR.");
   }else{
      alert("O número " + numero + " é IMPAR.")
   }
}