const products = ['product_1', 'product_2', 'product_3', 'product_4'];

const domProducts = document.querySelectorAll('.gallery__item');
const mainImage = document.getElementById('main_img');

for (let i = 0; i < products.length; i++) {
  domProducts[i].src = `./assets/img/product_${i + 1}.jpg`;
  domProducts[i].addEventListener('click', () => {
    mainImage.src = domProducts[i].src;
  });
}
