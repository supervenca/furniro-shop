//select size&color
const sizes = document.querySelectorAll('.prod_profile__details__size__opt');
const sizesWrapper = document.querySelector('.prod_profile__details__size__opts');
const colors = document.querySelectorAll('.prod_profile__details__color');
const colorsWrapper = document.querySelector('.prod_profile__details__colors');

sizesWrapper.addEventListener('click', (e) => {
  sizes.forEach(item => {
    item.classList.remove('size_selected');
    if(e.target === item){
      item.classList.add('size_selected');
    }
  });
});

colorsWrapper.addEventListener('click', (e) => {
  colors.forEach(item => {
    item.classList.remove('color_selected');
    if(e.target === item){
      item.classList.add('color_selected');
    }
  });
});

//counter
const incr = document.getElementById('incr');
const decr = document.getElementById('decr');
const counter = document.getElementById('counter');
let count = 1;

counter.innerText = count;

const updateCounter = () => {
  counter.innerText = count;
}

const increase = () => {
  count = count + 1;
  updateCounter();
}

const decrease = () => {
  count = count - 1;
  if(count >= 0){updateCounter()};
}

incr.addEventListener('click', increase);
decr.addEventListener('click', decrease);

//tabs
const tabs = document.querySelectorAll('.prod_desr__tab');
const tabsWrapper = document.querySelector('.prod_desr__tabs');
const tabContent = document.querySelectorAll('.tabcontent');

function hideTabContent() {
      tabContent.forEach(item => {
          item.classList.add('hidden');
      });
      tabs.forEach(item => {
          item.classList.remove('tab_active');
      });
}

function showTabContent(i = 0) {
     tabContent[i].classList.remove('hidden');
     tabs[i].classList.add('tab_active');
}

hideTabContent();
showTabContent();

tabsWrapper.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('prod_desr__tab')) {
            tabs.forEach((item,i) => {
                if (event.target == item) {
                    hideTabContent();
                    showTabContent(i);
             }
          });
      }
});