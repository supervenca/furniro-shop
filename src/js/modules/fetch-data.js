import axios, {isCancel, AxiosError} from 'axios';

function createCards(data) {
    const parentBox = document.querySelector('.products__cards');

    data.forEach(item => {
        let card = document.createElement('div');
        let originalPrice;
        let label;

        item.attributes.originalprice === null ? originalPrice = '' : originalPrice = `<p class="products__card__ex-price">Rp ${item.attributes.originalprice}</p>`

        if (item.attributes.label === null){
          label = `<div class="products__card__label"></div>`;
        }else if(item.attributes.label === 'New'){
          label = `<div class="products__card__label mint">New</div>`;
        }else {
          label = `<div class="products__card__label pink">${item.attributes.label}</div>`;
        }

        card.innerHTML = `
             <div class="products__card">
                 ${label}
                 <img class="products__card__img" src=${item.attributes.img_url} alt="${item.attributes.name}">
                 <p class="products__card__title">${item.attributes.name}</p>
                 <p class="products__card__descr">${item.attributes.description}</p>
                 <p class="products__card__price">Rp ${item.attributes.price}</p>
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

axios.get('https://dependable-friends-ef3ae9372e.strapiapp.com/api/furniro-products')
  .then(function (response) {
    // handle success
    console.log(response.data.data[0].attributes.name);
    createCards(response.data.data);
  })
  .catch(function (error) {
    // handle error
   console.log(error);
  })
  .finally(function () {
    // always executed
    console.log('done');
  });

  