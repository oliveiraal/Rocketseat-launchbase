const nome = "Alexandre";
const peso = 79;
const altura = 1.73;

const imc = Math.round(peso / (altura * altura));

if (imc >= 30){
	console.log(nome + ", você está acima do peso.")
}else{
	console.log(nome + ", você não está acima do peso")
}
