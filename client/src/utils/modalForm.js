
export const closeModalForm = () => {
    const overlayElement = document.querySelector('.overlay');
    overlayElement.classList.remove('showoverlay');
    document.querySelector('.modal-form').classList.remove('showmodal-form');
}

export const showModalForm = () => {
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.modal-form').classList.add('showmodal-form');
}


// Show Details Page in Modal
export const showDetails = ({ expl }) => {
    // Get modal elements
    const overlayElement = document.querySelector('.overlay');
    const detailsModalElement = document.querySelector('.details-modal-form');

    if (overlayElement && detailsModalElement) {
        // Update modal content with details from the expl object
        // <span onClick={closeDetailsModalForm}>&times;</span>
        detailsModalElement.innerHTML = `
            <div>Expense Details</div>
            <hr/>
            <div>Icon: ${expl.icon}</div>
            <div>Name: ${expl.name}</div>
        `;

        // Add classes to show the modal
        overlayElement.classList.add('showoverlay');
        detailsModalElement.classList.add('showmodal-form');
    } else {
        console.error("Overlay or details-modal-form element not found");
    }
};


export const closeDetailsModalForm = () => {
    const overlayElement = document.querySelector('.overlay');
    const detailsModalElement = document.querySelector('.details-modal-form');

    if (overlayElement && detailsModalElement) {
        // Remove classes to hide the modal
        overlayElement.classList.remove('showoverlay');
        detailsModalElement.classList.remove('showmodal-form');
    } else {
        console.error("Overlay or details-modal-form element not found");
    }
};
