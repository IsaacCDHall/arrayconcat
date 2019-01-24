$(function(){
  var sums = [];
  var x;
  $("form").submit(function(event){
    event.preventDefault();
    $("input:checked").each(function() {
      var selected = parseInt($(this).val());
      console.log(selected);

       x = sums.reduce(add,0);
      sums.push(selected);
      console.log(sums);
      console.log(x);
    });
    if(x <=2){
      return $(".ok").text("ayy nice");
    }else if (x <=4) {
      return $(".bad").text("ayy not as nice");
    }else {
      return $(".terrible").text("oooof");
    }
  });

});

function add(a, b) {
    return a + b;
}
