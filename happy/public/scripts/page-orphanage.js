//criando o obj para deixar o mapa estático
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheelZoom: false,
    zoomControl: false
}

//criando o mapa
const map = L.map('mapid', options).setView([-22.9980782,-47.5022314], 15); //const = constante, n dá pra mudar

//recebe 2 argumentos string e obj
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    { 
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
// adicionar ao mapa
).addTo(map);

//cria uma marcação no mapa
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})



L.marker([-22.9980782,-47.5022314], {icon})
    .addTo(map)

/*GALERIA DE IMAGEM /image gallery*/
function selectImage(event){
    const button = event.currentTarget

    //remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de IMAGEM
    imageContainer.src = image.src
    // adicionar de volta a classe active para o botão clicado
    button.classList.add('active')
}



