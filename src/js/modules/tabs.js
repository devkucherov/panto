import { swiper } from './swiper';

const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {

  btn.addEventListener('click', function () {

    // Убираю активный класс у всех кнопок
    for (let btn of tabsBtns) {

      btn.classList.remove('tab-controls__btn--active')

    }

    // Добавляю активный класс к текущей кнопке
    this.classList.add('tab-controls__btn--active');

    // Показываю категорию выбранных товаров и скрываю остальные
    for (let product of tabsProducts) {

      if (this.dataset.tab === 'all') {

        product.classList.remove('none');

      } else {

        if (product.dataset.tabValue === this.dataset.tab) {

          product.classList.remove('none');
  
        } else {
  
          product.classList.add('none');
  
        }
      }
    }

    // Обновляю сетку свайпера
    swiper.update()

  })
}