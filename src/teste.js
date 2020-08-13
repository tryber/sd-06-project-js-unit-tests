const average = (array) => {
  let soma = 0;
  let  media = 0;
  for(let i = 0; i < array.length; i += 1) {
    if(typeof array[i] === 'number') {
      soma += array[i];
    } else return undefined;
  }
  soma = soma;
  media = soma/array.length;
  return media.toFixed(0);
};
console.log("aaa");
console.log(average([-11, 2, 5]));
