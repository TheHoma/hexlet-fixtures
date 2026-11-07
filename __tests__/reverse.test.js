import fs from "fs";
import path from "path";
import reverse from "../src/index.js";


const getFixturePath = (filename) => path.join(import.meta.dirname, "..", "__fixtures__", filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), "utf-8");


test("reverse", () => {
  // TODO: здесь будет чтение файла и запись его содержимого в константу
  const text = readFile("text.txt");
  const result = readFile("reversed.txt");

  expect(reverse(text)).toEqual(result);
});