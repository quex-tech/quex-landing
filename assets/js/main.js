'use strict'
// кастомные функции

var swiper = new Swiper(".data__swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 230,
  // grabCursor: true,
  mousewheel: {
    forceToAxis: true, // Отключает вертикальный скролл в пределах свайпера
    releaseOnEdges: true, // Позволяет продолжить скролл страницы после края свайпера
    sensitivity: 1, // Уменьшает скорость прокрутки (чем меньше, тем медленнее)
    thresholdDelta: 20, // Требует большего изменения колеса для срабатывания (уменьшает чувствительность)
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".grab__swiper2", {
  slidesPerView: 'auto',
  grabCursor: true,
  freeMode: true,
  loop: true
});
document.querySelectorAll('.registration__text a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelectorAll('.registration__text a').forEach((a) => a.classList.toggle('active'))
    document.querySelectorAll('.registration__slider1').forEach((el) => el.classList.toggle('registration__slider1_active'))
    document.querySelectorAll('.registration__slider2').forEach((el) => el.classList.toggle('registration__slider2_active'))
    document.querySelectorAll('.registration__image img').forEach((img) => img.classList.toggle('active'))
  })
});
// замена лого в шапке при скролле
document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.header__box'); // Получение первого элемента с классом 'header__box'

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) { // Меняем логотип, когда страница прокручена больше чем на 20px
      element.classList.add("header-scrolled");
    } else {
      element.classList.remove("header-scrolled");
    }
  });
});

// бургер
document.addEventListener("click", function (event) {
  // event.preventDefault()
  let element = document.querySelector(".nav__adapt");
  let toggleButton = document.querySelector(".burger");

  // Если клик по кнопке — переключаем класс
  if (toggleButton.contains(event.target)) {
    element.classList.toggle("active");
    return; // Прерываем выполнение, чтобы не закрыть сразу
  }

  // Если клик снаружи и у элемента есть класс "active" — удаляем его
  if (element.classList.contains("active") && !element.contains(event.target)) {
    element.classList.remove("active");
  }
});
// скролл в networks

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".media__swiper");
  let isDown = false;
  let startX;
  let scrollLeft;

  // Дублируем элементы для бесконечного скролла
  function cloneItems() {
    const items = [...slider.children];
    items.forEach((item) => {
      slider.appendChild(item.cloneNode(true)); // Копия в конец
      slider.insertBefore(item.cloneNode(true), slider.firstChild); // Копия в начало
    });
  }

  cloneItems();

  function setInitialScroll() {
    slider.style.scrollBehavior = "auto"; // Отключаем плавный скролл при установке позиции
    slider.scrollLeft = slider.scrollWidth / 3;
    setTimeout(() => {
      slider.style.scrollBehavior = "smooth"; // Включаем обратно плавный скролл
    }, 50);
  }

  setTimeout(setInitialScroll, 100);

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = "grabbing";
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });

  // Оптимизированное зацикливание без лагов
  slider.addEventListener("scroll", () => {
    const middle = slider.scrollWidth / 3;

    if (slider.scrollLeft <= middle / 2) {
      slider.style.scrollBehavior = "auto";
      slider.scrollLeft += middle;
      setTimeout(() => {
        slider.style.scrollBehavior = "smooth";
      }, 50);
    } else if (slider.scrollLeft >= middle * 2) {
      slider.style.scrollBehavior = "auto";
      slider.scrollLeft -= middle;
      setTimeout(() => {
        slider.style.scrollBehavior = "smooth";
      }, 50);
    }
  });

  window.addEventListener("resize", setInitialScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".networks-list");
  let isDown = false;
  let startX;
  let scrollLeft;

  // Дублируем элементы для бесконечного скролла
  function cloneItems() {
    const items = [...slider.children];
    items.forEach((item) => {
      slider.appendChild(item.cloneNode(true)); // Копия в конец
      slider.insertBefore(item.cloneNode(true), slider.firstChild); // Копия в начало
    });
  }

  cloneItems();

  function setInitialScroll() {
    slider.style.scrollBehavior = "auto"; // Отключаем плавный скролл при установке позиции
    slider.scrollLeft = slider.scrollWidth / 3;
    setTimeout(() => {
      slider.style.scrollBehavior = "smooth"; // Включаем обратно плавный скролл
    }, 50);
  }

  setTimeout(setInitialScroll, 100);

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = "grabbing";
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });

  // Оптимизированное зацикливание без лагов
  slider.addEventListener("scroll", () => {
    const middle = slider.scrollWidth / 3;

    if (slider.scrollLeft <= middle / 2) {
      slider.style.scrollBehavior = "auto";
      slider.scrollLeft += middle;
      setTimeout(() => {
        slider.style.scrollBehavior = "smooth";
      }, 50);
    } else if (slider.scrollLeft >= middle * 2) {
      slider.style.scrollBehavior = "auto";
      slider.scrollLeft -= middle;
      setTimeout(() => {
        slider.style.scrollBehavior = "smooth";
      }, 50);
    }
  });

  window.addEventListener("resize", setInitialScroll);
});
