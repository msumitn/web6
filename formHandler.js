document.getElementById('planYourTripForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    destination: document.getElementById('destination').value,
    date: document.getElementById('date').value,
    message: document.getElementById('message').value,
  };

  try {
    const response = await fetch('http://localhost:3000/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Form submitted successfully');
    } else {
      alert('Error submitting form');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error submitting form');
  }
});
