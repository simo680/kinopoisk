# Movie App

Приложение для просмотра фильмов

## Стек

- React
- TypeScript
- MobX
- React Router

## Установка

Склонируйте репозиторий

```bash
git clone https://github.com/username/movie-app.git
```

Скачайте зависимости

```bash
npm install
```

Запуск в режиме разработки

```bash
npm run dev
```

## Переменные окружения

Ключи и переменные окружения хранятся в файле в .env.default

## Проблемы с API

Если у вас не будет показываться API из-за использованных полностью запросов, то вы можете раскомментировать следующие строки:

1. В `MoviesStore`:

```ts
const res = await Api.getMovies();

// Замените на:

const res = MoviesMock;
```

2. В `MovieDetailPage`:

```ts
const data = await Api.getMovie(id);

// Замените на:

const data = MoviesMock.docs.find((movie) => movie.id === Number(id));
```

Таким образом, вместо настоящего API будет использоваться мок-данные из `MoviesMock`.
