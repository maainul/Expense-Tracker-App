
export const closeModalForm = () => {
    const overlayElement = document.querySelector('.overlay');
    overlayElement.classList.remove('showoverlay');
    document.querySelector('.modal-form').classList.remove('showmodal-form');
}

export const showModalForm =()=> {
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.modal-form').classList.add('showmodal-form');
}
