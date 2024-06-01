document.addEventListener('DOMContentLoaded', function() {
  // First button click event
  document.getElementById('read-more-about').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default behavior of the link
    const targetId = "about-heading"; // ID of the target element
    const targetElement = document.getElementById(targetId); // Find the target element
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element smoothly
    }
  });

  // Second button click event
  document.getElementById('read-more-service-hours').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default behavior of the link
    const targetId = "service-hours-heading"; // ID of the target element
    const targetElement = document.getElementById(targetId); // Find the target element
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element smoothly
    }
  });

  // Third button click event
  document.getElementById('read-more-why').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default behavior of the link
    const targetId = "why-heading"; // ID of the target element
    const targetElement = document.getElementById(targetId); // Find the target element
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element smoothly
    }
  });

  // Fourth button click event
  document.getElementById('read-more-determine').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default behavior of the link
    const targetId = "determine-heading"; // ID of the target element
    const targetElement = document.getElementById(targetId); // Find the target element
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element smoothly
    }
  });

  // Fifth button click event
  document.getElementById('read-more-contact').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default behavior of the link
    const targetId = "contact-heading"; // ID of the target element
    const targetElement = document.getElementById(targetId); // Find the target element
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element smoothly
    }
  });
});




