// Реализовать возможность смены цветовой темы сайта пользователем. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

// #### Технические требования:
// - Взять любое готовое домашнее задание по HTML/CSS.
// - Добавить на макете кнопку "Сменить тему".
// - При нажатии на кнопку - менять цветовую гамму сайта (цвета кнопок, фона и т.д.) на ваше усмотрение. При повтором нажатии - возвращать все как было изначально - как будто для страницы доступны две цветовых темы.
// - Выбранная тема должна сохраняться и после перезагрузки страницы

let themeCss = document.querySelector(".css-theme");
let defaultTheme = "./css/style.css";
let newThemeLink = "./css/style-new-theme.css";
let flag = true;

const btnChangeTheme = document.querySelector(".change-theme");
btnChangeTheme.addEventListener("click", funcChangeTheme);

function funcChangeTheme(event) {
event.preventDefault();
  if (flag) {
    themeCss.setAttribute("href", newThemeLink);
    flag = false;
    localStorage.setItem("theme", newThemeLink);
  } else {
    themeCss.setAttribute("href", defaultTheme);
    flag = true;
    localStorage.setItem("theme", defaultTheme);
  }
}


if(localStorage.length > 0) {
  if(localStorage.getItem("theme") === defaultTheme) {
    flag = true;
    window.addEventListener('DOMContentLoaded', () => {
      themeCss.setAttribute("href", localStorage.getItem("theme")); 
    })
  }else if(localStorage.getItem("theme") === newThemeLink) {
    flag = false;
    window.addEventListener('DOMContentLoaded', () => {
      themeCss.setAttribute("href", localStorage.getItem("theme")); 
    })
  }
}
