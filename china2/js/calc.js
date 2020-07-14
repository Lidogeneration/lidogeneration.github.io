// Цены видов товара
const priceProductType = {
  other_prod: 100,
  phones: 200,
  smart_clock: 300,
  mining: 400
};

// Цены способа доставки
const priceDeliveryMethod = {
  plane: 10,
  train: 20,
  sea: 30,
  auto: 40
};

// Цены упаковки
const pricePackaging = {
  basik: 1000,
  def: 2000,
  maxdef: 3000
};

const productType = document.getElementsByName('products');
const deliveryMethod = document.getElementsByName('delivery');
const packaging = document.getElementsByName('bag');

const lastSumm = document.getElementById('last-summ');

let getProdType = priceProductType["other_prod"];
let getDelivMeth = priceDeliveryMethod["plane"];
let getPackaging = pricePackaging["basik"];

// Вид товара
for(let i = 0; i < productType.length; i++) {
  productType[i].onclick = onClickProductType;
}
// Способ доставки
for(let i = 0; i < deliveryMethod.length; i++) {
  deliveryMethod[i].onclick = onClickDeliveryMethod;
}
// Упаковка
for(let i = 0; i < packaging.length; i++) {
  packaging[i].onclick = onClickPackaging;
}

function onClickProductType(event) {
  getProdType = priceProductType[event.target.value];
  editLastSumm(getProdType, getDelivMeth, getPackaging);
};

function onClickDeliveryMethod(event) {
  getDelivMeth = priceDeliveryMethod[event.target.value];
  editLastSumm(getProdType, getDelivMeth, getPackaging);
};

function onClickPackaging(event) {
  getPackaging = pricePackaging[event.target.value];
  editLastSumm(getProdType, getDelivMeth, getPackaging);
};

function editLastSumm(prodType, delivMeth, packaging) {
  lastSumm.textContent = prodType + delivMeth + packaging;
};

editLastSumm(getProdType, getDelivMeth, getPackaging);