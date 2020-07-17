// make things in javascript and add to the DOM tutorial

console.log('todo.js');
// first get references to the elements
var compose = document.querySelector('#compose');
var directionsWrapper = document.querySelector('#directions-wrapper');
var directions = document.querySelector('#directions');
// var card = document.createElement('div');

function todo(message) {
    // by creating this card 'div' we encapsualte it so if we look in the console we wouldnt be able to see this by typing in card
    var card = document.createElement('div');
    card.setAttribute('class', 'card');

    // JS createElement doesn't have checkbox so we then define this after
    var checkbox = document.createElement('input');
    // Define here
    checkbox.setAttribute('type', 'checkbox');
    // no quotes as its a variable
    card.appendChild(checkbox);

    //do message
    // card.innerHTML = += 'test message'
    card.innerHTML += message;

    //...
    // add delete button
    var deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'button');
    deleteButton.innerHTML = 'DELETE';
    // add the delete button to the card
    card.appendChild(deleteButton);

    // event handler for delete INSIDE function
    // it has to be inside the function
    deleteButton.addEventListener('click', function () {
        // it goes away
        card.outerHTML = null;
    })




    // again not a string its an object
    //document.querySelector('body').appendChild(card); // visible
    // do message card.innerHTML = 'test message';
    // this obliterates the checkbox as we are overwriting innerHTML


    // it gave exception when I did this line
    // document.querySelector('body').insertBefore(card, directions);
    // 
    document.querySelector('body').insertBefore(card, directions);
} // end todo

// add event handling
// directions.addEventListener('click', todo);
// we need to pass in input compose.message
directions.addEventListener('click', function () {
    // cant get message but from dom we can get compose.value
    // as its a top level value
    todo(compose.value)
});