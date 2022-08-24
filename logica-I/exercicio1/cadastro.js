//Usando comando nativo do navegador

let firstName = prompt("Qual o primeiro nome do recruta?");
let lastName = prompt("Qual o sobrenome do recruta?");
let fieldStudy = prompt("Qual campo de estudo do recruta?");
let birth = prompt("Qual o ano de nascimento do recruta?");

alert(
"Recruta cadastrado com sucesso!\n\n"
`Nome: ${firstName + lastName},
Campo de estudo: ${fieldStudy},
Idade:` + (2022 - birth)
);
