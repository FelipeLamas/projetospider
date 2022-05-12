function handleMouseEnter(){
    this.classList.add('s-card--hovered');
}

function handleMouseLeave(){
    this.classList.remove('s-card--hovered');
}

function addEventListernerssToCards() {
    const cardElements = document.getElementsByClassName('s-card');
    for(let index = 0; index < cardElements.length; index++){
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListerner('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListernerssToCards, false);

