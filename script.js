document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop default submission to external URL

    // Create confirmation message
    const confirmation = document.createElement('div');
    confirmation.className = "alert alert-success mt-4 text-center";
    confirmation.innerText = "✅ Message sent! Shiju will reply faster than his kids can say “Daaaad!”... and they say it a lot.";

    // Append below form
    form.parentElement.appendChild(confirmation);

    // Reset the form fields
    form.reset();

    // Smooth scroll to confirmation
    confirmation.scrollIntoView({ behavior: 'smooth' });

    // Auto-remove confirmation after 6 seconds
    setTimeout(() => {
      confirmation.remove();
    }, 6000);
  });
});
