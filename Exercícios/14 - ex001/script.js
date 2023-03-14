function contar(){

    var i = document.getElementById('ini')
    var f = document.getElementById("fim")
    var p = document.getElementById('pas')
    var res = document.getElementById('saida')

    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        i = Number(i.value)
        f = Number(f.value)
        p = Number(p.value)

        if(p <= 0){
            alert('Passo Inválido! Consideramos passo 1')
            p = 1
        }

        if(i < f){
            //Contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c}..\u{1F603} `
            }  
        }else{
            //Contagem decrescente
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c}..\u{1F603} `
            }
        }
        res.innerHTML += `\u{1F448} `  
    }
        
}
