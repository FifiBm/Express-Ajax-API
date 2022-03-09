$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: '/data',
    })
    .done(function(msg) {
        // create new list item element for each item in the msg array and append it to the ul

        //iterate over msg array
        msg.forEach((Item) => {
            // create new list item
            // add current grocerry to list item
            // append list item to unordered list
            $('ul').append(`<li> ${item}</li>`);
        })
    })
})