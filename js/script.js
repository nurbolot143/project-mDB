/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const adv = document.querySelectorAll(".promo__adv img");
const genre = document.querySelector(".promo__genre");
const background = document.querySelector(".promo__bg");
const movieList = document.querySelector(".promo__interactive-list");

adv.forEach((img) => img.remove());

genre.textContent = "Драма";

background.style.cssText =
  "background: url('img/bg.jpg') no-repeat; background-position: center; background-size: cover";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
  sort: function () {
    this.movies.sort();
  },
  create: function () {
    this.movies.forEach((movie) => {
      const li = document.createElement("li");
      li.classList.add("promo__interactive-item");
      li.innerHTML = movie;
      movieList.append(li);
    });
  },
};

movieDB.sort();
movieDB.create();
