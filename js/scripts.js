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
  for (var i=0; 1 < this.toppings.length; i ++) {
    price += 2;
  }
  this.price = price;
  return price;
}
