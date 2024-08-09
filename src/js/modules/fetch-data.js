import axios, {isCancel, AxiosError} from 'axios';

function createCards(data) {
    const parentBox = document.querySelector('.products__cards');

    data.forEach(item => {
        let card = document.createElement('div');
        let originalPrice;
        let label;

        !item.originalPrice ? originalPrice = '' : originalPrice = `<p class="products__card__ex-price">Rp ${item.originalPrice}</p>`

        if (!item.label){
          label = `<div class="products__card__label"></div>`;
        }else if(item.label === 'New'){
          label = `<div class="products__card__label mint">New</div>`;
        }else {
          label = `<div class="products__card__label pink">${item.label}</div>`;
        }

        card.innerHTML = `
             <div class="products__card">
                 ${label}
                 <img class="products__card__img" src=${item.imageUrl} alt="${item.title}">
                 <p class="products__card__title">${item.title}</p>
                 <p class="products__card__descr">${item.description}</p>
                 <p class="products__card__price">Rp ${item.currentPrice}</p>
                 ${originalPrice}
                 <div class="products__card__overlay">
                    <button class="btn_white-yellow">Add to cart</button>
                      <ul class="options-bar">
                        <li class="options-bar__item"><a href="#">
                          <img class="options-bar__icon" src="src/icons/share.svg">Share</a></li>
                        <li class="options-bar__item"><a href="#">
                          <img class="options-bar__icon" src="src/icons/compare.svg">Compare</a></li>
                        <li class="options-bar__item"><a href="#">
                          <img class="options-bar__icon" src="src/icons/like.svg">Like</a></li>
                      </ul>
                </div>
             </div>
            `
            parentBox.appendChild(card);
    });
}

axios.get('https://acfp066m.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22product%22%5D%7B%0A++title%2C%0A++slug%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++currentPrice%2C%0A++description%2C%0A++label%2C%0A++originalPrice%2C%0A++_id%0A%7D&perspective=published')
  .then(function (response) {
    // handle success
    console.log(response.data.result[2]);
    createCards(response.data.result);
  })
  .catch(function (error) {
    // handle error
   console.log(error);
  })
  .finally(function () {
    // always executed
    console.log('done');
  });

  