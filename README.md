## Чат для сайта, работающий с telegram.

**Описание:** Реализация идеи создать чат, который можно встроить на сайт, для связи пользователя сайта с администратором в телеграме. Приложение реализует чат между браузером и telegram. Скрипт на сайте через websocket связывается с сервером (сервер залит на heroku), который, с помощью Telegram Bot API и webhook поддерживает связь с telegram. Сервер работает на node.js (express), клиентская часть на нативном JS. Клиент расчитан на встраивание в уже готовый код: создание необходимого DOM-дерева, установка стилей и логики чата инкапсулирована в один js-файл, который нужно просто подключить к существующему HTML.

**Ссылки:**
[Исходный код](https://github.com/d00dde/telegram-chat) приложения.
[Демо-версия](https://still-wildwood-56365.herokuapp.com/) приложения.

**Использованы технологии:**

- node.js;
- express;
- web socket;
- telegram API;
- webhooks;
- native JS.
