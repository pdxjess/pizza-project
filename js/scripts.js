function Pizza(size,toppings) {
  this.size = size
  this.toppings = toppings
}
Pizza.prototype.priceCalculate = function(price, toppings) {
  var price = 0;
  if (this.size !== 1 && this.size !== 2 && this.size !==3) {
    alert("Please choose a size");
    return price = 0;
  }
  if (this.size === 1) {
    price += 13;
  }
  if (this.size === 2) {
    price += 18;
  }
  if (this.size === 3) {
    price += 24;
  }
  for (var i=0; i < this.toppings.length; i ++) {
    price += 2;
  }
  this.price = price;
  return price;
}
var userToppings = [];
$(document).ready(function(){
  $("form#pizzaMenu").submit(function(event) {
    event.preventDefault();
    var userSize = parseInt($("input:checkbox[name=size]:checked").val());
    $("input:checkbox[name=topping]:checked").each(function(){
      userToppings.push($(this).val())
      debugger
    })
    var newPizza = new Pizza(userSize, userToppings);
    var pizzaPrice = newPizza.priceCalculate()
    $("#showPrice").show().html("Your total is:" + "$" + pizzaPrice + "<br><a href=order.html> Place another order</a>")
    $('input[type="checkbox"]').prop('checked', false);
    $('input[type="checkbox"]').prop('checked', false);
    $("#pizzaMenu").find(':submit').attr('disabled','disabled');
  });
});
