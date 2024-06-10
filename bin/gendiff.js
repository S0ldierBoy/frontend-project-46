#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import fs from 'fs';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'Первый файл для сравнения')
  .argument('<filepath2>', 'Второй файл для сравнения')
  .option('-f, --format <type>', 'output format', 'json')
  .action((filepath1, filepath2, type) => {
    // Логика обработки файлов и вывода результата
    console.log(
      `Обрабатываю файлы: ${filepath1} и ${filepath2} по формату ${type}`
    );

    const dirPath = './__fixtures__';

    // Построение абсолютных путей к файлам
    const absolutePath1 = path.resolve(dirPath, filepath1);
    const absolutePath2 = path.resolve(dirPath, filepath2);

    try {
      const result1 = fs.readFileSync(absolutePath1, { encoding: 'utf-8' });
      const result2 = fs.readFileSync(absolutePath2, { encoding: 'utf-8' });

      console.log('Содержимое файла 1:', result1);
      console.log('Содержимое файла 2:', result2);
    } catch (err) {
      console.error(err);
    }
  });

program.parse(process.argv);
//.addValidator() метод валидации файлов
