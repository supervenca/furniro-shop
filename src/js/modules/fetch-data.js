import axios, {isCancel, AxiosError} from 'axios';

// class ProductCard {
//     constructor(name, description, price, originalprice, discounted, discount, badge){
//         this.name = name;
//         //this.photo = photo;
//         this.description = description;
//         this.price = price;
//         this.originalprice = originalprice;
//         this.discounted = discounted;
//         this.badge = badge;
//         this.discount = discount;
//     }

//     render(){
//         const testcard = document.querySelector('.test-div');
//         testcard.innerHTML = `
//             <div class="products__card">
//                 <div class="products__card__label pink">-${this.discount}</div>
//                 <img class="products__card__img" src="src/img/products/slytherine.png" alt="${this.name}">
//                 <p class="products__card__title">${this.name}</p>
//                 <p class="products__card__descr">${this.description}</p>
//                 <p class="products__card__price">Rp ${this.price}</p>
//                 <p class="products__card__ex-price">Rp ${this.originalprice}</p>
//             </div>
//         `
//     }
// }

const transformData = (data) => {
    return {
        id: data.id,
        name: data.attributes.name,
        description: data.attributes.description,
        price: data.attributes.price,
        originalprice: data.attributes.original.price,
        discounted: data.attributes.discounted,
        badge: data.attributes.badge,
        discount: data.attributes.discount
    }
  }

function createCards(data) {
    const parentBox = document.querySelector('.products__cards');

    data.forEach(item => {
        let card = document.createElement('div');
        card.innerHTML = `
             <div class="products__card">
                 <div class="products__card__label pink">-${item.attributes.discount}</div>
                 <img class="products__card__img" src="src/img/products/slytherine.png" alt="${item.attributes.name}">
                 <p class="products__card__title">${item.attributes.name}</p>
                 <p class="products__card__descr">${item.attributes.description}</p>
                 <p class="products__card__price">Rp ${item.attributes.price}</p>
                <p class="products__card__ex-price">Rp ${item.attributes.originalprice}</p>
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

  