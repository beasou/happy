//criando o mapa
const map = L.map('mapid').setView([-22.9980782,-47.5022314], 15); //const = constante, n dá pra mudar

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

//criando o popup
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240

}).setContent(
    
    'Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>'  

)

L.marker([-22.9980782,-47.5022314], {icon})
    .addTo(map)
    .bindPopup(popup)

