document.addEventListener('DOMContentLoaded', function() {
    // Select all checkboxes within the .eggSelector container
    var checkboxes = document.querySelectorAll('.eggSelector input[type="checkbox"]');
    let lastChecked;
    const continueBtn = document.getElementById('continueBtn'); // Get the Continue button

    function updateContinueButtonVisibility() {
        // Count the number of checked checkboxes
        const checkedCount = document.querySelectorAll('.eggSelector input[type="checkbox"]:checked').length;
        // Show the Continue button if exactly one checkbox is checked, otherwise hide it
        continueBtn.style.display = checkedCount === 1 ? 'block' : 'none';
    }

    checkboxes.forEach(function(checkbox) {
        // Add a click event listener to each checkbox
        checkbox.addEventListener('click', function() {
            // If there's a last checked checkbox and it's not the current one, uncheck it
            if (lastChecked && lastChecked !== checkbox) {
                lastChecked.checked = false;
            }
            // Update lastChecked to the currently clicked checkbox
            lastChecked = checkbox.checked ? checkbox : null;
            updateContinueButtonVisibility();
        });
    });
    updateContinueButtonVisibility();
});