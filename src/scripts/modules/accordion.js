export function accordion () {
    $('.ul-mobile__accordion').click((e)=> {
        const arrayElems = Array.from(e.target.children);
        const findBodyElem = arrayElems.find((el) => el.className.includes('ul-mobile__menu'))
        const findHeaderElem = arrayElems.find((el) => el.className.includes('ul-mobile__dropdown'))
        if (findHeaderElem) {
            findHeaderElem?.classList.toggle('show')
        };
        if (findBodyElem) {
            if (findBodyElem.classList.contains('show')) {
                findBodyElem.style.maxHeight = null;
                findBodyElem.classList.remove('show');
            } else {
                findBodyElem.style.maxHeight = findBodyElem.scrollHeight * 2 + "px";
                findBodyElem.classList.add('show');
            }
        };
    });
}

// Для корректной работы необходимо подключить и активировать эту функцию в app.js

// Также для корректной работы необходима библиотека jquery

// Пример подключения: import { accordion } from "./путь/к/файлу/accordion.js";

// Активация: accordion();