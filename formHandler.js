document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tripForm');

  form.addEventListener('submit', async (event) => {
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
        alert('Form submitted successfully!');
        form.reset();
        document.getElementById('tripFormModal').style.display = 'none';
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      alert(`Error submitting form: ${error.message}`);
    }
  });
});
