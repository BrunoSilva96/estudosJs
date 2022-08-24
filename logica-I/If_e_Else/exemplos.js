/*
if (6 === 6) {
   console.log("True")
};

Nessa operação como a condição é falsa então o programa não vai executar o bloco do IF.
if (6 !== 6) {
   console.log("True")
};

Agora nós temos o bloco else, já que a condição do IF foi falsa, ela não executa o bloco 
e passa para o próximo bloco, no caso o ELSE.
if (6 !== 6) {
   console.log("True")
} else {
   console.log("False")
}
*/ 



/*
IF pode estar dentro de outro IF mas pode acarretar problemas na organização do código, fazendo com que o mesmo fique bagunçado

const idade = prompt("Informe sua idade:");

if (idade > 18) {
   alert("Você é maior de idade.")
} else {
   alert("Você é menor de idade.")
   if (idade < 12) {
      alert("Você é criança.")
      if (idade < 4) {
         alert("Você é um fraldinha")
      } 
   }
}

A maneira certa de serapar os blocos de IF e ELSE de maneira que não deixe o código bagunçado é usando o ELSE IF

const idade = prompt ("Informe sua idade:");

if (idade > 18) {
   alert("Você é maior de idade.");
} else if (idade > 12) {
   alert("Você é menor de idade.");
} else if (idade > 4) {
   alert("Você é uma criança.");
} else {
   alert("Você é um fraldinha.");
}

*/



/* 
Operador Ternário

const resultado = (6 === 6) ? "True" : "False"
alert("resultado")

Se for verdadeiro a condição que passamos vai teremos o retorno da palavra True se não for verdadeira a condição o retorno será False. Nesse exemplo o return será "True".

const resultado = (6 === 5) ? "True" : "False"
alert("resultado")

Já aqui teremos o return "False"

*/