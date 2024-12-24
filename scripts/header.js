document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.website-dropdown'); // Dropdown menu
    const overlay = document.querySelector('.hidden-body'); // Dimming overlay
    const checkbox = document.querySelector('#check'); // Checkbox input
    const label = document.querySelector('label.bar'); // Label for the checkbox

    // Toggle Dropdown and Overlay when Checkbox Changes
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            dropdown.classList.add('active');
            overlay.classList.add('active');
        } else {
            dropdown.classList.remove('active');
            overlay.classList.remove('active');
        }
    });

    // Close Dropdown When Overlay is Clicked
    overlay.addEventListener('click', () => {
        checkbox.checked = false; // Uncheck the checkbox
        dropdown.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Close Dropdown if Clicked Outside
    document.addEventListener('click', (event) => {
        if (
            !dropdown.contains(event.target) &&
            !label.contains(event.target)
        ) {
            checkbox.checked = false; // Uncheck the checkbox
            dropdown.classList.remove('active');
            overlay.classList.remove('active');
        }
    });

    // Prevent Propagation of Label Click to Document
    label.addEventListener('click', (event) => {
        event.stopPropagation(); // Ensures click only toggles the checkbox
    });
});
