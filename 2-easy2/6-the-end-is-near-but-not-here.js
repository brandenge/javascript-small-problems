const penultimate = (words) => words.split(' ').at(-2);
const middleWord = (words) => {
  wordsArr = words.split(' ');
  return wordsArr[parseInt(wordsArr.length / 2)];
};
