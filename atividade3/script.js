    let nota1trim;
        let nota2trim;
        let resultado;

        function calcular() {
            nota1trim = Number(
                prompt("Digite a nota do primeiro trimestre (0 a 10):")
            );

            nota2trim = Number(
                prompt("Digite a nota do segundo trimestre (0 a 10):")
            );

            resultado = 18 - (nota1trim + nota2trim);

            if (resultado <= 0) {
                alert("Parabéns! Você já atingiu a pontuação necessária para ser aprovado!");
            } else {
                alert(
                    "Você precisa tirar " +
                    resultado.toFixed(1) +
                    " no terceiro trimestre para ser aprovado."
                );
            }
        }