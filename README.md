# House
- Макет: https://www.figma.com/file/SjHvI8W1yzwJjzyUrCPpsI/House?type=design&node-id=3%3A838&t=VZiVKXvlLixjtJN8-1

## Возможности сборщика
- разработка на локальном сервере
- деплой на ftp
- сборка в zip-архив
- оптимизация png/jpg-картинок через tinyPNG
- сборка svg-спрайтов
- конвертация otf/ttf в woff/woff2
- линтинг: Pug, Scss

## Используемые технологии
- HTML5 (Pug)
- CSS3 (SCSS)
- JavaScript ES6+
- Gulp v4.0.2
- Webpack v5.74.0
- Node.js v16.13.0

## Начало работы
1. Клонирования репозитория `git clone git@gitlab.com:dl_dev/starter.git`
2. Установка зависимости `npm i`
3. Создать копию файла без воскл. знака `gulp/config/!ftp.js`
4. Режим разработки `npm start`

## CLI-команды
1. Запуск локального сервера: `npm start`
2. dev-сборка `npm run dev`
3. production-сборка `npm run build`
4. Деплой на FTP: `gulp deploy`
5. Сборка в zip-архив `gulp pkzip`
6. Линтинг pug `gulp lint:template`
7. Линтинг SCSS `gulp lint:scss`
8. Конвертация шрифтов в woff/woff2 `gulp fonts`
9. Оптимизация картинок `gulp tiny`
10. Создание SVG-спрайта: `gulp svgsprite`
11. Выполнить одновременно пп. 8-10: `gulp prepare`

## Загрузка билда на FTP
### Настройка
- Файл настроек: gulp/config/ftp.js
- Настройки по умолчанию задаём в коллекции default
- Для доп. настроек загрузки создаём дополнительное поле с той же структурой, что и default
- В массиве <default>.pathes задаются целевой путь и правила выборки файлов для загрузки по этому пути

### Деплой
- Собираем билд: `npm run build`
- Для загрузки по умолчанию вводим `gulp deploy`
- Для загрузки по доп. настройкам задаём одноимённый параметр. Например: `gulp deploy --prod`