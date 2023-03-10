var idade = 65
if(idade < 16){
    console.log('Proibido Votar')
} else if(idade < 18 || idade > 65){
    console.log('Voto Opcional')
} else{
    console.log('Voto Obrigatório')
}