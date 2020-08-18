/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/
 const assert = require('assert');

 const createStudent = (nameOfStudent) => {
  const student = {
    name: nameOfStudent,
    feedback: () => 'Eita pessoa boa!',
  };
    return student;
  };
//  console.log(createStudent('Leandrão, o Lobo Solitário'))

 const estudante = createStudent('Leandrão, o Lobo Solitário');
// assert.strictEqual(typeof estudante, 'object');
 assert.strictEqual(typeof estudante.feedback, 'function');
// assert.strictEqual(estudante.name, 'Leandrão, o Lobo Solitário');
// assert.strictEqual(estudante.feedback(), 'Eita pessoa boa!');

module.exports = createStudent;
