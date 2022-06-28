import {p} from "../widgets/p.js";

const mapContactUs = function(){
    const map = L.map('map').setView([51.5295177,-0.2596138], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
    
    const marker = L.marker([51.5295177,-0.2596138]).addTo(map);
    marker.bindPopup("<b>BOTIQUE BUSHIDO</b>").openPopup();
    p('The Chase Centre, 2 Chase Rd, London NW10 6HZ, United Kingdom')
}

export {mapContactUs}