const tabsBtns = document.querySelectorAll('[data-tab]');

for (let btn of tabsBtns) {

  btn.addEventListener('click', function () {

    // Убираем активный класс у всех кнопок
    for (let btn of tabsBtns) {
      btn.classList.remove('tab-controls__btn--active')
    }

    // Добавляем активный класс к текущей кнопке
    this.classList.add('tab-controls__btn--active');

  })
}