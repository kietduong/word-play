$(document).ready(function() {
  $("#input form").submit(function(event) {
    var sentenceInput = $("input#sentence").val();
    var words = sentenceInput.split(" ");
    var words = words.forEach();
      words.forEach(function(word) {


      });
    // var newArray = firstArray.map(function()
    //
  });

    $(".new-sentence").text(firstArray);
    event.preventDefault();
  });
});
