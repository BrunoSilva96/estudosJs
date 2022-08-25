const valueInMeters = prompt("Insira um valor em metros(m) para a conversão.");

const conversion = prompt("Em qual medida você quer converter?" + 
"\n1 - milímetros (mm)" +
"\n2 - centímetros (cm)" +
"\n3 - decímetros (dm)" +
"\n4 - decâmetros (dam)" +
"\n5 - hectômetros (hm)" +
"\n6 - quilômetros (km)");

//Pequena mudança para melhorar o código, alterei os alerts para um melhor entendimento.

switch(conversion) {
   case "1":
      alert("Resultado " + valueInMeters + "m = " + valueInMeters * 1000 + "mm");      
      break;
   case "2":
      alert("Resultado " + valueInMeters + "m = " + valueInMeters * 100 + "cm"); 
      break;
   case "3":
      alert("Resultado " + valueInMeters + "m = " + valueInMeters * 10 + "dm");       
      break;
   case "4":
      alert("Resultado " + valueInMeters + "m = " + valueInMeters / 10 + "dam");       
      break;
   case "5":
      alert("Resultado " + valueInMeters + "m = " + valueInMeters / 100 + "hm");       
      break;
   case "6":
      alert("Resultado " + valueInMeters + "m = " + valueInMeters / 1000 + "km");       
      break;
   default:
      alert("Opção inválida!!!");
}

/*
Código do profesor

const medida = prompt("insira uma medida em metros:")

const unidade = prompt(
   "Para qual unidade de medida deseja converter?" + 
   "\n1 - milímetros (mm)" +
   "\n2 - centímetros (cm)" +
   "\n3 - decímetros (dm)" +
   "\n4 - decâmetros (dam)" +
   "\n5 - hectômetros (hm)" +
   "\n6 - quilômetros (km)"
)
 
witch(unidade) {
   case "1":
      alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")      
      break;
   case "2":
      alert("Resultado: " + medida + "m = " + medida * 100 + "cm")      
      break;
   case "3":
      alert("Resultado: " + medida + "m = " + medida * 10 + "dm")      
      break;
   case "4":
      alert("Resultado: " + medida + "m = " + medida / 10 + "dam")       
      break;
   case "5":
      alert("Resultado: " + medida + "m = " + medida / 100 + "hm")     
      break;
   case "6":
      alert("Resultado: " + medida + "m = " + medida / 1000 + "km")      
      break;
   default:
      alert("Opção inválida!!!");
}

*/ 