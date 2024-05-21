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
        if (event.target && event.target.classList.contains('products__page')) {
            pages.forEach((item, i) => {
                if (event.target == item) {
                    unselectPage();
                    selectPage(i);
                    pageIndex = i + 1; // Обновляем pageIndex при ручном выборе страницы
                }
            });
        }
    });

    function nextPage(n) {
        pageIndex += n;
       
        if (pageIndex > pages.length) {
            pageIndex = 1; // Если закончились страницы, сбрасываем на первую
        }
        if (pageIndex < 1) {
            pageIndex = pages.length; // Если индекс меньше 1, устанавливаем на последнюю страницу
        }

        unselectPage();
        selectPage(pageIndex - 1);
    }

    function plusPages(n) {
        nextPage(n);
    }

    nextBtn.addEventListener('click', () => {
        plusPages(1);
    });

});