const wrap = (words, columnLength) => {
  let newWords = words.split("");
  for (let i = columnLength; i < words.length; i + columnLength) {
    console.log("i: ", i);
    newWords.splice(i, 0, "\n");
  }
  return newWords.join("");
};
module.exports = wrap;
