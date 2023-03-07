const coin = "€";
let basic_price = 239.88;
let professional_price = 299.88;
let master_price = 479.88;


const first_price = document.querySelector('.price-display:first-child .price');
const second_price = document.querySelector('.price-display:nth-child(2) .price');
const third_price = document.querySelector('.price-display:nth-child(3) .price');

first_price.textContent = basic_price + coin;
second_price.textContent = professional_price + coin;
third_price.textContent = master_price + coin;

const checkbox = document.querySelector("input[type=checkbox]");

checkbox.addEventListener('change', function () {
  if (this.checked) {
    basic_price /= 12;
    professional_price /= 12;
    master_price /= 12;

  } else {
    basic_price = 239.88;
    professional_price = 299.88;
    master_price = 479.88;
  }
  first_price.textContent = basic_price.toFixed(2) + coin;
  second_price.textContent = professional_price.toFixed(2) + coin;
  third_price.textContent = master_price.toFixed(2) + coin;
});