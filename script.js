const products = ['product_1', 'product_2', 'product_3', 'product_4'];

const domProducts = document.querySelectorAll('.gallery__item');
const mainImage = document.getElementById('main_img');

const color = document.getElementById('color');

for (let i = 0; i < products.length; i++) {
  domProducts[i].src = `./assets/img/product_${i + 1}.jpg`;
  domProducts[i].addEventListener('click', () => {
    mainImage.src = domProducts[i].src;
  });
}

color.addEventListener('change', (e) => {
  console.log(e.target.value);
  mainImage.src = `./assets/img/product_${e.target.value}.jpg`;
});

const timer = document.getElementById('offer__time');

function countdown(time) {
  let currentTime = time;
  let timerId = setInterval(() => {
    currentTime -= 1;
    // console.log(new Date(currentTime * 1000).toISOString().slice(11, 19));
    timer.innerText = new Date(currentTime * 1000).toISOString().slice(11, 19);

    if (currentTime <= 0) {
      clearInterval(timerId);
    }
  }, 1000);
}
// let date = new Date(18000 * 1000).toISOString().slice(11, 19);
countdown(18000);
