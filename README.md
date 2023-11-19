
<h1>Тестовый проект на Next.js</h1>

<b>Стек:</b>
- JavaScript
- module SCSS
- NextJS

<b>Маршрутизация организована на основе файловой системы (Data Fetching, Caching, and Revalidating). </b>

<b>Данные получаю с WIREMOCK (https://app.wiremock.cloud) </b>

 <b>API:</b>
 - https://dw9vw.wiremockapi.cloud/pizza
 - https://dw9vw.wiremockapi.cloud/soup
 - https://dw9vw.wiremockapi.cloud/cheese

   
Структура JSON: [
{
    "id": "120d72ede6759",
    "name": "Pizza alley vongole",
    "price": 923
  },
...
]


Загружаю данные с помощью asyn function, кэширую их на сервере, затем пробрасываю их в клиентские компоненты React. Опционально реализовано: поиск продукта, сортировка по цене (от меньшего к большему)
