# React pet project collection

# 🚀 *Быстрый запуск*

## Предварительные требования

### Для запуска без докера необходим установленный [Node.js](https://nodejs.org/)

Для проверки установленного Node.js, воспользуйтесь следующие команды, которые выведут версии node и npm (
устанавливается вместе с node.js):

```bash
    node -v 
   ```

```bash
    npm -v
  ```

## ⚙️ Началом является клонирование репозитория

```
    git clone https://github.com/tmribob/react-projects
    cd react-projects
```

## Инструкция по запуску

### Установка зависимостей

```
    npm install
```

### Запуск проекта

```
  npm start
```

### [Если само не открылось нажать тут](http://localhost:3000)

# 🛠 Запуск через docker

## В случае установленного у вас docker

### Сборка

``` 
    docker build -t react-projects .
```
### Запуск
``` 
    docker run -p 3000:3000 react-projects
```

