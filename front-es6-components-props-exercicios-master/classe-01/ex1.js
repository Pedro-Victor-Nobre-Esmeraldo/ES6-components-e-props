function sum(...args) {
  return args.reduce((acum, val) => acum + val);
}

console.log(sum(1, 3, 4, 5, 6, 7, 8, 9, 0, 5));