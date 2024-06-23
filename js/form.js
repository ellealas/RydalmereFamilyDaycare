const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";
  result.style.color = "#333"; // Set text color

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
  .then(async (response) => {
    let json = await response.json();
    if (response.status == 200) {
      result.innerHTML = "Your email has been sent!";
      result.style.color = "#4CAF50"; // Green text color for success
    } else {
      console.log(response);
      result.innerHTML = json.message || "Something went wrong!";
      result.style.color = "#f44336"; // Red text color for error
    }
  })
  .catch(error => {
    console.log(error);
    result.innerHTML = "Something went wrong!";
    result.style.color = "#f44336"; // Red text color for error
  })
  .finally(function() {
    form.reset();
    setTimeout(function() {
      result.innerHTML = "";
      result.style.color = ""; // Reset text color
    }, 5000); // Clear message after 5 seconds (adjust as needed)
  });
});

