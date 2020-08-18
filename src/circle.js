/* eslint-disable max-len */

/*
  Essa função recebe o raio de um círculo,
  retornando um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos! Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/
// const assert = require('assert');

const circle = (radius) => {
  const PI = 3.14;
  if (!radius) { return undefined; }
  return {
    radius,
    area: PI * radius * radius,
    circumference: 2 * PI * radius,
  };
};
// console.log(circle.area)
// console.log(circle(1).value)
// console.log(circle(3))
// console.log(circle(2))
// console.log(circle.length)
module.exports = circle;


// assert.deepStrictEqual(Object.values(circle(1)).length, 3);
// assert(circle(1), 'object')
// assert(circle(1), 'object')

// assert.strictEqual(circle(2).circumference, 12.56);

// assert.strictEqual(parseFloat((circle(3).area).toPrecision(4)), 28.26);

// assert.strictEqual(circle(3).radius,3);

// assert.strictEqual(parseFloat((circle(3).area).toPrecision(4)), 28.26);

// assert.strictEqual(circle(3).circumference,18.84);
// assert.isOk(circle(1))
