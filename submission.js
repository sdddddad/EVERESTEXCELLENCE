function login() {
    const employeeID = document.getElementById('employee-id').value.trim();
    const validEmployeeIDs = ['ef10818', 'ef20012', 'ef10000', 'ef10002'];
    const errorMessage = document.getElementById('error-message');
  
    if (validEmployeeIDs.includes(employeeID)) {
      window.location.href = "rolespage.html";  // Ensure this matches the exact file name and path
    } else {
      errorMessage.textContent = "Please enter a valid employee ID.";
    }
  }
  