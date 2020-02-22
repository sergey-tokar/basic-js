module.exports = function countCats(backyard) {
  let counter = 0;
  backyard.forEach(element => {
    let cats = element.filter(item => item === "^^");
    counter += cats.length;
  });

  return counter;
};
