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

// const feedback = () => 'Eita pessoa boa!';

const createStudent = (stringName) => {
  const createdObject = {
    name: stringName,
    feedback: feedback = () => 'Eita pessoa boa!',
  };
  return createdObject;
};

// const estudante = createStudent('Leandrão, o Lobo Solitário');
// console.log(estudante);
// console.log(estudante.name);
// console.log(estudante.feedback());

module.exports = createStudent;
