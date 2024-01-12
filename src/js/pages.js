window.addEventListener('DOMContentLoaded', () => {

    const pages = document.querySelectorAll('.products__page');
    const pagesParent = document.querySelector('.products__pages');
    const nextBtn = document.querySelector('.btn__next');
    let pageIndex = 1;

    function selectPage(i = 0){
        pages[i].classList.add('pages__active');
        pages[i].classList.remove('pages__inactive');
    }
    function unselectPage(){
        pages.forEach(item => {
            item.classList.add('pages__inactive');
            item.classList.remove('pages__active');
        });
    }
    pagesParent.addEventListener('click', (event) => {
        if(event.target && event.target.classList.contains('products__page')){
            pages.forEach((item, i) => {
                if (event.target == item) {
                    unselectPage();
                    selectPage(i);
                }
            });
        }
    });

    function nextPage(n) {
        if(n > pages.length) {
            pageIndex = pages.length;
            //здесь можно добавить динамическое формирование следующей страницы
        }
        if(n < 1){
            pageIndex = pages.length;
    }
        pages.forEach(item => {
            unselectPage();
        });
  
        //pages.[pageIndex - 1].classList.add('pages__active');
        //pages.[pageIndex - 1].classList.remove('pages__inactive');
    }

    function plusPages(n) {
        nextPage(pageIndex += n);
    }

    nextBtn.addEventListener('click', () => {
        plusPages(1);
    });

});