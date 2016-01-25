function Todo(itemName) {
  this.itemName = itemName;
}

$(document).ready( function() {
  $('form#new-item').submit(function(event) {
    event.preventDefault();

    var newItemName = $('input#new-item-name').val();


    $('ul#items').append('<li><span class="todo-item">' +
    '<button class="btn btn-success" >Done</button> ' +
    newItemName +'</span></li>');
  });
});
