const attackCharacterName = prompt("Qual nome do personagem de ataque?");
const attackPower = Number(prompt(`Qual o poder de ataque do personagem ${attackCharacterName}?`));

const defenseCharacterName = prompt("Qual nome do personagem que vai defender?");
let healthPoints = Number(prompt(`Quanto de pontos de vida o personagem ${defenseCharacterName} tem?`));
const defensePower = Number(prompt(`Qual o poder de defesa do personagem ${defenseCharacterName}?`));
const shield = (prompt(`O personagem ${defenseCharacterName} possui um escudo?
1 - Não
2 - Sim`));

if (attackPower > defensePower && shield === "Não") {
   let finalDamage = attackPower - defensePower

   healthPoints -= finalDamage
    
   alert(`O dano sofrido pelo personagem ${defenseCharacterName} foi de ${finalDamage}!
O personagem ${defenseCharacterName} agora tem ${healthPoints} Pontos de vida.
${attackCharacterName} conseguiu efetuar o ataque com sucesso!`);

} else if (attackPower > defensePower && shield === "Sim") {
   let damage = (attackPower - defensePower) / 2

   healthPoints -= damage

   alert(`O dano sofrido pelo personagem ${defenseCharacterName} foi de ${damage}!
O personagem ${defenseCharacterName} agora tem ${healthPoints} Pontos de vida.
${attackCharacterName} conseguiu efetuar o ataque, mas com penalidade,  ${defenseCharacterName} tinha um escudo!`);

} else if (attackPower <= defensePower){
   alert(`O ataque não surtiu efeito! o total de dano causado pelo ${attackCharacterName} foi de 0!`)
} 

alert(`${attackCharacterName}
Poder de ataque: ${attackPower}

${defenseCharacterName}
Pontos de vida: ${healthPoints}
Pontos de defesa: ${defensePower}
Escudo: ${shield}` )

//Ainda sem o tratamento de erro, na progressão do curso, com certeza vai começar adicionar os tratamentos.

/*
const atacante = prompt("Qual é o nome do personagem atacante?")
const poderDeAtaque = prompt("Qual é o seu poder de ataque?")

const defensor = prompt("Qual é o nome do personagem defensor?")
let pontosDeVida = prompt("Quantos pontos de vida ele possui?")
const poderDeDefesa = prompt("Qual é o seu poder de defesa?")
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0

if(poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
   danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
   danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
   atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
   defensor + "\nPontos de vida: " + pontosDeVida + 
   "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)

*/