document.addEventListener('DOMContentLoaded', () => {
    const toggleAllButton = document.getElementById('toggleAll');
    const allDetails = document.querySelectorAll('details');

    // A state variable to track whether all sections are currently expanded
    let areAllExpanded = false;

    // Set initial state based on what's open on load. Let's default to collapsed.
    // First, collapse all except the very first chapter for a clean start.
    allDetails.forEach((detail, index) => {
        // The first main chapter is open by default in the HTML, so we respect that.
        if (!detail.open) {
            areAllExpanded = false;
        }
    });
    // If the first one being open is the ONLY one open, we are not "fully expanded"
    // A simple check is to see if more than one is open.
    const openDetails = document.querySelectorAll('details[open]').length;
    if (openDetails === allDetails.length) {
        areAllExpanded = true;
        toggleAllButton.textContent = '➖ Collapse All';
    } else {
        areAllExpanded = false;
        toggleAllButton.textContent = '➕ Expand All';
    }


    toggleAllButton.addEventListener('click', () => {
        // Flip the state: if they were expanded, we want to collapse them, and vice versa.
        areAllExpanded = !areAllExpanded;

        // Apply the new state to all details elements
        allDetails.forEach(detail => {
            detail.open = areAllExpanded;
        });

        // Update the button text to reflect the new state
        if (areAllExpanded) {
            toggleAllButton.textContent = '➖ Collapse All';
        } else {
            toggleAllButton.textContent = '➕ Expand All';
        }
    });
});
