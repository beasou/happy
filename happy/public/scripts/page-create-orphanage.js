//criando o mapa
const map = L.map('mapid').setView([-22.9980782,-47.5022314], 15); //const = constante, n dá pra mudar

//recebe 2 argumentos string e obj
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')

.addTo(map);// adicionar ao mapa

//criando uma marcação no mapa
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})

//L.marker([-22.9980782,-47.5022314], {icon})
  //  .addTo(map)

let marker;

//adicionar uma marcação no mapa (à partir do cliente)
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

//salvar a marcação no input, para formulário
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

//remove icon from map
    marker && map.removeLayer(marker);

//Adicionar o icone no local clicado, add icon Layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

//add campo de fotos
function addPhotoField(){
    //pegar o container de fotos #Images
    const container = document.querySelector('#images')
   
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    //realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    
    //verificar se o compo está vazio, se sim n add ao container de fotos
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    //limpar o campo antes de adicionar ao containerde imagens
    input.value = ""

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value=""
        return
    }
    
    //deletar o campo de
    span.parentNode.remove()
}

    //seleção do sim e do não
    function toggleSelect(event){

    //retirar a classe active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))

    //colocar a classe active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado 

    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
    //verificar se sim ou não

   
    }

    