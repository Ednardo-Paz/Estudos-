function gerar() {
    let num = document.querySelector('input#fnum')
    let tab = document.querySelector('select#ftab')
    if(num.value.length == 0) {
        window.alert('[ERRO] Adicione um número.')
    } else {
       let n = Number(num.value)
       tab.innerHTML = ''
       for(let c = 1; c <= 10; c++){
           let item = document.createElement('option')
           item.text = `${n} x ${c} = ${n*c}`
           tab.appendChild(item)
       }


    }

}