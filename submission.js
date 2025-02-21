document.getElementById("request-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent default form submission

  // Capture form data
  var formData = new FormData(this);

  fetch("https://script.google.com/a/macros/everestfleet.com/s/AKfycbyKeQ2dy0HVRt-xFp2UNksz7ehUG4h-Lg7Ntw3ydSpRs2IpChOlEhragziwjzEDDQ/exec", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    alert("Response from server: " + data);
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
    alert("An error occurred: " + error);
  });
});
