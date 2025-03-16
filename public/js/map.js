document.addEventListener("DOMContentLoaded", function () {
    if (!listingLocation) {
        console.error("Location data is missing!");
        return;
    }

    var map = L.map('map').setView([listingLocation.lat, listingLocation.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([listingLocation.lat, listingLocation.lng])
        .addTo(map)
        .bindPopup("Listing Location")
        .openPopup();
});
