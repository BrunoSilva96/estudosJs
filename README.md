# estudosJs
Já passei por esse módulo, mas foi atualizado, irei rever todo novamente enquanto vou resolvendo os novos desafios, em parte, comentar os códigos
para que ocorra um melhor entendimento e em caso de procurar relembrar o assunto, tudo estará organizado em pastas separadas e com comentarios
para facilitar o entendimento.


Estruturas condicionais:

### If e Else

1 - Permite criar blocos de código que vão ser executados somente quando uma operação lógica for verdadeira

2 - SE condição === true ENTÃO faça algo

3 - Else pode ser usado para acrescentar um bloco de execução somente quando essa mesma operação lógica for falsa

4 - SE condição === true ENTÃO faça uma coisa SENÃO faça outra coisa 

5 - Sintaxe: 

              IF:
              if(condição) {
              ...
              }
              
              IF ELSE:
              if(condição) {
              ...
              } else {
              ...
              }
              
              IF ELSE IF:
              if(condição) {
              ...
              } else if(condição 2) {
              ...
              } else {
              ...
              }
              
6 - Operador Ternário

  Sintaxe:
  
          const resultado = condição ? resultado_verdadeiro : resultado_falso
          
---------------------------------------------------------------------------------------------

### Switch

1 - Permite criar bloco condicionais como o IF, porém com uma estrutura que avalia uma expressão e testa o resultado contra vários casos executando
os casos correspondentes.

2 - É possível definir um caso padrão, dque sempre é executado.

3 - Tambem é possível parar a execução após algum dos casos.

4 - SWITCH expressão
      CASO a: faça uma coisa
      CASO b: faça outra coisa E PARE
      CASO c: faça mais outra coisa
      POR PADRÃO: faça algo sempre
  
5 - Caso não tenha o break após o pedido da execução, o código ira seguir executando as próximas linhas de código até o default. Vai depender da
necessidade do código, ter que continuar a execução ou não.

6 - Caso não encontre a expressão dentro dos cases ele vai direto para o default e finaliza a execução do código.

  Sintaxe:

              switch (expressão) {
                case "a":
                  faça uma coisa
                case "b":
                  faça outra coisa
                  break
                case "c":
                  faça mais outra coisa
                default:
                  ...
                }
                
