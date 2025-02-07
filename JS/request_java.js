function initMap() {
  const defaultLocation = { lat: 37.7749, lng: -122.4194 }; // San Francisco (default)
  const map = new google.maps.Map(document.getElementById("map"), {
    center: defaultLocation,
    zoom: 12,
  });

  const marker = new google.maps.Marker({
    position: defaultLocation,
    map: map,
  });

  // Update map and marker when the user changes the delivery address
  document.getElementById("deliveryAddress").addEventListener("change", function () {
    const geocoder = new google.maps.Geocoder();
    const address = this.value;

    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        const location = results[0].geometry.location;
        map.setCenter(location);
        marker.setPosition(location);
      } else {
        alert("Geocode was not successful: " + status);
      }
    });
  });

  // Form submission handler (optional)
  document.getElementById("requestForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
    alert("Request Submitted Successfully!");
  });
}
document.getElementById('logoutButton').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the default anchor behavior

  // Clear user data from local storage
  localStorage.removeItem('userData');

  // Optionally, you can also clear session storage if used
  // sessionStorage.clear();

  // Redirect to the login page or home page
  window.location.href = 'log_in.html'; // Change this to your login page URL
});
