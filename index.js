function questao1() {
    function calcMedia(nota1, nota2, nota3, letra) {
        let media;
        if (letra == 'a') {
            media = ((nota1 + nota2 + nota3) / 3).toFixed(2)
          return media
        } else {
            media = ((nota1 * 5) + (nota2 * 3) + (nota3 * 2)) /10
            return media
        }
    }
    console.log(calcMedia(5, 7, 8, 'a'));
}

function questao2() {
    function numInteiro(num) {
        if (num % 2 == 0) {
            num = 'par'
            return num
        } else {
            num = 'impar'
            return num
        }
    
    }
    
    console.log((numInteiro(55)))
}

function questao3() {
    function ePrimo(num2) {

        if (num2 >= 0) {
            let contador = 0
    
            for (let index = 1; index <= num2; index++) {
                if (num2 % index === 0) {
                    contador++
                }
    
            }
    
            if (contador === 2) {
                return console.log('É primo')
            } else {
                return console.log('Não é primo')
            }
        } else {
            return console.log('O valor é inválido');
        }
    }
    
    console.log(ePrimo(-1));
}

function questao4() {
    function dataCompleta(entrada) {
    
        let horas = Math.round(entrada / 3600);
        let min = entrada % 3600;
        let minutos = Math.round(min/60)
        let seg = min % 60
        let segundos = Math.round(seg)
    
        return console.log(`${horas}:${minutos}:${segundos}`)
    
    }
    
    console.log(dataCompleta(3672))
}

function questao5() {
    function numeroPerfeito(numero) {
      let divisor = 0;
      for (let i = 1; i < numero; i++) {
        if (numero % i == 0) {
          divisor += i;
        }
      }
      if (divisor === numero) {
        return true;
      } else {
        return false;
      }
    }
    let valor = Number(prompt("Insira um valor inteiro"));
    alert(numeroPerfeito(valor));
  }


function questao6() {
    function acessoAoSite() {
      alert("Bem-vindo ao Site1");
    }
    acessoAoSite();
  }

   
  function questao7() {
    function mostrarMensagem() {
      let nomeAplicacao = 'Cleiton';
      console.log(`Acesso à aplicação ${nomeAplicacao}`);
      alert(`Bem vindo à aplicação ${nomeAplicacao}`);
    }
    mostrarMensagem();
}

function questao8() {
    function mostrarDobro(n) {
      alert(`O dobro do número ${n} é ${n * 2}`);
    }
    let n = parseInt(prompt("Digite um número inteiro"));
    mostrarDobro(n);
  }


  function questao9() {
    function calculaMedia(nota1, nota2, nota3, nome) {
      let media = (nota1 + nota2 + nota3) / 3;
      alert(`${nome}, sua média é ${media.toFixed(2)}.`);
    }
  
    let nome = prompt("Digite seu nome");
    let n1 = Number(prompt("Digite a primeira nota"));
    let n2 = Number(prompt("Digite a segunda nota"));
    let n3 = Number(prompt("Digite a terceira nota"));
  
    calculaMedia(n1, n2, n2, nome);
  }