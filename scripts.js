let prevButton = document.getElementById('prev') // mapeando botão seta direita
let nextButton = document.getElementById('next') // mapeando botão seta esquerda
let container = document.querySelector('.container') // map. section 
let items = container.querySelectorAll('.list .item') // map.  todos os items
let indicator = document.querySelector('.indicators') // map. div indicators
let dots = indicator.querySelectorAll('ul li') // map. ul li (os pontinhos)
let list = container.querySelector('.list') // map. list

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1 

function setSlider(){ // function com códigos iguais em next e prevButton 
 
let itemOld = container.querySelector('.list .item.active') // map. item ativo 
itemOld.classList.remove('active') // removendo item ativo 

let dotsOld = indicator.querySelector('ul li.active') // map. li ativo (pontinho em baixo do número)
dotsOld.classList.remove('active') // removendo li ativo 
dots[active].classList.add('active') // adicionando li ativo

indicator.querySelector('.number').innerHTML = '0 ' + (active + 1) // mudando o numero 
}


nextButton.onclick = () => { // function arow do botão esquerdo

list.style.setProperty('--calculation', 1 ) // trocando propriedade do css
active = active + 1 > lastPosition ? 0 : active + 1  // if & else em linha unica definindo item ativo
setSlider()
items[active].classList.add('active') // adicionando o proximo item (1,2,3)

}


prevButton.onclick = () => { // function arow do botão direito
    list.style.setProperty('--calculation', -1 ) // trocando propriedade do css
active = active - 1 < firstPosition ?  lastPosition : active - 1 // if & else em linha unica definindo item ativo
setSlider()
items[active].classList.add('active') // adicionando o proximo item (3,2,1)

}