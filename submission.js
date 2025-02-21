document.getElementById("request-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent default form submission

  // Capture form data
  var formData = new FormData(this);

  fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
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
