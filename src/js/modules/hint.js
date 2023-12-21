const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// клик по кнопкам с подсказками
for (let btn of infoBtns) {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    this.parentNode.querySelector('.info-hint').classList.toggle('none')
  });
}

// закрываем подскаски при клике по документу
document.addEventListener('click', function () {
  for (let hint of infoHints) {
    hint.classList.add('none');
  }
});



// запрещаем всплытие события клика при клике на подсказке
for (let hint of infoHints) {
  hint.addEventListener('click', (e) => e.stopPropagation());
}
