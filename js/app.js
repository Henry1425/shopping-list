/* Step 1 :Define the function*/ /*Step 1 : Define the function*/

/*function to add items into the shopping list
(using add to list and enter function)*/
function addItem() {

    //get the value of the input box
    var itemValue = $('#addItemValue').val();

    //validate input
    if (itemValue.length === 0) {
        alert('You have to add something!!!');
    }
    //if the input is valid then do this
    else {
        //dynamicaly create one row inside the shopping list
        var row = $('<li><button class="checkbox">✓</button><span class="list">' + itemValue + '</span><button class="delete">x</button></li>');

        //adds a row to the previous ones
        $('.shopping-list').append(row);

        //empty the input box after submit by resetting value
        itemValue = $('#addItemValue').val('');
    }
}

/*function to select an item to cross out
Note: create the 'ticked' class in CSS file first! You don't need to use it in the index.html because the JS will be adding it automatically to the index*/
function tickItem() {
    //alert("I've just activated the tickItem() function ");

    //$(this) means that on whatever you just clicked, go to the parent of it (in this case the LI) and add / remove the ticked class to it
    $(this).parent().toggleClass('ticked');
}

/*function to remove an item from the list clicking on the 'x'*/
function deleteItem() {
    //alert("I've just activated the deleteItem() function");

    //$(this) means that on WHATEVER you just clicked, go to the parent of it (in our case the LI) and remove it
    $(this).parent().remove();
}

/*function to reset and clear the list */
function deleteAll() {
    //alert("I've just activated the deleteAll() function");

    //find the UL container (in our case having the class shopping-list) which contains all the LIs and delete it
    $('.shopping-list').empty();
}





/*step 2 : use the function*/
$(document).ready(function () {
    /*on click on the "addItem" button activate function called addItem()*/
    $('#addItem').on('click', function () {
        addItem();

    });

    /* on click on the ".delete-all" button activate function called deleteAllItems()*/
    $('.delete-all').on('click', function () {
        deleteAll();
    });

    /*close document ready*/
});

/*on click on the ".delete" button activate function called deleteItem()*/
$(document).on('click', '.delete', deleteItem);
/*on click on the ".checkbox" button activate function called checkItem()*/
$(document).on('click', '.checkbox', tickItem);

/*key press event handlers for extra functionality*/
/*to add an item with the enter key*/
$(document).on('keypress', function (key) {
    //keyCode == 13 (code for ENTER key)
    if (key.keyCode == 13) {
        addItem();
    }
});

/*clears list with DELETE key*/
$(document).on('keypress', function (key) {
    //keyCode == 46 is the DELETE key
    if (key.keyCode == 46) {
        deleteAll();
    }
});
