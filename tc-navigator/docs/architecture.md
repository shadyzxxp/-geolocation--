# Архитектура проекта

Проект состоит из двух основных частей:

1. Frontend (React):
   - Отображение карты ТЦ
   - Интерфейс для поиска магазинов
   - Панель построения маршрутов
   - Блок с акциями и мероприятиями

2. Backend (Node.js + Express):
   - REST API для:
     - списка магазинов
     - маршрутов (граф переходов между узлами ТЦ)
     - акций и мероприятий
   - Работа с базой данных (MongoDB)

## Модель данных (черновик)

- Store:
  - id
  - name
  - category
  - floor
  - coordinatesOnMap

- RouteNode:
  - id
  - floor
  - x, y (координаты на схеме)
  - connections: [id]

- Promotion:
  - id
  - title
  - description
  - storeId
  - dateFrom
  - dateTo
