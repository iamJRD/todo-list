function Todo(itemName) {
  this.itemName = itemName;
}

$(document).ready(function() {
  $('form#new-item').submit(function(event) {
    event.preventDefault();


    var newItemName = $('input#new-item-name').val();
    var newTodo = new Todo(newItemName);

    $('ul#items').append('<li><span class="todo-item">' +
    '<button class="btn btn-success done-button">Done</button> ' +
    newItemName +'</span></li>');


//currently not working
    // $("span").click(function(){
    //   if ($("span").hasClass('done-item')) {
    //     $(this).removeClass('done-item');
    //   } else {
    //     $(this).addClass("done-item");
    //   }
    // });

  });

});
