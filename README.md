### Hexlet tests and linter status:

[![Actions Status](https://github.com/S0ldierBoy/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/S0ldierBoy/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/2b9d43d672c7c9a971c9/maintainability)](https://codeclimate.com/github/S0ldierBoy/frontend-project-46/maintainability)
[![Node CI](https://github.com/S0ldierBoy/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/S0ldierBoy/frontend-project-46/actions/workflows/nodejs.yml)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2b9d43d672c7c9a971c9/test_coverage)](https://codeclimate.com/github/S0ldierBoy/frontend-project-46/test_coverage)

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=50&size=25&pause=1000&color=503DF7&random=false&width=435&height=60&lines=%D0%9E%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5+%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0%3A)](https://git.io/typing-svg)

**Gendiff** – это утилита для сравнения двух файлов. Она отображает различия между файлами в человекочитаемом виде.

## Особенности:

- Поддержка JSON и YAML файлов
- Простота использования из командной строки
- Удобный вывод различий в форматах json, stylish, plain

## Системные требования:

- Node.js версии 14.0 или выше
- npm (обычно устанавливается вместе с Node.js)

> Поддерживаемые операционные системы: Windows, macOS и Linux.

## Установка:

1. Склонируйте репозиторий с помощью команды: _"git clone https://github.com/ваш-логинfrontend-project-46git"_
2. Перейдите в директорию проекта _cd frontend-project-46_
3. Установите необходимые зависимости с помощью команды: _make install_

## Общий синтаксис и доступные команды:

- gendiff -h : Вывод справочной информации по утилите

- gendiff <файл1> <файл2>: Сравнение файлов с выводом в формате stylish (по умолчанию)

- gendiff -f plain <файл1> <файл2>: Сравнение с выводом в формате plain

- gendiff -f json <файл1> <файл2>: Сравнение с выводом в формате json

- make test: Для запуска тестов

- make lint: Для проверки стиля кода

## Пример использования:

> Демонстрацию работы можно посмотреть, кликнув на название формата:

[вывод справочной информации.](https://asciinema.org/a/rZtOM9tPNUdhbGW2HMFlno8nS)

[результат сравнения в формате stylish.](https://asciinema.org/a/wGSHmcdGfjHdc2V0yK8K40M8F)

[результат сравнения в формате plain.](https://asciinema.org/a/PNvw9zls91wp4PIayTMF21cUO)

[результат сравнения в формате json.](https://asciinema.org/a/4i9nwuoIbK1vqjaqm3LOEDAn9)
