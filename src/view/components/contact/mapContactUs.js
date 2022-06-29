import { p } from "../widgets/p.js";
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const mapContactUs = function () {
    const divMapAdress = document.createElement('div')
    
    const divMap = document.createElement('div')
  divMap.classList.add('divmap')

    

    const map = L.map(divMap).setView([51.5, -0.09], 19);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '© OpenStreetMap'
    }).addTo(map);
    
    const marker = L.marker([51.5, -0.09]).addTo(map);
    marker.bindPopup("<b>BOTIQUE BUSHIDO</b>").openPopup();

    divMapAdress.append(
        divMap,
        p('The Chase Centre, 2 Chase Rd, London NW10 6HZ, United Kingdom')
    )
    return divMapAdress
}

export { mapContactUs }