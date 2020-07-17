console.log('todo.js');
// first get references to the elements
var compose = document.querySelector('#compose');
var directionsWrapper = document.querySelector('#directions-wrapper');
var directions = document.querySelector('#directions');
// we could declare but make it hidden
// var card = document.createElement('div');
function todo(message) {
    // by creating this card 'div' we encapsulate it so if we look in the console we wouldnt be able to see this by typing in card
    var card = document.createElement('div');
    card.setAttribute('class', 'card');
    // JS createElement doesn't have checkbox so we then define this after
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    card.appendChild(checkbox);

    //do message
    card.innerHTML += message;

    // add delete butoon
    var deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'button');
    deleteButton.innerHTML = 'DELETE';

    // event handler for delete INSIDE function
    deleteButton.addEventListener('click', function () {
        card.outerHTML = null;
    });

    card.appendChild(deleteButton);
    //...
    // document.querySelector('body').appendChild(card); // visible
    document.querySelector('body').insertBefore(card, directions);
} // end todo

// add event handling
directions.addEventListener('click', function () {
    todo(compose.value)
});