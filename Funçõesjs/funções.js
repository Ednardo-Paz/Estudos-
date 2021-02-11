let  fnum = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(fnum.value)  && !inLista(fnum.value, valores) ){
        valores.push(Number(fnum.value))
        let item = document.createElement('option')
        item.text = `O número ${fnum.value} foi adicionado.`
        lista.appendChild(item)
        

    } else{
       window.alert('Número inválido ou já existente na lista.')

        
    }
    fnum.value = ''
    fnum.focus()
}
function finalizar(){
    if( valores.length == 0 ){
        window.alert('Digite um número.')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0 
        let media = 0 


        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
           media = soma/tot
        }
 

    res.innerHTML = `Foram encontrados ${tot} numeros cadastrados`
    res.innerHTML += `<p>O maior valor adicionado foi ${maior}<p>`
    res.innerHTML += `<p>O menor valor encontrado foi ${menor}<p>`
    res.innerHTML += `<p> O soma dos valores é de ${soma}<p>`
    res.innerHTML += `<p> A média dos valores é de ${media}`

    }
}