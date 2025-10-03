const data = document.querySelector(".data");
const url = new URL(window.location.href); // получаем url текущей стриницы
// создаем заголовок контейнера с данными
const title_container = document.createElement('h2');
title_container.textContent = 'Данные получены'
// создаем контейнер с данными
const data_container = document.createElement('div');
data_container.classList.add('data-container', 'form__container');
// создаем метку и span для имени
const name_label = document.createElement('span');
name_label.classList.add('label-span');
name_label.textContent = 'Имя: ';
const name_value = document.createElement('span');
name_value.classList.add('value-span');
name_value.textContent = url.searchParams.get("name") + '\n' + '\n';
// создаем метку и span для возраста
const age_label = document.createElement('span');
age_label.classList.add('label-span');
age_label.textContent = 'Возраст: ';
const age_value = document.createElement('span');
age_value.classList.add('value-span');
age_value.textContent = url.searchParams.get("age") + '\n' + '\n';
// создаем метку и span для города
const city_label = document.createElement('span');
city_label.classList.add('label-span');
city_label.textContent = 'Город: ';
const city_value = document.createElement('span');
city_value.classList.add('value-span');
city_value.textContent = url.searchParams.get("city") + '\n' + '\n';
//добавляем полученные данные в контейнер
data_container.appendChild(name_label);
data_container.appendChild(name_value);
data_container.appendChild(age_label);
data_container.appendChild(age_value);
data_container.appendChild(city_label);
data_container.appendChild(city_value);
// добавляем контейнер на стриницу
data_container.prepend(title_container);
document.body.appendChild(data_container);