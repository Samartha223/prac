// Reference to the status element
const statusElement = document.getElementById("status");

// Initialize and display the map
function initMap(latitude, longitude) {
    // Map options
    const options = {
        zoom: 15,
        center: { lat: latitude, lng: longitude },
    };

    // Create the map
    const map = new google.maps.Map(document.getElementById("map"), options);

    // Add a marker at the user's location
    new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: "You are here!",
    });

    // Update the status
    statusElement.textContent = "Location found!";
}

// Get the user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                initMap(latitude, longitude);
            },
            (error) => {
                statusElement.textContent = `Error: ${error.message}`;
            }
        );
    } else {
        statusElement.textContent = "Geolocation is not supported by your browser.";
    }
}

// Call the function to get location
getLocation();
