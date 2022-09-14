const hasTooltip = document.querySelectorAll('.has-tooltip');

function closeHasTooltip() {
    let deletableElement = document.querySelector(".tooltip_active");
    if (deletableElement) {
        deletableElement.remove();
    }
}


for(const element of hasTooltip) {
    element.addEventListener('click', (e) =>{
        e.preventDefault();
        closeHasTooltip();
        let {top, left} = element.getBoundingClientRect();
        let text = element.title;
        element.insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active">${text}</div>`);
        element.dataset.position = `top:${top}px; left:${left}px`;
    })
}

// data-position="top:${top}px left:${left}px"