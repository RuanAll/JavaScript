let num = [1,3,7,4]

console.log("O vetor digitado foi: ")
num[4] = 6  // Cria um espaço a mais com o valor pedido
num[2] = 0  // Substitui o valor quardado no indice 2
num.push(2) // Acrescenta o valor 9 depois da ultima posiçao ja existente
c = num.length // Mostra o tamanho do vetor
console.log(num)

console.log("\nO vetor ordenado é: ")

num.sort() // Coloca os itens dentro do vetor em ordem crescente
console.log(num)

console.log(`\nO tamanho do vetor é: ${c}`)

console.log(`Mostre o valor na posição 2: ${num[1]}\n`)

/*
for(let pos = 0; pos<num.length; pos++){ // Mostra os valores de tds as posições do vetor
    console.log(`Valor encontrado na ${pos+1}° posição = ${num[pos]}`)
}
*/
for(let pos in num){ // Para cada posiçao de num 
    console.log(`Valor encontrado na ${pos}° posição = ${num[pos]}`) // Ele mostra o valor guardado
}

// O for de cima tem a msm funcionalidade do for de baixo

//--- Metodo para buscar um valor no vetor ---//


ind = num.indexOf(6)  // Retorna o indice em que o valor 7 esta quardado
if(ind != -1)
    console.log(`\nO valor buscado se encontra na ${ind+1}° posição`)
else
    console.log('\nO valor não foi encontrado!')