document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.website-dropdown');
    const input = document.querySelector('.bar input');
  
    input.addEventListener('click', (event) => {
      dropdown.classList.toggle('active');
      event.stopPropagation(); // Prevents event from propagating to the document
    });
  
    // Close dropdown if clicked outside
    document.addEventListener('click', () => {
        if (!dropdown.contains(event.target) && !button.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});